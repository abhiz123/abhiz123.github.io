import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhiram Nair",
  description: "Tech, dance, writing, and table tennis are the core of my world.",
  icons: {
    icon: [
      { url: "/images/favicon.ico" },
      { url: "/images/favicon.png", sizes: "32x32" },
      { url: "/images/favicon.png", sizes: "16x16" },
      { url: "/images/favicon.webp" },
    ],
  },
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
