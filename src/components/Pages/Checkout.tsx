import { useContext } from "react"
import { ThemeContext } from "../ECommerceThemeButton/ECommerceThemeButton"
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext"

export const Checkout = () => {
    const { theme } = useContext(ThemeContext)
    const navigate = useNavigate();

    const cartContext = useContext(CartContext);

    if (!cartContext) {
        throw new Error("CartContext não encontrado. Verifique se <CartProvider> envolve sua aplicação.");
    }

    const { cart, removeItem } = cartContext;

    return (
        <div className="flex items-center justify-center">
            <div className="h-screen">
                <h1 className={`${theme === 'light' ? "text-very-dark-blue" : "text-neutral-very-light-grayish-blue"} font-bold text-[30px] text-center mt-10 mb-4`}>Checkout</h1>

                <div className="">
                    <div
                        className={`w-[700px] max-[700px]:max-w-[375px]
                ${theme === "light"
                                ? "bg-neutral-very-light-grayish-blue border-grayish-blue"
                                : "bg-neutral-very-dark-blue border-neutral-very-dark-grayish-blue"
                            }
            `}
                    >
                        <div className="border-b border-grayish-blue p-5">
                            <span
                                className={`font-bold ${theme === "light"
                                    ? "text-very-dark-blue"
                                    : "text-dark-grayish-blue"
                                    }`}
                            >
                                Cart
                            </span>
                        </div>

                        {cart.length === 0 ? (
                            <div className="flex items-center justify-center h-[150px]">
                                <p className="font-bold text-dark-grayish-blue">
                                    Your cart is empty.
                                </p>
                            </div>
                        ) : (
                            <div className="p-5">
                                {cart.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between mb-4"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-14 rounded-lg"
                                        />

                                        <div
                                            className={`flex flex-col text-sm ${theme === "light"
                                                ? "text-very-dark-blue"
                                                : "text-dark-grayish-blue"
                                                }`}
                                        >
                                            <span>{item.name}</span>
                                            <span>
                                                ${item.price.toFixed(2)} x {item.quantity}{" "}
                                                <strong
                                                    className={
                                                        theme === "light"
                                                            ? "text-very-dark-blue"
                                                            : "text-neutral-very-light-grayish-blue"
                                                    }
                                                >
                                                    ${item.total.toFixed(2)}
                                                </strong>
                                            </span>
                                        </div>

                                        <img
                                            src="/ecomerce-website-sneakers/images/icon-delete.svg"
                                            alt="Delete item"
                                            className="cursor-pointer"
                                            onClick={() => removeItem(item.id)}
                                        />
                                    </div>
                                ))}

                                <button onClick={() => navigate("/delivery")} className="cursor-pointer bg-orange hover:bg-pale-orange text-white w-full py-3 rounded-lg font-bold">
                                    Continue shopping
                                </button>
                            </div>
                        )}
                    </div>
                </div>


            </div>
        </div>

    )
}