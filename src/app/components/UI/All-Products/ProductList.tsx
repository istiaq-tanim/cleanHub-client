import { TProduct } from "@/app/types/types";
import NoProducts from "./NoProduct";
import ProductCard from "./ProductCard";

const ProductList = ({ products }: { products: TProduct[] }) => {
  return (
    <div className="lg:col-span-10 col-span-8">
      <h3 className="text-[#3D3D3D] font-semibold pl-5 text-2xl mb-5">
        Our Collection of Product
      </h3>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <NoProducts></NoProducts>
        )}
      </div>
    </div>
  );
};

export default ProductList;
