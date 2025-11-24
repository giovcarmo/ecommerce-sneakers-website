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

export const ECommerceContent = () => {

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
    <div className="flex justify-center mt-20 mb-20">
      <ProductGallery
        images={product.images}
        imageIndex={currentIndex}
        onChangeIndex={setCurrentIndex}
        onOpenLightbox={() => openLightbox(currentIndex)}
      />

      <div className="max-w-[375px] max-[677px]:p-5">
        
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-dark-grayish-blue">{product.description}</p>

        <ProductQuantity
          count={count}
          increment={increment}
          decrement={decrement}
        />

        <AddToCartButton onClick={addToCart} />
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
  );
};