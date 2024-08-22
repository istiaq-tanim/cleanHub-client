"use server";

import { TUser } from "@/app/types/types";

export const registerUser = async (user: TUser) => {
  const response = await fetch("http://localhost:5000/api/v1/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
    cache: "no-store",
  });

  const userInfo = await response.json();
  return userInfo;
};
