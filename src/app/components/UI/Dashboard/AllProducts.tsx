import { TProduct } from "@/app/types/types";
import AllProductRow from "./AllProductRow";

const AllProducts = async () => {
  const response = await fetch(
    "https://cleaning-supply-server.vercel.app/dishWashing-items",
    {
      cache: "no-store",
    }
  );
  const products = await response.json();
  return (
    <div className="w-full mt-12">
      <h3 className="text-center font-bold text-3xl">All Products</h3>
      <div className="overflow-x-auto mt-5">
        <table className="table">
          <thead className="text-center bg-[#9A9A9A] text-gray-100">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {products?.data.map((item: TProduct, index: number) => (
              <AllProductRow
                key={item._id}
                index={index}
                item={item}
              ></AllProductRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
