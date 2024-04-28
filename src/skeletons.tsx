export const ProductListSkeleton = () => {
  return (
    <div className="animate-pulse flex space-x-4 my-4">
      <div className="rounded bg-gray-300 h-20 w-20" />
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-gray-300 rounded" />
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-gray-300 rounded col-span-2" />
            <div className="h-2 bg-gray-300 rounded col-span-1" />
          </div>
          <div className="h-2 bg-gray-300 rounded" />
        </div>
      </div>
    </div>
  );
};

export const ProductDetailsSkeleton = () => {
  return (
    <div className="w-full px-8 py-4">
      <div className="animate-pulse flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <div className="bg-gray-300 h-96 rounded"></div>
        </div>
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="h-8 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-10 bg-gray-300 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export const AccountDetailsSkeleton = () => {
  return (
    <div className="w-full px-8">
      <div className="grid grid-cols-2 gap-16">
        <div className="rounded px-8 py-2 animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="space-y-4">
            {[...new Array(3)].map((_, index) => (
              <div key={index} className="flex gap-8">
                <div className="w-20 h-20 bg-gray-300 rounded"></div>
                <div className="flex-grow space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded px-8 py-2 animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="space-y-4">
            {[...new Array(3)].map((_, index) => (
              <div key={index} className="space-y-2">
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const FeaturedProductSkeleton = () => {
  return (
    <div className="mb-16">
      <div className="animate-pulse">
        <div className="w-full h-64 bg-gray-300 rounded mb-4"></div>
        <div className="m-2 space-y-2">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
};
