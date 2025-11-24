import { ProductThumbnails } from "./ProductThumbnails";

interface Props {
  images: { id: number; main: string; thumb: string }[];
  imageIndex: number;
  onChangeIndex: (i: number) => void;
  onOpenLightbox: () => void;
}

export function ProductGallery({ images, imageIndex, onChangeIndex, onOpenLightbox }: Props) {
  return (
    <div className="cursor-pointer m-0 max-w-[375px] mr-20 max-[677px]:mr-0">
      <img
        onClick={onOpenLightbox}
        className="w-[380px] rounded-[10px] mb-5 max-[677px]:rounded-none"
        src={images[imageIndex].main}
        alt="Main product image"
      />

      <ProductThumbnails
        images={images}
        selectedIndex={imageIndex}
        onSelect={onChangeIndex}
      />
    </div>
  );
}