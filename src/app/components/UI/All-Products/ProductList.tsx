import { TProduct } from "@/app/types/types";
import ProductCard from "./ProductCard";

const ProductList = ({ products }: { products: TProduct[] }) => {
  return (
    <div className="col-span-10">
      <h3 className="text-[#3D3D3D] font-semibold pl-5 text-2xl mb-5">
        Our Collection of Product
      </h3>
      <div className="grid grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
