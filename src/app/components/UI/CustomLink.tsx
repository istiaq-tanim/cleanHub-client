"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) => {
  const pathName = usePathname();
  const active = pathName === path;

  return (
    <Link className={active ? "text-blue-600 font-bold" : ""} href={path}>
      {children}
    </Link>
  );
};

export default CustomLink;
