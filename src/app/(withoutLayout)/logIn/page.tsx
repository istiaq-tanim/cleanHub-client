"use client";
import { userLogIn } from "@/app/services/actions/userLogin";
import { setUserInfo } from "@/app/services/autServices";
import { TFormValues } from "@/app/types/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const LoginPage = () => {
  const { register, handleSubmit } = useForm<TFormValues>();
  const router = useRouter();
  const onSubmit: SubmitHandler<TFormValues> = async (data) => {
    try {
      const result = await userLogIn(data);
      if (result?.token) {
        toast.success(result?.message);
        setUserInfo({ accessToken: result?.token });
        router.push("/");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <main className="">
      <section className="h-screen grid place-items-center">
        <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
          <h4 className="font-bold text-2xl">Sign in</h4>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" {...register("email")} />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" {...register("password")} />
            </div>

            <button
              type="submit"
              className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
            >
              Login
            </button>
          </form>

          <p className="text-center text-xs text-gray-600">Or</p>

          <Link
            href="/register"
            className="underline text-sm mx-auto block text-gray-600 mt-4 text-center"
          >
            Create New Account
          </Link>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
