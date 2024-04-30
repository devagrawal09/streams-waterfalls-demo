import { serverApi } from "../../data";
import { ProductDetails } from "./_client";

export default async function ProductPage() {
  const product = await serverApi.getProductData();

  return (
    <div>
      <h1>Product Details</h1>
      <ProductDetails product={product} />
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "dynamic",
  };
};
