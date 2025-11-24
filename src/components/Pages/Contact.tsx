import type { TooltipProps } from "../Types/types"
import { useContext } from "react"
import { ThemeContext } from "../ECommerceThemeButton/ECommerceThemeButton"

function Tooltip({ text, children }: TooltipProps) {
    return (
        <div className="relative flex items-center group">
            {children}
            <span className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[220px] px-3 py-2 bg-very-dark-blue text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 shadow-lg z-50">
                {text}
            </span>
        </div>
    )
}

export default function Contact() {

    const { theme } = useContext(ThemeContext)

    return (
        <div className="flex items-center flex-col h-screen">
            <div className="w-2xl">
                <h1 className={`${theme === 'light' ? "text-very-dark-blue" : "text-neutral-very-light-grayish-blue"} font-bold text-3xl text-center mt-10 mb-4`}>Contact</h1>
                <p className="text-[20px] text-dark-grayish-blue text-justify mb-5"><span className="pl-25">Hello</span> there! Welcome, my name is Giovanni. I am a dedicated and creative professional, always looking to contribute. I am quick to learn and adapt. I am a Frontend Developer, working with React.js, TypeScript, and TailwindCSS, with the intention of becoming a FullStack Developer. I am still improving my skills in different languages. I have intermediate English (I can fully understand what is said and written), but my conversational English is basic.</p>
                <span className={`${theme === 'light' ? "text-very-dark-blue" : "text-neutral-very-light-grayish-blue"} text-2xl font-semibold`}>Do you want to contact me? </span>
            </div>
            <div className="flex gap-5">
                <Tooltip text="This is my WhatsApp, click to send me a message!">
                    <div className="cursor-pointer flex flex-col items-center gap-2">
                        <span onClick={() => window.open("https://wa.me/+5534998641993", "_blank")} className="hover:opacity-50 hover: mt-5">
                            <img className="w-15 h-15" src={`${import.meta.env.BASE_URL}/images/whatsapp-square-brands-solid.svg`} alt="Whatsapp" />
                        </span>
                    </div>
                </Tooltip>

                <Tooltip text="Visit my profile on LinkedIn!">
                    <div className="cursor-pointer flex flex-col items-center gap-2">
                        <span onClick={() => window.open("https://linkedin.com/in/giovcarmo", "_blank")} className="hover:opacity-50 hover: mt-5">
                            <img className="w-15 h-15" src={`${import.meta.env.BASE_URL}/images/linkedin-brands-solid.svg`} alt="Linkedin" />
                        </span>
                    </div>
                </Tooltip>

                <Tooltip text="Check out my projects on Github!">
                    <div className="cursor-pointer flex flex-col items-center gap-2">
                        <span onClick={() => window.open("https://github.com/giovcarmo", "_blank")} className="hover:opacity-50 hover: mt-5">
                            <img className="w-15 h-15" src={`${import.meta.env.BASE_URL}/images/github-brands-solid.svg`} alt="Github" />
                        </span>
                    </div>
                </Tooltip>

                <Tooltip text="If you prefer an old-school style, contact me by email!">
                    <div className="cursor-pointer flex flex-col items-center gap-2">
                        <a
                            href="mailto:gvittorazze@icloud.com"
                            className="cursor-pointer flex flex-col items-center gap-2 hover:opacity-50 mt-5"
                        >
                            <img className="w-15 h-15" src={`${import.meta.env.BASE_URL}/images/cloud-solid.svg`} alt="Github" />
                        </a>
                    </div>
                </Tooltip>
            </div>

        </div>
    )
}