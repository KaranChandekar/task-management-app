"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Navbar = () => {
  const searchParams = useSearchParams();
  const todosFilter = searchParams.get("todos");
  console.log("Navbar " + todosFilter);

  return (
    <nav>
      <Link
        href="/"
        className={todosFilter === null ? "active" : "text-red-500"}
      >
        All
      </Link>
      <Link
        href="/?todos=active"
        className={todosFilter === "active" ? "text-red-500" : ""}
      >
        Active
      </Link>
      <Link
        href="/?todos=completed"
        className={todosFilter === "completed" ? "text-red-500" : ""}
      >
        Completed
      </Link>
    </nav>
  );
};
export default Navbar;
