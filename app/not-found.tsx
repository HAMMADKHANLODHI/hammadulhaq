"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";


export default function NotFound() {
  const [ayah, setAyah] = useState<{ text: string; ref: string } | null>(null);

  

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center bg-[#EFF0F4] px-4 text-center">
      <section className="max-w-2xl flex flex-col items-center space-y-8">
        
        {/* Animated 404 Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <h1 className="text-[120px] md:text-[180px] font-black text-[#EFF0F4] leading-none drop-shadow-[10px_10px_20px_#bebebe]">
            404
          </h1>
          <p className="absolute inset-0 flex items-center justify-center text-2xl md:text-4xl font-bold text-amber-600 mt-8">
            Page Not Found
          </p>
        </motion.div>

        {/* Quran Verse Injection */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white/30 p-6 rounded-2xl shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] max-w-lg"
        >
          {ayah ? (
            <>
              <p className="text-xl md:text-2xl text-[#444] font-serif italic mb-2">
                "{ayah.text}"
              </p>
              <p className="text-sm font-bold text-amber-700 uppercase tracking-widest">
                — {ayah.ref}
              </p>
            </>
          ) : (
            <p className="text-gray-400 italic">Finding the path...</p>
          )}
        </motion.div>

        {/* Message Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[#333]">
            Lost in the Code?
          </h2>
          <p className="text-[#555] text-lg max-w-md mx-auto">
            The page you are looking for has vanished, but guidance is always near.
          </p>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-amber-500 text-white font-bold 
                         shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
                         transition-all duration-300 hover:bg-amber-600"
            >
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}