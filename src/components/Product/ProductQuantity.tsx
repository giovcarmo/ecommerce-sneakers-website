interface Props {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export function ProductQuantity({ count, increment, decrement }: Props) {
  return (
    <div className="bg-light-grayish-blue flex items-center justify-center rounded-[10px] p-5 gap-7 w-[180px] max-[677px]:w-[335px] max-[677px]:gap-30">
      <img onClick={decrement} className="cursor-pointer" src="/images/icon-minus.svg" />
      <span className="font-bold">{count}</span>
      <img onClick={increment} className="cursor-pointer" src="/images/icon-plus.svg" />
    </div>
  );
}