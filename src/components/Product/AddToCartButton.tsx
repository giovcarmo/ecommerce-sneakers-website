interface Props {
  onClick: () => void;
}

export function AddToCartButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer flex items-center justify-center bg-orange hover:bg-pale-orange rounded-[10px] p-5 text-very-dark-blue w-[250px] max-[677px]:w-[335px]"
    >
      <img className="pr-5" src="/ecomerce-website-sneakers/images/icon-cart.svg" alt="" />
      <span className="font-bold">Add to cart</span>
    </button>
  );
}