"use client";

import type { ReactNode } from "react";
import { Link } from "waku";

type ClientLayoutProps = { children: ReactNode };

export default function ClientLayout({ children }: ClientLayoutProps) {
  console.log(`<ClientLayout />`);

  return (
    <div className="font-['Nunito']">
      <header className="flex items-center justify-between gap-4 p-2 lg:fixed lg:left-0 lg:top-0 bg-indigo-900 w-full">
        <h2 className="text-lg font-bold tracking-tight text-white p-2">
          <Link to="/">Freak-a-zon</Link>
        </h2>
        <input
          type="text"
          placeholder="Search"
          className="rounded px-4 py-2 w-1/2"
        />
        <div className="p-2 text-white flex gap-2">
          <Link
            to="/client-hoisted/account"
            className="px-3 py-2 rounded hover:underline hover:bg-white hover:bg-opacity-20 transition-all"
          >
            Account
          </Link>
          <button className="px-3 py-2 rounded hover:underline hover:bg-white hover:bg-opacity-20 transition-all">
            0 in cart
          </button>
        </div>
      </header>
      <main className="m-6 pt-20">{children}</main>
    </div>
  );
}

// export const getConfig = async () => {
//   return {
//     render: "static",
//   };
// };
