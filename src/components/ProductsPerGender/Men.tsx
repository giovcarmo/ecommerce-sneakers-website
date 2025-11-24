import { Link } from "react-router-dom";
import { products } from "../ECommerceContent/ECommerceItems";
import type { ProductProps } from "../Types/types";
import { useContext } from "react";
import { ThemeContext } from "../ECommerceThemeButton/ECommerceThemeButton";

export const MenProductsPage = () => {
    const menProducts = products.filter(
        (product: ProductProps) => product.gender === "men"
    );

    const { theme } = useContext(ThemeContext)

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-8 place-items-center">
            {menProducts.map((product: ProductProps) => (
                <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="cursor-pointer hover:scale-105 transition-transform"
                >
                    <div className="flex flex-col items-center">
                        <img
                            className="w-48 h-48 object-cover rounded-lg shadow-md"
                            src={product.images[0].main}
                            alt={product.name}
                        />
                        <h2 className={`text-lg font-bold ${theme === 'light' ? "text-very-dark-blue" : "text-neutral-very-light-grayish-blue"} mt-3`}>
                            {product.name}
                        </h2>
                        <span className="text-dark-grayish-blue font-semibold">
                            ${product.price}
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    );
};