"use client";

import "@/app/globals.css";


import { useState, ReactNode } from "react";
import { Provider } from "react-redux";
import { Nunito_Sans } from "next/font/google";

import PublicProvider from '@/app/(public)/PublicProvider';
// Load Nunito Sans
const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  

  return (
    <html lang="en">
      <body className={`h-full ${nunito.variable} font-sans bg-[#EFF0F4]`}>
        <PublicProvider>
        {children}
        </PublicProvider>
      </body>
    </html>
  );
}
