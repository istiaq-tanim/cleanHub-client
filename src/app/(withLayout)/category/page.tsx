import Loader from "@/app/components/Shared/Loader";
import AllCategory from "@/app/components/UI/Category/AllCategory";
import Container from "@/app/components/UI/Container";
import { Suspense } from "react";

const CategoryPage = () => {
  return (
    <Container>
      <h3 className="text-center my-5 text-2xl text-[#434343]">
        All Categories
      </h3>
      <Suspense fallback={<Loader></Loader>}>
        <AllCategory></AllCategory>
      </Suspense>
    </Container>
  );
};

export default CategoryPage;
