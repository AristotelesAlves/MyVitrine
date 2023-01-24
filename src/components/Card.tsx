import { Gadgets } from './Gadgets';

function Card(){
    return(
        <section className="w-full flex flex-wrap p-10 gap-5 justify-center">
            <Gadgets/>
            <Gadgets/>
            <Gadgets/>
            <Gadgets/>
            <Gadgets/>
            <Gadgets/>
        </section>
    )
}
export default Card;