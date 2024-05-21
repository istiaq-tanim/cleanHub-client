import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CleanSweep",
  description:
    "CleanSweep is your go-to app for efficient and hassle-free cleaning solutions. Whether you're tidying up your home, office, or any other space, CleanSweep provides expert tips, personalized plans, and a user-friendly interface to make your cleaning tasks a breeze. Join our community of cleanliness enthusiasts and experience the joy of a sparkling environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
