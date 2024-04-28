"use client";
import { Link } from "waku";
import { clientApi } from "../../data";
import { ProductDetailsSkeleton } from "../../skeletons";
import { useQuery } from "../../hooks";

export default function ProductPage() {
  if (typeof window === "undefined") {
    return null;
  }
  return (
    <div>
      <h1>Product Details</h1>
      <ProductDetails />
    </div>
  );
}

function ProductDetails() {
  console.log(`<ProductPage />`);

  const product = useQuery(clientApi.getProductData);

  if (!product) {
    return <ProductDetailsSkeleton />;
  }

  return (
    <div className="w-full px-8 py-4">
      <title>{product.name} - Product Details</title>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <div className="bg-gray-400 bg-gradient-to-tr from-orange-500 to-yellow-300 h-96 rounded"></div>
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="mt-2 text-lg">{product.description}</p>
          <span className="mt-4 text-2xl font-bold">${product.price}</span>
          <div className="mt-6">
            <button className="rounded bg-black px-4 py-2 text-white">
              Add to Cart
            </button>
          </div>
          <Link to="/client/" className="mt-4 inline-block underline">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
