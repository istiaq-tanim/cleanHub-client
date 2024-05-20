import { TProduct } from "@/app/types/types";
import { discountPrice } from "@/app/utils/utils";
import Image from "next/image";
import Rating from "../Rating";

const FlashCountCard = ({ product }: { product: TProduct }) => {
  return (
    <div className="transform transition duration-300 hover:scale-110 rounded-lg shadow-lg h-96 w-96 hover:shadow-xl bg-white mx-auto">
      <div className="relative bg-gradient-to-br from-rose-100 via-purple-200 to-purple-200 m-2  rounded-lg h-[60%]">
        <Image
          src={product.images[0]}
          fill
          className="object-cover"
          alt="image"
        ></Image>
      </div>

      <div className="px-5 pt-2 flex flex-col">
        <span className="text-gray-800 font-bold text-3xl">
          {product?.productName}
        </span>
        <p className="text-neutral-800">
          <span className="line-through">${product?.price}</span>{" "}
          {discountPrice(product?.price, product?.discountPercentage)}
        </p>
        <div className="flex items-center space-x-1 mb-5">
          <Rating value={product?.rating} />
        </div>
      </div>
    </div>
  );
};

export default FlashCountCard;
