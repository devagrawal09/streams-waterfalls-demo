"use client";

import { clientApi } from "../../data";
import { useQuery } from "../../hooks";
import { FeaturedProduct, TrendingProducts, ForYouProducts } from "./_client";

export default function HomePage() {
  if (typeof window === "undefined") {
    return null;
  }

  // Option One
  const trendingData = useQuery(clientApi.getTrendingData);
  const featuredData = useQuery(clientApi.getFeaturedProductData);
  const forYouData = useQuery(clientApi.getForYouData);

  return (
    <div className="w-full px-8">
      <title>Bad E-Comm Demo</title>
      <div className="grid grid-cols-2 gap-16">
        <div className="rounded px-8 py-2">
          <h2 className="text-center text-3xl">Trending</h2>
          <div className="mt-4">
            <FeaturedProduct featuredData={featuredData} />
            <TrendingProducts trendingData={trendingData} />
          </div>
        </div>
        <div className="rounded px-8 py-2">
          <h2 className="text-center text-3xl">For You</h2>
          <div className="mt-4">
            <ForYouProducts forYouData={forYouData} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Option Two
export const loader = async () => {
  const [featuredData, trendingData, forYouData] = await Promise.all([
    clientApi.getFeaturedProductData(),
    clientApi.getTrendingData(),
    clientApi.getForYouData(),
  ]);

  return {
    featuredData,
    trendingData,
    forYouData,
  };
};
