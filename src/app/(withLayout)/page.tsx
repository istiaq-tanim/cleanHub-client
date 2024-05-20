import { Suspense } from "react";
import Banner from "../components/UI/Home/Banner";
import Category from "../components/UI/Home/Category";
import FlashSale from "../components/UI/Home/FlashSale";
import TrendingProduct from "../components/UI/Home/TrendingProduct";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <FlashSale></FlashSale>
      <Suspense fallback={<div>Loading...</div>}>
        <Category></Category>
      </Suspense>
      <TrendingProduct></TrendingProduct>
    </div>
  );
};

export default HomePage;
