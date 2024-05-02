import { serverApi } from "../../data";
import { FeaturedProduct, ForYouProducts, TrendingProducts } from "./_client";

export async function loader() {
  const [featuredData, trendingData, forYouData] = await Promise.all([
    serverApi.getFeaturedProductData(),
    serverApi.getTrendingData(),
    serverApi.getForYouData(),
  ]);

  return {
    featuredData,
    trendingData,
    forYouData,
  };
}

export default async function HomePage() {
  console.warn("Hello HomePage 1");

  const { featuredData, trendingData, forYouData } = await loader();

  return (
    <div className="w-full px-8">
      <title>Okayish E-Comm Demo</title>
      <div className="grid grid-cols-2 gap-16">
        <div className="rounded px-8 py-2">
          <h2 className="text-center text-3xl">Trending</h2>
          <FeaturedProduct
            featuredData={featuredData}
            trendingData={trendingData}
          />
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

export const getConfig = async () => {
  return {
    render: "dynamic",
  };
};
