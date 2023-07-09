"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Navbar = () => {
  const searchParams = useSearchParams();
  const todosFilter = searchParams.get("todos");
  console.log("Navbar " + todosFilter);

  return (
    <nav className="sm:w-[550px] w-full flex items-center justify-between border-b border-solid border-[#ccc]">
      <Link
        href="/"
        className={`${
          todosFilter === null
            ? "border-violet-600 text-gray-800 font-semibold hover:border-violet-600"
            : ""
        } md:text-xl text-gray-500 border-solid border-b-4 border-transparent hover:border-gray-500`}
      >
        All
      </Link>
      <Link
        href="/?todos=active"
        className={`${
          todosFilter === "active"
            ? "border-violet-600 text-gray-800 font-semibold hover:border-violet-600"
            : ""
        } md:text-xl text-gray-500 border-b-4 border-transparent border-solid border-6 hover:border-gray-500`}
      >
        Active
      </Link>
      <Link
        href="/?todos=completed"
        className={`${
          todosFilter === "completed"
            ? "border-violet-600 text-gray-800 font-semibold hover:border-violet-600"
            : ""
        } md:text-xl text-gray-500 border-b-4 border-transparent border-solid border-6 hover:border-gray-500`}
      >
        Completed
      </Link>
    </nav>
  );
};
export default Navbar;
