import { TProduct } from "@/app/types/types";
import { discountPrice } from "@/app/utils/utils";
import Image from "next/image";
import Rating from "../Rating";

const ProductDetails = ({ product }: { product: TProduct }) => {
  return (
    <div>
      <div className="container grid grid-cols-2 gap-6 mt-10">
        <div className="relative h-96">
          <Image
            src={product?.images[0]}
            alt="product"
            className="w-full object-contain"
            fill
          />
        </div>

        <div>
          <h2 className="text-3xl font-medium uppercase mb-2">
            {product?.productName}
          </h2>
          <div className="flex items-center mb-4">
            <div className="flex gap-1 text-sm">
              <Rating value={product?.rating}></Rating>
            </div>
            <div className="text-xs text-gray-500 ml-3">
              ({product?.reviewNumber} Reviews)
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability: </span>
              <span className="text-green-600">In Stock</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Brand: </span>
              <span className="text-gray-600">{product?.brand}</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Category: </span>
              <span className="text-gray-600">{product?.category}</span>
            </p>
          </div>
          <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
            {product?.flashSale && (
              <p className="text-xl text-primary font-semibold">
                ${discountPrice(product?.price, product?.discountPercentage)}
              </p>
            )}
            <p
              className={`${
                product?.flashSale && "line-through text-gray-400"
              } text-base font-semibold`}
            >
              ${product?.price}
            </p>
          </div>

          <p className="mt-4 text-gray-600">{product?.description}</p>

          <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
            <a
              href="#"
              className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
            >
              <i className="fa-solid fa-bag-shopping"></i> Add to cart
            </a>
            <a
              href="#"
              className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
            >
              <i className="fa-solid fa-heart"></i> Wishlist
            </a>
          </div>
        </div>
      </div>

      <div className="container pb-16">
        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
          Product details
        </h3>
        <div className="w-3/5 pt-6">
          <div className="text-gray-600">
            <p>{product?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
