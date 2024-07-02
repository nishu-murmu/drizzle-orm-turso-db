import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionLayout from "./_components/SessionLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description:
    "Next application for learning about next-auth and drizzle orm and turso",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionLayout>{children}</SessionLayout>
      </body>
    </html>
  );
}
