import Container from "@/app/components/UI/Container";
import FlashCards from "@/app/components/UI/FlashCards";
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
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
        {result?.data.map((product: TProduct) => (
          <FlashCards key={product._id} product={product}></FlashCards>
        ))}
      </div>
    </Container>
  );
};

export default FlashSalePage;
