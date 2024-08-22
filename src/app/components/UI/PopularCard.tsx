import { TProduct } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";
import Features from "./Features";
const PopularCard = ({ product }: { product: TProduct }) => {
  return (
    <div className="bg-white relative rounded-lg shadow-lg p-3 max-w-sm mx-auto flex flex-col justify-between">
      <div className="overflow-hidden group aspect-w-1 aspect-h-1 ">
        <Image
          src={product?.images[0]}
          alt="StriderFlex Comfort Walk"
          className="rounded-lg mb-2 mx-auto h-64 object-cover w-full transition-all duration-300 group-hover:scale-125 contrast-50 hover:contrast-100"
          width={360}
          height={360}
        />
      </div>
      <h2 className="text-lg font-bold text-gray-900 mb-1">
        {product?.productName}
      </h2>

      <Features features={product?.features}></Features>

      <p className="text-gray-600 mb-2">
        {product?.description.slice(0, 50)}...
        <Link href={`/dishwashing-items/${product?._id}`}>
          <span className="text-blue-500">See More</span>
        </Link>
      </p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">${product?.price}</span>

        <button className="flex items-center rounded-md bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-400 focus:outline-none focus:ring-4 focus:ring-blue-300">
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
        </button>
      </div>
    </div>
  );
};
export default PopularCard;
