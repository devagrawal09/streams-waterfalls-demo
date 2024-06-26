"use client";

import { Link } from "waku";
import { clientApi } from "../../data";
import { FeaturedProductSkeleton, ProductListSkeleton } from "../../skeletons";
import { useQuery } from "../../hooks";

export default function HomePage() {
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <div className="w-full px-8">
      <title>Bad E-Comm Demo</title>
      <div className="grid grid-cols-2 gap-16">
        <div className="rounded px-8 py-2">
          <h2 className="text-center text-3xl">Trending</h2>
          <FeaturedProduct />
        </div>
        <div className="rounded px-8 py-2">
          <h2 className="text-center text-3xl">For You</h2>
          <div className="mt-4">
            <ForYouProducts />
          </div>
        </div>
      </div>
    </div>
  );
}

const FeaturedProduct = () => {
  console.log(`<FeaturedProduct />`);

  const featuredData = useQuery(clientApi.getFeaturedProductData);

  if (!featuredData) return <FeaturedProductSkeleton />;

  return (
    <div className="mt-4">
      <Link to="/client/product">
        <div className="mb-4 gap-8 cursor-pointer hover:shadow-lg transition-shadow">
          <div className="w-full h-64 bg-gray-400 bg-gradient-to-tr from-orange-500 to-yellow-300 rounded" />
          <div className="text-right m-2">
            <h3 className="text-xl">{featuredData.name}</h3>
            <p>{featuredData.description}</p>
            <span className="text-lg font-bold">${featuredData.price}</span>
          </div>
        </div>
      </Link>
      <TrendingProducts />
    </div>
  );
};

const TrendingProducts = () => {
  console.log(`<TrendingProducts />`);

  const trendingData = useQuery(clientApi.getTrendingData);

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
        <Link to="/client/product" key={index}>
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

const ForYouProducts = () => {
  console.log(`<ForYouProducts />`);

  const forYouData = useQuery(clientApi.getForYouData);

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
        <Link to="/client/product" key={index}>
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
