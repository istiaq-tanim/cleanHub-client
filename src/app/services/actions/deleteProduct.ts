"use server"

import { revalidatePath } from "next/cache"

export const deleteProduct = async (id: string) => {
      const response = await fetch(`https://cleaning-supply-server.vercel.app/product/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
      })
      revalidatePath("/dashboard/admin/products")
      return response.json()
}