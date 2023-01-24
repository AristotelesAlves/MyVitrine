import { EnvelopeSimple, WhatsappLogo, InstagramLogo, GithubLogo } from "phosphor-react";

function Footer(){
    return(
        <footer className="w-full flex flex-col items-center bg-black py-5 text-white">
            <h1 className="font-bold text-2xl">
                Findings Gadgets.
            </h1>
            <p className="mt-3">
                Pensando na praticidade de anunciar cada produto que estou afiliado, criei uma vitrine onde irei divulgar todos meus afiliado.
            </p>
            <p className="mt-3 font-semibold text-lg">
                Contatos
            </p>
            <nav>
                <ul className="flex gap-3 mt-2">
                    <li>
                        <a 
                        className="flex gap-1 items-center hover:text-gray-300"
                        href="">
                            <WhatsappLogo size={24} color="white"/> 
                            Whatzap
                        </a>
                    </li>
                    <li>
                        <a
                        className="flex gap-1 items-center hover:text-gray-300" 
                        href="">
                            <InstagramLogo size={24} color="white"/> Instagram
                        </a>
                    </li>
                    <li>
                        <a 
                        className="flex gap-1 items-center hover:text-gray-300" 
                        href="">
                            <GithubLogo size={24}  color="white"/> Github
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="flex items-center gap-1 mt-3">
                <EnvelopeSimple size={20} weight="bold" />
                <p>arystotelys@gmail.com</p>
            </div>
        </footer>
    )
}
export default Footer;