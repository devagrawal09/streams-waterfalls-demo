const timeoutPromise = (ms: number) =>
  new Promise((res) => setTimeout(res, ms));

const createApi = (timeout: number) => {
  const getTrendingData = async () => {
    console.log(`getTrendingData()`);
    await timeoutPromise(timeout);
    const trendingData = [
      {
        name: "Product 1",
        description: "This is a description of product 1",
        price: "19.99",
        image: "/images/product1.jpg",
      },
      {
        name: "Product 2",
        description: "This is a description of product 2",
        price: "24.99",
        image: "/images/product2.jpg",
      },
      {
        name: "Product 3",
        description: "This is a description of product 3",
        price: "14.99",
        image: "/images/product3.jpg",
      },
    ];

    console.log(`getTrendingData() completed`);
    return trendingData;
  };

  const getForYouData = async () => {
    console.log(`getForYouData()`);
    await timeoutPromise(timeout);
    const forYouData = [
      {
        name: "Product A",
        description: "This is a description of product A",
        price: "29.99",
        image: "/images/productA.jpg",
      },
      {
        name: "Product B",
        description: "This is a description of product B",
        price: "34.99",
        image: "/images/productB.jpg",
      },
      {
        name: "Product C",
        description: "This is a description of product C",
        price: "39.99",
        image: "/images/productC.jpg",
      },
    ];

    console.log(`getForYouData() completed`);
    return forYouData;
  };

  const getFeaturedProductData = async () => {
    console.log(`getFeaturedProductData()`);
    await timeoutPromise(timeout);
    console.log(`getFeaturedProductData() completed`);
    return {
      name: "Featured product",
      description: "Featured description",
      price: "420",
      image: "/images/featured.jpg",
    };
  };

  const getAccountData = async () => {
    console.log(`getAccountData()`);
    await timeoutPromise(timeout);
    const accountData = {
      orders: [
        {
          id: "1234",
          date: "Jan 1, 2021",
          total: "59.99",
        },
        {
          id: "2345",
          date: "Feb 12, 2021",
          total: "89.99",
        },
        {
          id: "3456",
          date: "Mar 23, 2021",
          total: "99.99",
        },
      ],
      details: {
        name: "John Doe",
        email: "john.doe@example.com",
        address: "123 Main St, Anytown, USA",
      },
    };

    console.log(`getAccountData() completed`);
    return accountData;
  };

  const getProductData = async () => {
    console.log(`getProductData()`);
    await timeoutPromise(timeout);
    const product = {
      name: "Product Name",
      description: "This is a detailed description of the product.",
      price: "49.99",
      image: "/images/product-placeholder.jpg",
    };

    console.log(`getProductData() completed`);
    return product;
  };

  return {
    getTrendingData,
    getForYouData,
    getFeaturedProductData,
    getAccountData,
    getProductData,
  };
};

export const clientApi = createApi(3000);
export const serverApi = createApi(1000);
