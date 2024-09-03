import { TProduct } from "@/app/types/types";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import Container from "../Container";
import PopularCard from "../PopularCard";

const TrendingProduct = async () => {
  const response = await fetch(
    "https://cleaning-supply-server.vercel.app/trending-product",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const result = await response.json();
  return (
    <Container>
      <div className="flex lg:flex-row flex-col justify-between items-center mt-20">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl text-[#3D3D3D] font-bold">
            Most Popular Product
          </h1>
          <p className="text-[#666666]">
            These products have been carefully selected based on customer
            reviews and ratings,<br></br> ensuring they deliver exceptional
            cleaning power and reliability.{" "}
          </p>
        </div>
        <Link href="/dishwashing-items">
          <button className="bg-[#5EBED6] hover:bg-[#1d96b4] rounded-2xl text-white font-large py-2 mt-2 px-4  transition duration-300 ease-in-out flex gap-1 justify-center items-center">
            <span>See All Products</span>
            <FaAngleRight size={22} />
          </button>
        </Link>
      </div>
      <div className="my-10 grid lg:grid-cols-4 grid-cols-1 gap-5">
        {result?.data.slice(0, 4).map((product: TProduct) => (
          <PopularCard key={product?._id} product={product}></PopularCard>
        ))}
      </div>
    </Container>
  );
};

export default TrendingProduct;
