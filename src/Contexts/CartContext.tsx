import { createContext, useState } from "react";
import type { CartContextType, CartItemProps } from "../components/Types/types";

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItemProps[]>([]);

  const addItem = (item: CartItemProps) => {
    setCart((prev) => [...prev, item]);
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};