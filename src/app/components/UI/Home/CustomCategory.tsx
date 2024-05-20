"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const CustomCategory = ({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const handleClick = () => {
    router.push(
      "/dishwashing-items" + "?" + createQueryString("category", path)
    );
  };
  return <div onClick={handleClick}>{children}</div>;
};

export default CustomCategory;
