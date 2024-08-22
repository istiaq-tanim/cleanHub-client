import { TProduct } from "@/app/types/types";
import { discountPrice } from "@/app/utils/utils";
import Image from "next/image";
import Rating from "./Rating";

const FlashCard = ({ product }: { product: TProduct }) => {
  return (
    <div className="relative m-10 h-96 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md flex flex-col justify-between">
      <div className="overflow-hidden group aspect-w-1 aspect-h-1">
        <Image
          className="h-64 rounded-t-lg object-cover transition-all duration-300 group-hover:scale-125"
          src={product?.images[0]}
          width={360}
          height={360}
          alt="product image"
        />
      </div>

      <div className="mt-4 px-5 pb-5">
        <div>
          <h5 className="text-xl font-semibold tracking-tight text-slate-900">
            {product.productName}
          </h5>
        </div>
        <div className="mt-2.5 mb-5 flex items-center">
          <span className="mr-2 rounded bg-green-200 px-2.5 py-0.5 text-xs font-semibold">
            {product?.rating}
          </span>
          <Rating value={product?.rating}></Rating>
        </div>
        <div className="flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              ${discountPrice(product?.price, product?.discountPercentage)}
            </span>
            <span className="text-sm text-slate-900 line-through">
              ${product?.price}
            </span>
          </p>
          <a
            href="#"
            className="flex items-center rounded-md bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-400 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
