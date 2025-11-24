import React, { createContext, useState, useEffect } from "react";
import { themeConfig } from "../../Contexts/theme";

export type ThemeName = "light" | "dark";

interface ThemeProviderProps {
    children: React.ReactNode
}

interface ThemeContextType {
    theme: ThemeName;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => { }
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<ThemeName>(() => {
        const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
        return (stored as ThemeName) ?? "light";
    });

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        const html = document.documentElement;
        if (theme === "dark") {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`${themeConfig[theme].layout.backgroundColor}`}>
                <div className="relative">
                    <button onClick={toggleTheme} className="cursor-pointer bg-orange w-20 h-20 z-60 fixed bottom-[0%] right-0 rounded-full mr-10 mb-10 hover:bg-pale-orange flex items-center justify-center"><img className="w-8 h-8" src={`${themeConfig[theme].icon}`} alt="Alternar tema" /></button>
                </div>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
