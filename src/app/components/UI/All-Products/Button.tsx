"use client";

import { useRouter } from "next/navigation";

const Button = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`dishwashing-items/${id}`);
  };
  return (
    <button
      onClick={handleClick}
      className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-br-xl mt-2"
    >
      {children}
    </button>
  );
};

export default Button;
