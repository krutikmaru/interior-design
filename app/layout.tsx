import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/app/components/ui/navigation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Interior Designer",
  description: "Interior Designer by Krutik Maru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navigation />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
