import { TProduct } from "@/app/types/types";
import Image from "next/image";

const AllProductRow = ({ item, index }: { item: TProduct; index: number }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td className="relative h-3 w-3">
        <Image
          fill
          className="rounded-full object-fill"
          alt="item"
          src={item?.images[0]}
        />
      </td>
      <td>{item.productName}</td>
      <td>{item.brand}</td>
      <td>{item.category}</td>
      <td>$ {item.price}</td>
    </tr>
  );
};

export default AllProductRow;
