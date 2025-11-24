import type { ReactNode } from "react";

export type ProductProps = {
    total: any;
    quantity: ReactNode;
    image: string | undefined;
    id: number;
    name: string;
    gender: "men" | "women";
    price: number;
    description: string;
    discount: number;
    discpercent?: number;
    images: {
        id: number;
        main: string;
        thumb: string;
    }[];
};

export type CartItemProps = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    discount: number;
    total: number;
    image: string;
};

export type ProductImage = {
    id: number;
    main: string;
    thumb: string;
};

export type ContentProps = {
    setNewItem: React.Dispatch<React.SetStateAction<CartItemProps[]>>;
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export type HeaderProps = {
    newItem: ProductProps[];
    removeItem: (id: number) => void;
    showCart: boolean;
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface TooltipProps {
    text: string;
    children: React.ReactNode;
}

export type CartContextType = {
  cart: CartItemProps[];
  setCart: React.Dispatch<React.SetStateAction<CartItemProps[]>>;
  addItem: (item: CartItemProps) => void;
  removeItem: (id: number) => void;
};

export type CartPopupProps = {
    newItem: CartItemProps[];
    removeItem: (id: number) => void;
};


