"use client";
import { getUserInfo } from "@/app/services/autServices";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
import CustomLink from "../UI/CustomLink";
import NavButton from "../UI/NavButton";
import SignOut from "../UI/SignOut/SignOut";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userInfo = getUserInfo();
  return (
    <div className="bg-gray-300 opacity-70 px-4 py-5 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-full md:px-24 lg:px-8 sticky top-0 z-50">
      <div className="relative flex items-center justify-between">
        <Link href="/" className="inline-flex items-center">
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
            clean<span className="text-blue-500">Sweep</span>
          </span>
        </Link>

        <ul className="items-center hidden lg:flex gap-5">
          <li>
            <CustomLink path="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink path="/flash-sale">Flash Sale</CustomLink>
          </li>
          <li>
            <CustomLink path="/dishwashing-items">Products</CustomLink>
          </li>
          <CustomLink path="/dashboard/products">Dashboard</CustomLink>
          <li>
            <CustomLink path="/category">Category</CustomLink>
          </li>
          {userInfo?.email ? (
            <li>
              <SignOut>LogOut</SignOut>
            </li>
          ) : (
            <li>
              <CustomLink path="/logIn">LogIn</CustomLink>
            </li>
          )}
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
                      <span className="text-xl font-bold tracking-wide text-gray-800">
                        clean<span className="text-blue-500">Sweep</span>
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

                <nav>
                  <ul className="space-y-4">
                    <li>
                      <CustomLink path="/">Home</CustomLink>
                    </li>
                    <li>
                      <CustomLink path="/flash-sale">Flash Sale</CustomLink>
                    </li>
                    <li>
                      <CustomLink path="/dishwashing-items">
                        Products
                      </CustomLink>
                    </li>
                    <li>
                      <CustomLink path="/dashboard">Dashboard</CustomLink>
                    </li>
                    <li>
                      <CustomLink path="/category">Category</CustomLink>
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
