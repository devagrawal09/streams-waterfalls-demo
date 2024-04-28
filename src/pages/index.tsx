import { Link } from "waku";

export default function HomePage() {
  return (
    <div className="w-full px-8">
      <title>Navigation Demo</title>
      <div className="flex flex-col items-center justify-center pt-24 space-y-4">
        <Link to="/client">
          <button className="w-96 h-16 bg-blue-500 text-white text-2xl rounded hover:bg-blue-700 transition-colors">
            Client Component Fetching
          </button>
        </Link>
        <Link to="/hoisted">
          <button className="w-96 h-16 bg-green-500 text-white text-2xl rounded hover:bg-green-700 transition-colors">
            Hoisted Fetching
          </button>
        </Link>
        <Link to="/server">
          <button className="w-96 h-16 bg-red-500 text-white text-2xl rounded hover:bg-red-700 transition-colors">
            Server Component Fetching
          </button>
        </Link>
      </div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: "dynamic",
  };
};
