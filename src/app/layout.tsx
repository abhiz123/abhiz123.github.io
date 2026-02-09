import type { Metadata } from "next";
import { Shrikhand, Righteous, Abril_Fatface } from "next/font/google";
import "./globals.css";

const shrikhand = Shrikhand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-shrikhand",
  display: "swap",
});

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-righteous",
  display: "swap",
});

const abrilFatface = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abril",
  display: "swap",
});

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
      <body className={`${shrikhand.variable} ${righteous.variable} ${abrilFatface.variable} font-funky`}>
        {children}
      </body>
    </html>
  );
}
