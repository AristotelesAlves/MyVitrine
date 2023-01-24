import relogio from '../assets/relogio.png';
import shoope from '../assets/shopee_white.svg'

export function Gadgets(){
    return(
        <div className="w-80 h-fit bg-black rounded-2xl py-5">
        <figure>
            <img 
            className="m-auto"
            src={relogio} 
            alt="smartwatch" />
        </figure>
        
        <div className="text-white mt-2 px-5 break-all">
            <h2 className="font-bold text-lg">
                Relógio Smartwatch W34 Original Bluetooth App
            </h2>
            <p className="mt-2 font-bold">
                R$99,89
            </p>
            <p className="text-sm text-gray-300">
                12x R$8,32  (sem juros)
            </p>
            <div className="flex w-full justify-between mt-2 font-semibold text-lg">
                <span className="flex items-center gap-1 text-center">
                    <img
                    className="h-5 w-5"
                    src={shoope} 
                    alt=""/> 
                        Shopee
                </span>
                <a className="text-black bg-white px-4 rounded-lg">
                    Site
                </a>
            </div>
        </div>
    </div>
    )
}