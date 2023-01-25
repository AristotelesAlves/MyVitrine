import relogio from '../assets/relogio.png';
import shoope from '../assets/shopee_white.svg'

interface propsGadgets{
    titulo: string;
    img: string;
    preco: string;
    parcela: string;
    site: string;
    logo: string;
}

export function Gadgets(props: propsGadgets){

    const logo = props.logo

    return(
        <div className="w-80 h-fit bg-black rounded-2xl py-5">
        <figure>
            <img 
            className="m-auto"
            src={props.img} 
            alt="smartwatch" />
        </figure>
        
        <div className="text-white mt-2 px-5 break-all">
            <h2 className="font-bold text-lg">
                {props.titulo}
            </h2>
            <p className="mt-2 font-bold">
                R${props.preco}
            </p>
            <p className="text-sm text-gray-300">
                {props.parcela}
            </p>
            <div className="flex w-full justify-between mt-2 font-semibold text-lg">
                <span className="flex items-center gap-1 text-center">
                    <img
                    className="h-5 w-5"
                    src={shoope} 
                    alt=""/> 
                        Shopee
                </span>
                <a href={props.site} className="text-black bg-white px-4 rounded-lg">
                    Site
                </a>
            </div>
        </div>
    </div>
    )
}