import { TProduct } from "@/app/types/types";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import Container from "../Container";
import FlashCard from "../FlashCard";

const FlashSale = async () => {
  const response = await fetch(
    "https://cleaning-supply-server.vercel.app/flash-sale",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const result = await response.json();
  return (
    <Container>
      <div className="flex justify-between mb-10 px-5">
        <h3 className="text-2xl">Flash Sale</h3>
        <Link href="/flash-sale">
          <button className="bg-[#5EBED6] hover:bg-[#1d96b4] rounded-2xl text-white font-large py-2 px-4  transition duration-300 ease-in-out flex gap-1 justify-center items-center">
            <span>View All</span>
            <FaAngleRight size={22} />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
        {result?.data.slice(0, 8).map((product: TProduct) => (
          <FlashCard key={product._id} product={product}></FlashCard>
        ))}
      </div>
    </Container>
  );
};

export default FlashSale;
