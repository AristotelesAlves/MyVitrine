import { MagnifyingGlass } from 'phosphor-react';
import IMG from '../assets/gedgets.png';

function Header(){
    return(
        <header className="">
            <div className="w-full h-16 flex items-center ">
                <h1 className="absolute ml-5 text-3xl font-bold">
                    Findings Gadgets
                </h1>
                <div className="flex m-auto bg-white border-2 border-black rounded-xl px-2">
                    <MagnifyingGlass 
                    className=""
                    size={30}/>
                    <input 
                    className="bg-transparent border-none w-96"
                    type="text" 
                    placeholder=''/>
                </div>
            </div>

            <figure>
                <img 
                className="w-full"
                src={IMG} 
                alt="" />
            </figure>
            <nav className="w-full h-20 bg-black flex justify-center items-center">
                <ul className="flex gap-16 text-white text-3xl font-bold">
                    <li>
                        <a 
                        className="hover:text-gray-400"
                        href="https://shopee.com.br/">
                         Shopee
                        </a>
                    </li>
                    <li>
                        <a
                        className="hover:text-gray-400"
                        href="https://pt.aliexpress.com/">
                            Aliexpress
                        </a>
                    </li>
                    <li>
                        <a 
                        className="hover:text-gray-400"
                        href="https://www.amazon.com.br/ref=nav_logo">
                            Amazon
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};
export default Header;