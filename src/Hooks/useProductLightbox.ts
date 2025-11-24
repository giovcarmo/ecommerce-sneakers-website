import { useState } from "react";

export type ProductImage = {
  id: number;
  main: string;
  thumb: string;
};

export function useProductLightbox(images: any[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const closeLightbox = () => setOpen(false);

  const prevImage = () =>
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));

  const nextImage = () =>
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));

  return {
    currentIndex,
    setCurrentIndex,
    open,
    openLightbox,
    closeLightbox,
    prevImage,
    nextImage,
  };
}