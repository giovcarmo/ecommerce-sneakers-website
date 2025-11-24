import { ProductThumbnails } from "./ProductThumbnails";

interface Props {
  images: { id: number; main: string; thumb: string }[];
  imageIndex: number;
  onChangeIndex: (i: number) => void;
  onOpenLightbox: () => void;
  index: number;
  onPrev: () => void;
  onNext: () => void;
}

interface Props {
}

export function ProductGallery({ images, imageIndex, onChangeIndex, onOpenLightbox, onPrev, onNext }: Props) {
  return (

    <div className="min-[677px]:cursor-pointer m-0 max-w-[375px] mr-20 max-[677px]:mr-0">

      <div className="relative flex items-center min-[677px]:hidden">
        <button
          onClick={onPrev}
          className="absolute top-40 left-0 bg-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
          <img src={`${import.meta.env.BASE_URL}/images/icon-previous.svg`} alt="Previous" />
        </button>

        <button
          onClick={onNext}
          className="absolute top-40 right-0 bg-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
          <img src={`${import.meta.env.BASE_URL}/images/icon-next.svg`} alt="Next" />
        </button>
      </div>

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