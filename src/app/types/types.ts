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