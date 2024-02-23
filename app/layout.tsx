import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Learning Typescript",
  description: "This is me learning typescript with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <main className="flex flex-col justify-center items-center min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
