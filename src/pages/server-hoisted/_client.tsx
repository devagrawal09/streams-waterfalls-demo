"use client";

import { Link } from "waku";
import {
  FeaturedProductSkeleton,
  ProductDetailsSkeleton,
  ProductListSkeleton,
} from "../../skeletons";

interface ProductData {
  name: string;
  description: string;
  price: string;
}

interface FeaturedProductProps {
  featuredData: ProductData | null;
}

interface TrendingProductsProps {
  trendingData: ProductData[] | null;
}

interface ForYouProductsProps {
  forYouData: ProductData[] | null;
}

interface ProductDetailsProps {
  product: ProductData | null;
}

export const FeaturedProduct: React.FC<FeaturedProductProps> = ({
  featuredData,
}) => {
  console.warn("Hello HomePage 2");
  // console.log(`<FeaturedProduct />`);

  if (!featuredData) return <FeaturedProductSkeleton />;

  return (
    <Link to="/server-hoisted/product">
      <div className="mb-4 gap-8 cursor-pointer hover:shadow-lg transition-shadow">
        <div className="w-full h-64 bg-gray-400 bg-gradient-to-tr from-orange-500 to-yellow-300 rounded" />
        <div className="text-right m-2">
          <h3 className="text-xl">{featuredData.name}</h3>
          <p>{featuredData.description}</p>
          <span className="text-lg font-bold">${featuredData.price}</span>
        </div>
      </div>
    </Link>
  );
};

export const TrendingProducts: React.FC<TrendingProductsProps> = ({
  trendingData,
}) => {
  if (!trendingData) {
    return (
      <>
        <ProductListSkeleton />
        <ProductListSkeleton />
        <ProductListSkeleton />
      </>
    );
  }

  return (
    <>
      {trendingData?.map((product, index) => (
        <Link to="/server-hoisted/product" key={index}>
          <div className="mb-4 flex gap-8 cursor-pointer hover:shadow-lg transition-shadow">
            <div className="w-20 bg-gray-400 bg-gradient-to-tr from-red-400 to-orange-200 rounded" />
            <div className="grow">
              <h3 className="text-xl">{product.name}</h3>
              <p>{product.description}</p>
              <span className="text-lg font-bold">${product.price}</span>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export const ForYouProducts: React.FC<ForYouProductsProps> = ({
  forYouData,
}) => {
  // console.log(`<ForYouProducts />`);

  if (!forYouData) {
    return (
      <>
        <ProductListSkeleton />
        <ProductListSkeleton />
        <ProductListSkeleton />
      </>
    );
  }

  return (
    <>
      {forYouData?.map((product, index) => (
        <Link to="/server-hoisted/product" key={index}>
          <div className="mb-4 flex gap-8 cursor-pointer hover:shadow-lg transition-shadow">
            <div className="w-20 bg-gray-400 bg-gradient-to-tr from-indigo-400 to-cyan-200 rounded" />
            <div className="grow">
              <h3 className="text-xl">{product.name}</h3>
              <p>{product.description}</p>
              <span className="text-lg font-bold">${product.price}</span>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  // console.log(`<ProductPage />`);

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
          <Link to="/server/" className="mt-4 inline-block underline">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
