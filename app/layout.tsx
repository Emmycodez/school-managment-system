import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";

const inter = Rethink_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Dica Demonstration Academy managment system",
  description:
    "Gain real-time insights into the operations and financial performance of Dica Demonstration Academy with our comprehensive management system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
