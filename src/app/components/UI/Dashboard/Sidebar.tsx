import Link from "next/link";
import { FaBoxOpen, FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-[#D9D9D9] text-base-content">
        <li className="text-lg">
          <Link href="/">
            <FaHome></FaHome>Home
          </Link>
        </li>
        <li className="text-lg">
          <Link href="/dishwashing-items">
            <FaBoxOpen /> All Products
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
