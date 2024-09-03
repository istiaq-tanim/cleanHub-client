"use server";

import { TUser } from "@/app/types/types";

export const registerUser = async (user: TUser) => {
  const response = await fetch(
    "https://cleaning-supply-server.vercel.app/api/v1/register",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
      cache: "no-store",
    }
  );

  const userInfo = await response.json();
  return userInfo;
};
