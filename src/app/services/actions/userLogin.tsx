"use server";
import { TFormValues } from "@/app/types/types";

export const userLogIn = async (credential: TFormValues) => {
  const response = await fetch(
    "https://cleaning-supply-server.vercel.app/api/v1/login",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credential),
      cache: "no-store",
    }
  );
  const user = await response.json();
  return user;
};
