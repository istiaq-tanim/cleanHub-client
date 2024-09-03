import { StaticImageData } from "next/image"
import { USER_ROLE } from "../constant/role"

export type TProduct = {
      _id: string,
      productName: string,
      rating: number,
      price: number,
      flashSale: boolean
      reviewNumber: number,
      brand: string
      description: string,
      category: string,
      images: string[]
      created_at: string,
      discountPercentage: number,
      features: string[]
}

export type TUser = {
      email: string;
      name: string;
      password: string;
};

export type TFormValues = {
      email: string;
      password: string;
};

export type USerRole = keyof typeof USER_ROLE

export interface SidebarItem {
      title: string;
      path: string;
      parentPath?: string;
      icon?: StaticImageData;
}

export type ProductInputs = {
      productName: string;
      brand: string;
      price: number;
      rating: number;
      images: string;
      category: string;
      features: string;
      description: string;
};
