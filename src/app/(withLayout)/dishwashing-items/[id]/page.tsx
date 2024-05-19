import Container from "@/app/components/UI/Container";
import ProductDetails from "@/app/components/UI/ProductDetails/ProductDetails";

const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const response = await fetch(`http://localhost:5000/dishWashing-items/${id}`);
  const result = await response.json();

  return (
    <Container>
      <ProductDetails product={result?.data}></ProductDetails>
    </Container>
  );
};

export default ProductDetailsPage;
