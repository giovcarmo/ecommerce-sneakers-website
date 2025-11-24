import { Link } from "react-router-dom";
import { products } from "../ECommerceContent/ECommerceItems";
import type { ProductProps } from "../Types/types";
import { useContext } from "react";
import { ThemeContext } from "../ECommerceThemeButton/ECommerceThemeButton";

export const ProductsPage = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className={`max-[500px]:text-center text-3xl mt-10 font-semibold ${theme === 'light' ? "text-very-dark-blue" : "text-dark-grayish-blue"}`}>Take advantage of the new limited-time offers!!</h1>
            <div className="p-8 place-items-center">
                {products.map((product: ProductProps) => (
                    <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        className="cursor-pointer hover:scale-105 transition-transform"
                    >
                        <div className={`flex max-[500px]:flex-col items-center mb-8 pb-5 border-b ${theme === 'light' ? "border-grayish-blue" : "border-neutral-very-dark-grayish-blue"}`}>
                            <img
                                className="w-70 h-70 object-cover rounded-lg shadow-md mr-5"
                                src={product.images[0].main}
                                alt={product.name}
                            />
                            <div>
                                <h2 className={`text-2xl font-bold mt-3 mb-5 ${theme === 'light' ? "text-very-dark-blue" : "text-neutral-very-light-grayish-blue"}`}>
                                    {product.name}
                                </h2>
                                <p className="max-w-[280px] text-dark-grayish-blue leading-[25px] text-[15px]">{product.description}</p>
                                <div className="mt-5 flex items-center gap-4 mb-2.5">
                                    <span className={`${theme === 'light' ? "text-very-dark-blue" : "text-neutral-very-light-grayish-blue"} font-bold text-[28px]`}>{product.price}.00</span>
                                    <span className={`${theme === 'light' ? "text-neutral-very-light-grayish-blue bg-very-dark-blue" : "text-neutral-very-light-grayish-blue bg-neutral-very-dark-grayish-blue"} w-12 h-7 font-bold flex items-center justify-center rounded-[7px]`}>{product.discpercent}%</span>
                                </div>
                                <span className={`${theme === 'light' ? "text-very-dark-blue opacity-80" : "text-neutral-very-light-grayish-blue"} line-through opacity-60 font-bold`}>{product.discount}.00</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
