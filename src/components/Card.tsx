import { gql, useQuery } from "@apollo/client";
import { Gadgets } from './Gadgets';

const GET_PRODUTOS_QUERY = gql `
    query MyQuery {
        mercadorias {
          id
          link
          name
          parcela
          preco
          img {
            url
          }
        }
      } 
`
interface GetProdutosQueryResponse {
    mercadorias: {
        id: string
        link: string
        name: string
        parcela: string
        preco: string
        loja: 'shopee' | 'aliexpress' | 'amazon'
        img:{
          url : string
        }
      }[]
    }


function Card(){
    const { data } = useQuery<GetProdutosQueryResponse>(GET_PRODUTOS_QUERY)
    console.log(data)
    return(
        <section className="w-full flex flex-wrap p-10 gap-5 justify-center">
            {data?.mercadorias.map((card) => {
                return (
                    <Gadgets key={card.id} titulo={card.name} img={card.img.url} parcela={card.parcela} preco={card.preco} site={card.link} logo={card.loja}/>
                )
            })}
        </section>
    )
}
export default Card;