export interface Props {
  open: boolean;
  images: { id: number; main: string; thumb: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (i: number) => void;
}

export function ProductLightbox({
  open,
  images,
  index,
  onClose,
  onPrev,
  onNext,
  onSelect,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 max-[677px]:hidden">

      <div className="relative">

        <button className="cursor-pointer absolute -top-10 right-0 text-3xl" onClick={onClose}>
          <img src={`${import.meta.env.BASE_URL}/images/icon-close.svg`} alt="icon close" />
        </button>

        <div className="relative flex items-center">
          <button
            onClick={onPrev}
            className="absolute -left-10 bg-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
            <img src={`${import.meta.env.BASE_URL}/images/icon-previous.svg`} alt="Previous" />
          </button>

          <img className="w-[450px] rounded-lg" src={images[index].main} />

          <button
            onClick={onNext}
            className="absolute -right-10 bg-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
            <img src={`${import.meta.env.BASE_URL}/images/icon-next.svg`} alt="Next" />
          </button>
        </div>

        <div className="flex gap-5 justify-center mt-5">
          {images.map((img, i) => (
            <img
              key={img.id}
              src={img.thumb}
              onClick={() => onSelect(i)}
              className={`hover:opacity-40 cursor-pointer w-20 rounded-md border-2 ${index === i ? "border-orange" : "border-transparent"
                }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}