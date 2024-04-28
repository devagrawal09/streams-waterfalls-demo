import { Link } from "waku";

export default async function AccountDashboard() {
  const accountData = await getAccountData();

  return (
    <div className="w-full px-8">
      <title>Account Dashboard</title>
      <div className="grid grid-cols-2 gap-16">
        <div className="rounded px-8 py-2">
          <h2 className="text-center text-3xl">My Orders</h2>
          <div className="mt-4">
            {accountData.orders.map((order, index) => (
              <div
                key={index}
                className="mb-4 flex gap-8 cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="w-20 bg-gray-400 bg-gradient-to-tr from-orange-500 to-yellow-300 rounded" />
                <div className="grow">
                  <h3 className="text-xl">Order #{order.id}</h3>
                  <p>{order.date}</p>
                  <span className="text-lg font-bold">${order.total}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded px-8 py-2">
          <h2 className="text-center text-3xl">Account Details</h2>
          <div className="mt-4">
            <div className="mb-4">
              <h3 className="text-xl">Name</h3>
              <p>{accountData.details.name}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl">Email</h3>
              <p>{accountData.details.email}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl">Address</h3>
              <p>{accountData.details.address}</p>
            </div>
            <button className="px-4 py-2 bg-gradient-to-tr from-indigo-400 to-cyan-200 rounded hover:shadow-lg transition-shadow">
              Edit Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const getAccountData = async () => {
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

  return accountData;
};

export const getConfig = async () => {
  return {
    render: "static",
  };
};
