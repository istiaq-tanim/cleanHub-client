"use client";
import { addProduct } from "@/app/services/actions/addProduct";
import { ProductInputs } from "@/app/types/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm<ProductInputs>();
  const onSubmit: SubmitHandler<ProductInputs> = async (data) => {
    const featuresArray = data?.features?.split(",").map((item) => item.trim());
    const imageArray = data?.images?.split(",").map((item) => item.trim());

    const product = {
      productName: data?.productName,
      rating: Number(data?.rating),
      price: Number(data?.price),
      features: featuresArray,
      images: imageArray,
      description: data?.description,
      category: data?.category,
      brand: data?.brand,
    };
    try {
      const response = await addProduct(product);
      if (response?.success) {
        toast.success(response?.message);
        reset();
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="font-[sans-serif] m-6 max-w-4xl mx-auto"
    >
      <div className="grid sm:grid-cols-2 gap-10">
        <div className="relative flex items-center">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
            Product Name
          </label>
          <input
            type="text"
            placeholder="Enter Product name"
            {...register("productName", { required: true })}
            className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
          />
        </div>

        <div className="relative flex items-center">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
            Brand
          </label>
          <input
            type="text"
            placeholder="Brand Name"
            {...register("brand", { required: true })}
            className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
          />
        </div>

        <div className="relative flex items-center">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
            Price
          </label>
          <input
            type="number"
            placeholder="Enter the price"
            {...register("price", { required: true })}
            className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
          />
        </div>

        <div className="relative flex items-center">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
            Rating
          </label>
          <input
            type="number"
            {...register("rating", { required: true })}
            placeholder="Enter Rating"
            className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
          />
        </div>

        <div className="relative flex items-center sm:col-span-2">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
            Image
          </label>
          <input
            type="text"
            placeholder="Enter Image URL"
            {...register("images", { required: true })}
            className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
          />
        </div>

        <div className="relative flex items-center sm:col-span-2">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
            Description
          </label>
          <textarea
            placeholder="Enter the description"
            {...register("description", { required: true })}
            className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
          />
        </div>
        <div className="relative flex items-center">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
            Category
          </label>
          <select
            {...register("category", { required: true })}
            className="select select-bordered w-full"
          >
            <option disabled selected>
              Please select a category
            </option>
            <option value="Dish gloves">Dish gloves</option>
            <option value="Dish Liquid">Dish Liquid</option>
            <option value="Dish gloves">Dish gloves</option>
            <option value="Dish Brush">Dish Brush</option>
            <option value="Dishwasher Detergent">Dishwasher Detergent</option>
            <option value="sponges">Sponges</option>
          </select>
        </div>
        <div className="relative flex items-center">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">
            Features
          </label>
          <input
            type="text"
            {...register("features", { required: true })}
            placeholder="Please add Feature with comma separator"
            className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 px-6 py-2.5 w-full text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
      >
        Submit
      </button>
    </form>
  );
};

export default AddProduct;
