"use client";
import { registerUser } from "@/app/services/actions/registerUser";
import { TUser } from "@/app/types/types";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUser>();
  const onSubmit: SubmitHandler<TUser> = async (data) => {
    try {
      const response = await registerUser(data);
      if (response?.success) {
        toast.success(response?.message);
        router.push("/logIn");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <main className="">
      <section className="h-screen grid place-items-center">
        <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
          <h4 className="font-bold text-2xl">Sign Up</h4>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name">User Name</label>
              <input type="text" id="name" {...register("name")} />
            </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" {...register("email")} />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input type="password" {...register("password")} id="password" />
            </div>

            <button
              type="submit"
              className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-xs text-gray-600">Or</p>

          <Link
            href="/logIn"
            className="underline text-sm mx-auto block text-gray-600 mt-4 text-center"
          >
            Login
          </Link>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
