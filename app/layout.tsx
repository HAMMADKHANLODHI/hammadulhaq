"use client";

import "./globals.css";
import Image from "next/image";

import { useState, ReactNode } from "react";

import { Nunito_Sans } from "next/font/google";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => setShowMenu(!showMenu);

  return (
    <html lang="en">
      <body className={`h-full ${nunito.variable} font-sans bg-[#EFF0F4]`}>
        
        {children}
      </body>
    </html>
  );
}
