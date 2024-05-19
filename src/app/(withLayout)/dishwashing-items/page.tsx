import Filter from "@/app/components/UI/All-Products/Filter";
import ProductList from "@/app/components/UI/All-Products/ProductList";
import Container from "@/app/components/UI/Container";

const ProductPage = async ({ searchParams }) => {
  const { rating, price } = searchParams;

  let url;
  let refineRating;
  let refinePrice;
  const decodedRating = decodeURI(rating);
  const decodedPrice = decodeURI(price);
  if (decodedRating === "undefined" && decodedPrice === "undefined") {
    refineRating = "";
    refinePrice = "";
    url = "http://localhost:5000/dishWashing-items";
  } else if (decodedRating !== "undefined" && decodedPrice !== "undefined") {
    refinePrice = decodedPrice;
    refineRating = decodedRating;
    url = `http://localhost:5000/dishWashing-items?rating=${refineRating}&price=${refinePrice}`;
  } else if (decodedPrice !== "undefined") {
    refinePrice = decodedPrice;
    url = `http://localhost:5000/dishWashing-items?price=${refinePrice}`;
  } else if (decodedRating !== "undefined") {
    refineRating = decodedRating;
    url = `http://localhost:5000/dishWashing-items?rating=${refineRating}`;
  }

  const response = await fetch(url, {
    cache: "no-store",
  });
  const result = await response.json();

  return (
    <Container>
      <section className="py-12">
        <div className="container grid grid-cols-12 gap-5">
          <Filter />
          <ProductList products={result?.data}></ProductList>
        </div>
      </section>
    </Container>
  );
};

export default ProductPage;
