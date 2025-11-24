import { useEffect, useState } from "react";
import type { CartItemProps } from "../components/Types/types";

export const useCommerceTools = () => {
    const [newItem, setNewItem] = useState<CartItemProps[]>([]);
    const [showCart, setShowCart] = useState(false);

    const removeItem = (id: number) => {
        setNewItem(prev => prev.filter(item => item.id !== id));
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const cartElement = document.getElementById("cart-popup");
            if (cartElement && !cartElement.contains(event.target as Node)) {
                setShowCart(false);
            }
        };

        if (showCart) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showCart]);

    return {
        removeItem,
        useEffect,
        newItem,
        showCart,
        setShowCart,
        setNewItem
    }
}