"use client";
import { removeUserInfo } from "@/app/services/autServices";
import { useRouter } from "next/navigation";
import React from "react";
const SignOut = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const handelSignOut = () => {
    removeUserInfo();
    router.refresh();
  };

  return (
    <button
      onClick={handelSignOut}
      className="bg-purple-500 text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none"
    >
      {children}
    </button>
  );
};

export default SignOut;
