"use client";

import "./globals.css";
import Image from "next/image";
import { Toaster as SonnerToaster, type ToasterProps } from "sonner";
import { useState, ReactNode } from "react";
import { useTheme } from 'next-themes';

import { Nunito_Sans } from "next/font/google";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
const { resolvedTheme } = useTheme();
  return (
    <html lang="en">
      <body className={`min-h-screen min-w-screen ${nunito.variable} font-sans bg-white`}>
        <SonnerToaster position="top-center" theme={resolvedTheme as ToasterProps['theme']} richColors />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
