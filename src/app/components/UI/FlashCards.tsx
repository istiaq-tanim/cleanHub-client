import { TProduct } from "@/app/types/types";
import { discountPrice } from "@/app/utils/utils";
import Image from "next/image";
const FlashCards = ({ product }: { product: TProduct }) => {
  return (
    <div className="relative group duration-500 cursor-pointer group overflow-hidden  text-gray-50 h-96 w-96 mx-auto shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]  rounded-2xl hover:duration-700">
      <div className="w-96 h-96  text-gray-800">
        <div className="flex flex-row  justify-between">
          <p className="fill-current z-10 bg-[#3D3D3D] text-white stroke-current text-xs px-3 m-5 py-2 rounded-lg">
            -{product?.discountPercentage}%
          </p>
          <Image
            src={product?.images[0]}
            fill
            className="object-cover"
            alt="image"
          ></Image>
        </div>
      </div>
      <div className="absolute bg-gray-50 -bottom-40 w-96 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
        <span className="text-gray-800 font-bold text-3xl">
          {product.productName}
        </span>
        <p className="text-neutral-800">
          <span className="line-through">${product?.price}</span> $
          {discountPrice(product?.price, product?.discountPercentage)}
        </p>
      </div>
    </div>
  );
};

export default FlashCards;
