"use client";

import { motion } from "framer-motion";

export default function JumpingDots() {
  return (
    <div className="flex space-x-1">
      {[0, 1, 2].map((dot) => (
        <motion.span
          key={dot}
          className="w-2 h-2 bg-gray-700 rounded-full"
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.6,
            delay: dot * 0.2,
          }}
        />
      ))}
    </div>
  );
}
