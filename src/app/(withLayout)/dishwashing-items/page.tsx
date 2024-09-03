import Filter from "@/app/components/UI/All-Products/Filter";
import ProductList from "@/app/components/UI/All-Products/ProductList";
import Container from "@/app/components/UI/Container";

type TSearchParams = {
  rating: string;
  price: string;
  category: string;
};

const ProductPage = async ({
  searchParams,
}: {
  searchParams: TSearchParams;
}) => {
  const { rating, price, category } = searchParams;

  let url;
  let refineRating;
  let refinePrice;
  let refineCategory;

  const decodedRating = decodeURI(rating);
  const decodedPrice = decodeURI(price);
  const decodeCategory = decodeURI(category);
  if (
    decodedRating === "undefined" &&
    decodedPrice === "undefined" &&
    decodeCategory === "undefined"
  ) {
    refineRating = "";
    refinePrice = "";
    refineCategory = "";

    url = "https://cleaning-supply-server.vercel.app/dishWashing-items";
  } else if (
    decodedRating !== "undefined" &&
    decodedPrice !== "undefined" &&
    decodeCategory !== "undefined"
  ) {
    refinePrice = decodedPrice;
    refineRating = decodedRating;
    refineCategory = decodeCategory;

    url = `https://cleaning-supply-server.vercel.app/dishWashing-items?rating=${refineRating}&price=${refinePrice}&category=${refineCategory}`;
  } else if (decodedPrice !== "undefined" && decodedRating !== "undefined") {
    refinePrice = decodedPrice;
    refineRating = decodedRating;
    url = `https://cleaning-supply-server.vercel.app/dishWashing-items?price=${refinePrice}&rating=${refineRating}`;
  } else if (decodedPrice !== "undefined" && decodeCategory !== "undefined") {
    refinePrice = decodedPrice;
    refineCategory = decodeCategory;
    url = `https://cleaning-supply-server.vercel.app/dishWashing-items?price=${refinePrice}&category=${refineCategory}`;
  } else if (decodedRating !== "undefined" && decodeCategory !== "undefined") {
    refineRating = decodedRating;
    refineCategory = decodeCategory;
    url = `https://cleaning-supply-server.vercel.app/dishWashing-items?rating=${refineRating}&category=${refineCategory}`;
  } else if (decodedPrice !== "undefined") {
    refinePrice = decodedPrice;
    url = `https://cleaning-supply-server.vercel.app/dishWashing-items?price=${refinePrice}`;
  } else if (decodedRating !== "undefined") {
    refineRating = decodedRating;
    url = `https://cleaning-supply-server.vercel.app/dishWashing-items?rating=${refineRating}`;
  } else if (decodeCategory !== "undefined") {
    refineCategory = decodeCategory;
    url = `https://cleaning-supply-server.vercel.app/dishWashing-items?category=${refineCategory}`;
  }

  const response = await fetch(url as string, {
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
