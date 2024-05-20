import AllCategory from "@/app/components/UI/Category/AllCategory";
import Container from "@/app/components/UI/Container";

const CategoryPage = () => {
  return (
    <Container>
      <h3 className="text-center mt-5 text-2xl text-[#434343]">
        All Categories
      </h3>
      <AllCategory></AllCategory>
    </Container>
  );
};

export default CategoryPage;
