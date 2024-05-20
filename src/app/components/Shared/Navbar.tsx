"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
import CustomLink from "../UI/CustomLink";
import NavButton from "../UI/NavButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-gray-300 opacity-70 px-4 py-5 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 sticky top-0 z-50">
      <div className="relative flex items-center justify-between">
        <Link href="/" className="inline-flex items-center">
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
            nextPage
          </span>
        </Link>

        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <CustomLink path="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink path="/flash-sale">Flash Sale</CustomLink>
          </li>
          <li>
            <CustomLink path="/dishwashing-items">Products</CustomLink>
          </li>
          <li>
            <CustomLink path="/dashboard">Dashboard</CustomLink>
          </li>
          <li>
            <CustomLink path="/category">Category</CustomLink>
          </li>
        </ul>

        <div className="lg:hidden">
          <NavButton onHandle={() => setIsMenuOpen(true)}>
            <FaBars className="w-5 text-gray-600" />
          </NavButton>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link href="/" className="inline-flex items-center">
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        nextPage
                      </span>
                    </Link>
                  </div>

                  <div>
                    <NavButton onHandle={() => setIsMenuOpen(false)}>
                      {" "}
                      <HiMiniXMark className="w-5 text-gray-600" />
                    </NavButton>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/" className="default">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/flash-sale"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Flash Sale
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dishwashing-items"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Products
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
