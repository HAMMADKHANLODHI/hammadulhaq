"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Matching your profile's styling variables
  const cardBg = "bg-white p-8 rounded-3xl border border-amber-100 shadow-sm";
  const accentText = "text-amber-600 font-black uppercase tracking-widest";

  return (
    <main className="min-h-screen bg-amber-50 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full text-center space-y-8">
        
        {/* Visual 404 Header */}
        <div className="relative">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[120px] md:text-[200px] font-black text-amber-100 leading-none select-none"
          >
            404
          </motion.h1>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute inset-0 flex items-center justify-center mt-10"
          >
            <h2 className="text-3xl md:text-5xl font-black text-amber-950 uppercase tracking-tighter">
              Page Not Found
            </h2>
          </motion.div>
        </div>

        {/* Message Card - Matching your Summary Section style */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={cardBg}
        >
          <div className="space-y-4">
            <span className={accentText}>Status: Terminal Error</span>
            <p className="text-amber-900 text-lg leading-relaxed italic">
              "The requested URL does not exist in this directory. It may have been moved, or the link might be broken."
            </p>
          </div>
        </motion.section>

        {/* Action Buttons - Matching your Profile's CTA style */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-xl bg-amber-950 text-amber-400 font-black uppercase tracking-wider shadow-xl hover:bg-black transition-colors"
            >
              Back to Home
            </motion.button>
          </Link>

          <button 
            onClick={() => window.history.back()}
            className="text-amber-700 font-bold border-b-2 border-amber-300 hover:border-amber-600 transition-all pb-1 uppercase tracking-widest text-sm"
          >
            Go Back
          </button>
        </motion.div>

        {/* Footer Detail - Matching your minimalist footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1 }}
          className="pt-12"
        >
          <p className="text-xs font-bold text-amber-400 uppercase tracking-[0.3em]">
            System Trace Complete // Code 404
          </p>
        </motion.footer>
      </div>
    </main>
  );
}