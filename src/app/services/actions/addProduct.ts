"use server"

import { revalidatePath } from "next/cache";

export type SaveProduct = {
      productName: string;
      brand: string;
      price: number;
      rating: number;
      images: string[];
      category: string;
      features: string[];
      description: string;
};

export const addProduct = async (product: SaveProduct) => {
      const response = await fetch("http://localhost:5000/addProduct", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
            cache: "no-store"
      })
      revalidatePath("/dashboard/admin/products")
      const result = response.json()
      return result

} 