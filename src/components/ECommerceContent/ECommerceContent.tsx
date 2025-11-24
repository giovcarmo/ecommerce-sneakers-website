import { useProductCount } from "../../Hooks/useProductCount";
import { useProductLightbox } from "../../Hooks/useProductLightbox";
import { products } from "./ECommerceItems";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { ProductGallery } from "../Product/ProductGallery";
import { ProductQuantity } from "../Product/ProductQuantity";
import { AddToCartButton } from "../Product/AddToCartButton";
import { ProductLightbox } from "../Product/ProductLightbox";
import { ThemeContext } from "../ECommerceThemeButton/ECommerceThemeButton";

export const ECommerceContent = () => {
  const { theme } = useContext(ThemeContext)

  const { setCart } = useContext(CartContext)!;

  const { count, increment, decrement } = useProductCount();

  const { id } = useParams();
  const product = products.find(p => p.id === Number(id)) ?? products[0];

  const {
    currentIndex,
    setCurrentIndex,
    open,
    openLightbox,
    closeLightbox,
    prevImage,
    nextImage
  } = useProductLightbox(product.images);

  const addToCart = () => {
    const price = product.price - product.discount;

    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        const quantity = existing.quantity + count;
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity, total: quantity * price }
            : item
        );
      }

      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: count,
        discount: product.discount,
        total: price * count,
        image: product.images[currentIndex].thumb
      }];
    });
  };

  return (
    <div className="flex justify-center">
      <div className="flex justify-center max-[677px]:flex-wrap h-full min-[677px]:mt-20 mb-20">
        <ProductGallery
          images={product.images}
          imageIndex={currentIndex}
          onChangeIndex={setCurrentIndex}
          onOpenLightbox={() => openLightbox(currentIndex)}
          index={currentIndex}
          onPrev={prevImage}
          onNext={nextImage}
        />

        <div className="max-w-[375px] max-[677px]:p-5">

          <h1 className={`text-3xl font-bold mb-8 ${theme === 'light' ? "text-very-dark-blue" : "text-neutral-very-light-grayish-blue"}`}>{product.name}</h1>
          <p className="text-dark-grayish-blue mb-5">{product.description}</p>
          <div className="mt-5 flex items-center gap-4 mb-2.5">
            <span className={`${theme === 'light' ? "text-very-dark-blue" : "text-neutral-very-light-grayish-blue"} font-bold text-[28px]`}>{product.price}.00</span>
            <span className={`${theme === 'light' ? "text-neutral-very-light-grayish-blue bg-very-dark-blue" : "text-neutral-very-light-grayish-blue bg-neutral-very-dark-grayish-blue"} w-12 h-7 font-bold flex items-center justify-center rounded-[7px]`}>{product.discpercent}%</span>
          </div>
          <span className={`${theme === 'light' ? "text-very-dark-blue opacity-80" : "text-neutral-very-light-grayish-blue"} line-through opacity-60 font-bold`}>{product.discount}.00</span>
          <div className="flex max-[677px]:flex-col mt-8">
            <ProductQuantity
              count={count}
              increment={increment}
              decrement={decrement}
            />

            <AddToCartButton onClick={addToCart} />
          </div>
        </div>

        <ProductLightbox
          open={open}
          images={product.images}
          index={currentIndex}
          onPrev={prevImage}
          onNext={nextImage}
          onClose={closeLightbox}
          onSelect={setCurrentIndex}
        />
      </div>
    </div>
  );
};