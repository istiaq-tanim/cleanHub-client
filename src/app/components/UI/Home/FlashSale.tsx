import { TProduct } from "@/app/types/types";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import Container from "../Container";
import FlashCards from "../FlashCards";

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
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
        {result?.data.slice(0, 6).map((product: TProduct) => (
          <FlashCards key={product._id} product={product}></FlashCards>
        ))}
      </div>
    </Container>
  );
};

export default FlashSale;
