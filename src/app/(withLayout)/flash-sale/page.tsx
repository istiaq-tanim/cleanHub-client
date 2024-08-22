import Container from "@/app/components/UI/Container";
import FlashCard from "@/app/components/UI/FlashCard";
import CountDown from "@/app/components/UI/FlashSale/CountDown";
import { TProduct } from "@/app/types/types";

const FlashSalePage = async () => {
  const response = await fetch("http://localhost:5000/flash-sale", {
    cache: "no-store",
  });
  const result = await response.json();
  return (
    <Container>
      <CountDown></CountDown>
      <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
        {result?.data.map((product: TProduct) => (
          <FlashCard key={product._id} product={product}></FlashCard>
        ))}
      </div>
    </Container>
  );
};

export default FlashSalePage;
