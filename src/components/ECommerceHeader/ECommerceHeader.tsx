import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../ECommerceThemeButton/ECommerceThemeButton";
import { themeConfig } from "../../Contexts/theme";
import { useSticky } from "../../Hooks/useSticky";
import { CartPopup } from "../CartPopup/CartPopup";
import { CartContext } from "../../Contexts/CartContext";

export const ECommerceHeader = () => {

    const { cart, removeItem } = useContext(CartContext)!;

    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);

    const isSticky = useSticky();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    const [showCart, setShowCart] = useState(false);

    const navLinks = [
        { label: "Collections", path: "/" },
        { label: "Men", path: "/men" },
        { label: "Women", path: "/women" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" }
    ];
    
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
                setShowCart(false);
            }
        }

        if (showCart) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showCart]);
    
    return (
        <header
            className={`${isSticky ? "fixed top-0 shadow-lg py-2 z-50 w-full" : "py-4"} flex justify-between h-30 border-b max-[677px]:border-0 ${theme === "light" ? "bg-neutral-very-light-grayish-blue border-grayish-blue" : "bg-neutral-very-dark-blue border-neutral-very-dark-grayish-blue"}`}>
            {/* LEFT SIDE */}
            <div className="flex items-center">
                <img
                    className="cursor-pointer pl-25 max-[376px]:pl-7 max-[820px]:block hidden pr-5"
                    src="/images/icon-menu.svg"
                    alt="menu"
                    onClick={toggleMenu}
                />

                <img
                    onClick={() => navigate("/")}
                    className="cursor-pointer pl-25 pr-5 max-[820px]:pl-0"
                    src={themeConfig[theme].logo}
                    alt="Logo"
                />

                <nav className="flex items-center gap-5 max-[820px]:hidden">
                    {navLinks.map(link => (
                        <button
                            key={link.label}
                            onClick={() => navigate(link.path)}
                            className="text-dark-grayish-blue hover:text-grayish-blue bg-transparent border-none cursor-pointer"
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-8 pr-25 max-[677px]:pr-7">
                <div className="relative">
                    <img
                        onClick={() => setShowCart((prev) => !prev)}
                        className="cursor-pointer"
                        src="/images/icon-cart.svg"
                        alt="Icon Cart"
                    />

                    {cartCount > 0 && !showCart && (
                        <span className="absolute -top-2 -right-2 bg-orange text-white px-2 text-xs rounded-full font-bold">
                            {cartCount}
                        </span>
                    )}

                    {showCart && (
                        <div ref={popupRef} className="absolute right-0 z-50">
                            <CartPopup newItem={cart} removeItem={removeItem} />
                        </div>
                    )}
                </div>

                <img
                    className="cursor-pointer border-3 rounded-full border-orange w-12 h-12 max-[677px]:w-8 max-[677px]:h-8"
                    src="/images/image-avatar.png"
                    alt="Avatar"
                />
            </div>

            {/* MOBILE MENU */}
            {isMenuOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-40"
                        onClick={toggleMenu}
                    />

                    <div className="fixed top-0 left-0 w-[250px] h-full bg-white p-6 z-50 shadow-lg animate-slide-in">
                        <img
                            src="/images/icon-close.svg"
                            alt="close"
                            className="cursor-pointer mb-10"
                            onClick={toggleMenu}
                        />

                        <nav className="flex flex-col gap-5 font-bold text-very-dark-blue">
                            {navLinks.map(link => (
                                <button
                                    key={link.label}
                                    onClick={() => {
                                        navigate(link.path);
                                        toggleMenu();
                                    }}
                                    className="text-left bg-transparent border-none cursor-pointer hover:text-grayish-blue"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                </>
            )}
        </header>
    );
};