import Container from "@/app/components/UI/Container";
import ProductDetails from "@/app/components/UI/ProductDetails/ProductDetails";
import { TProduct } from "@/app/types/types";

export const generateStaticParams = async () => {
  const response = await fetch("http://localhost:5000/dishWashing-items");
  const result = await response.json();
  return result?.data
    .slice(0, 10)
    .map((product: TProduct) => ({ productId: product._id }));
};

const ProductDetailsPage = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const { productId } = params;
  const response = await fetch(
    `http://localhost:5000/dishWashing-items/${productId}`
  );
  const result = await response.json();

  return (
    <Container>
      <ProductDetails product={result?.data}></ProductDetails>
    </Container>
  );
};

export default ProductDetailsPage;
