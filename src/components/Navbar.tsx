import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">All</Link>
      <Link href="/?todos=active">Active</Link>
      <Link href="/?todos=completed">Completed</Link>
    </nav>
  );
};
export default Navbar;
