"use client";

import "./globals.css";
import Image from "next/image";
import ScrollProgress from "./components/ScrollProgress";
import { useState, ReactNode } from "react";
import RotatingWheel from "./components/RotatingWheel";
import JumpingDots from "./components/JumpingDots"; // ✅ Corrected case
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
        {/* Animated Menu */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              className="fixed inset-0 z-50 bg-[#EFF0F4] flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Close Button */}
              <button
                onClick={handleShowMenu}
                className="absolute top-4 right-4  rounded-full w-12 h-12 bg-[#EFF0F4] text-amber-500
             flex justify-center items-center font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out
             hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-6 h-6 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Menu Links */}
              <div className="flex flex-col items-center space-y-4">
                <Link
                  href="/"
                  onClick={handleShowMenu}
                  className="bg-[#EFF0F4] text-amber-500 rounded-2xl w-64 h-16 
              
             flex justify-center items-center font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out
             hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96]"
                >
                  HOME
                </Link>

                <Link
                  href="/about"
                  onClick={handleShowMenu}
                  className="bg-[#EFF0F4] text-amber-500 rounded-2xl w-64 h-16 
              
             flex justify-center items-center font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out
             hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96]"
                >
                  ABOUT
                </Link>
                <Link
                  href="/services"
                  onClick={handleShowMenu}
                  className="bg-[#EFF0F4] text-amber-500 rounded-2xl w-64 h-16 
              
             flex justify-center items-center font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out
             hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96]"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  onClick={handleShowMenu}
                  className="bg-[#EFF0F4] text-amber-500 rounded-2xl w-64 h-16 
              
             flex justify-center items-center font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out
             hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96]"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll Progress */}
        <ScrollProgress />

        {/* Navbar */}
        <nav className="w-full h-12 mt-8 absolute flex justify-between px-8">
          {/* Logo */}
          <div className="h-full w-32 relative">
            <Image src="/hkl-logos.png" alt="hkl logo" fill priority />
          </div>

          {/* Right-side buttons */}
          <div className="h-44 flex flex-col justify-between w-12">
            {/* Menu Toggle Button */}
            <div
              onClick={handleShowMenu}
              className="bg-[#EFF0F4] rounded-full w-full aspect-square   
              
             flex justify-center items-center font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out
             hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96] cursor-pointer"
            >
              <JumpingDots />
            </div>

            {/* Rotating Wheel */}
            <div className="bg-[#EFF0F4] rounded-full w-full aspect-square   
              
             flex justify-center items-center font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out
             hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96] cursor-pointer">
              <RotatingWheel />
            </div>

            {/* Extra Button Placeholder */}
            <div className="bg-[#EFF0F4]  rounded-full w-full aspect-square   
              
             flex justify-center items-center font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out
             hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96] cursor-pointer"></div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
