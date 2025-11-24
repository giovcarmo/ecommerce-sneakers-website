import { useContext } from "react"
import { ThemeContext } from "../ECommerceThemeButton/ECommerceThemeButton"

export default function About() {

    const { theme } = useContext(ThemeContext)

    return (
        <div className="flex items-center justify-center">
            <div className="w-2xl h-screen">
                <h1 className={`${theme === 'light' ? "text-very-dark-blue" : "text-neutral-very-light-grayish-blue"} font-bold text-[30px] text-center mt-10 mb-4`}>About Me</h1>
                <p className="text-[20px] text-dark-grayish-blue">My name is Giovanni and this is a fictional page, created with the intention of developing my skills with React.js, TypeScript, and TailwindCSS. <a className={`${theme === 'light' ? "text-very-dark-blue" : "text-neutral-very-light-grayish-blue"} hover:underline hover:text-orange`} href="/contact">Click here</a> to go to Contact page!</p>
            </div>
        </div>
    )
}