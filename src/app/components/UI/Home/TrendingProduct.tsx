import { TProduct } from "@/app/types/types";
import { FaAngleRight } from "react-icons/fa";
import Container from "../Container";
import FlashCountCard from "../FlashSale/FlashCountCard";

const TrendingProduct = async () => {
  const response = await fetch("http://localhost:5000/trending-product", {
    next: {
      revalidate: 30,
    },
  });
  const result = await response.json();
  return (
    <Container>
      <div className="flex justify-between items-center mt-20">
        <div>
          <h1 className="text-2xl text-[#3D3D3D] font-bold">
            Most Popular Product
          </h1>
          <p className="text-[#666666]">
            These products have been carefully selected based on customer
            reviews and ratings,<br></br> ensuring they deliver exceptional
            cleaning power and reliability.{" "}
          </p>
        </div>
        <button className="bg-[#5EBED6] hover:bg-[#1d96b4] rounded-2xl text-white font-large py-2 px-4  transition duration-300 ease-in-out flex gap-1 justify-center items-center">
          <span>View All</span>
          <FaAngleRight size={22} />
        </button>
      </div>
      <div className="my-10 grid grid-cols-3 gap-10">
        {result?.data.map((product: TProduct) => (
          <FlashCountCard key={product._id} product={product}></FlashCountCard>
        ))}
      </div>
    </Container>
  );
};

export default TrendingProduct;
