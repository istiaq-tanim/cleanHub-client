import { TProduct } from "@/app/types/types";
import Image from "next/image";
import Features from "../Features";
import Rating from "../Rating";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const AllProductRow = ({ product }: { product: TProduct }) => {
  return (
    <>
      <tr>
        <td className="p-4 text-sm">
          <div className="flex items-center cursor-pointer">
            <Image
              src={product?.images[0]}
              className="w-10 h-10 p-1.5 shrink-0 bg-gray-100"
              alt="product"
              width={360}
              height={360}
            />
            <div className="mx-4">
              <p className="text-sm text-black">{product?.productName}</p>
            </div>
          </div>
        </td>
        <td className="p-4 text-sm">$25.00</td>
        <td className="text-sm">
          <Features features={product?.features}></Features>
        </td>
        <td className="py-6 px-4 text-sm flex items-center">
          <Rating value={product?.rating}></Rating>
        </td>

        <td className="p-4">
          <EditButton id={product?._id}></EditButton>
          <DeleteButton id={product?._id}></DeleteButton>
        </td>
      </tr>
    </>
  );
};

export default AllProductRow;
