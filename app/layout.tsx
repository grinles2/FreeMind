
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "FreeMind",
  description: "FreeMind — уютный vanilla+ сервер Minecraft с дружным сообществом и без лишних забот.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru"><body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0b0014] text-white`}>{children}</body></html>
  );
}
