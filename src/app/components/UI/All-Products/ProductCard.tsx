import { TProduct } from "@/app/types/types";
import Image from "next/image";
import Rating from "../Rating";
import Button from "./Button";

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <div className="w-[350px] p-3 flex flex-col gap-1 shadow-2xl rounded-br-3xl ">
      <div className="duration-500 contrast-50 hover:contrast-100 relative h-64">
        <Image src={product?.images[0]} fill alt="card"></Image>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xl text-gray-500 font-bold">
          {product?.productName}
        </span>
        <span className="font-bold  text-gray-500">${product?.price}</span>
        <span className="font-bold  text-gray-500">{product?.category}</span>
        <div className="flex">
          <Rating value={product?.rating}></Rating>
        </div>

        <Button id={product?._id}>View Details</Button>
      </div>
    </div>
  );
};

export default ProductCard;
