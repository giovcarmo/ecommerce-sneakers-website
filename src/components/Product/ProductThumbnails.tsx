interface Props {
  images: { id: number; thumb: string }[];
  selectedIndex: number;
  onSelect: (i: number) => void;
}

export function ProductThumbnails({ images, selectedIndex, onSelect }: Props) {
  return (
    <div className="flex gap-5 max-[870px]:flex-wrap max-[677px]:hidden">
      {images.map((img, index) => (
        <img
          key={img.id}
          src={img.thumb}
          onClick={() => onSelect(index)}
          className={`cursor-pointer w-20 rounded-md hover:opacity-70 border-2 ${
            selectedIndex === index ? "border-orange opacity-60" : "border-transparent"
          }`}
        />
      ))}
    </div>
  );
}