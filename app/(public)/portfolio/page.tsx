"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FC } from "react";

const Contact: FC = () => {
  // ✅ Container animation (staggered children)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // ✅ Card fade-up animation
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="w-full min-h-screen flex flex-col items-center bg-[#EFF0F4] py-16 px-4 text-amber-600"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {/* ✅ Section Headings */}
      <motion.h1
        className="text-xl md:text-2xl font-medium"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        PORTFOLIO
      </motion.h1>

      <motion.h1
        className="text-3xl md:text-4xl font-semibold text-gray-600 mt-3 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        LATEST WORKS
      </motion.h1>

      {/* ✅ Category Button */}
      <div className="mt-4 flex flex-wrap justify-center">
        <div
          className="bg-[#EFF0F4] text-amber-500 rounded-2xl px-6 py-3 mr-2 mb-2
          flex justify-center items-center font-semibold tracking-wide
          shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]
          transition-all duration-300 ease-out
          hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff]
          hover:scale-[0.98] active:scale-[0.96]"
        >
          Portfolio
        </div>
      </div>

      {/* ✅ Portfolio Grid */}
      <motion.div
        className="w-full sm:w-[90%] mt-6 flex flex-wrap justify-center gap-6"
        variants={containerVariants}
      >
        {[
          { id: 1, title: "Basic Portfolio", img: "/hammad.jpeg" },
          { id: 2, title: "Creative Agency", img: "/hammad.jpeg" },
          { id: 3, title: "E-commerce UI", img: "/hammad.jpeg" },
        ].map((item) => (
          <motion.div
            key={item.id}
            className="w-[90%] sm:w-[45%] md:w-[30%] lg:w-[15rem] h-[12rem]
              flex flex-col justify-around items-center bg-[#EFF0F4]
              text-amber-500 rounded-2xl font-semibold tracking-wide
              shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]
              transition-all duration-300 ease-out
              hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff]
              hover:scale-[0.98] active:scale-[0.96]"
            variants={cardVariants}
          >
            <div className="w-[90%] h-[70%] relative flex justify-center">
              
                <Image
                  className="rounded-2xl z-30 hover:-translate-y-10 transition-transform duration-300 ease-in-out"
                  alt={item.title}
                  src={item.img}
                  fill
                />
              
              <motion.h4
                className="text-amber-600 absolute bottom-0  px-3 py-1 rounded-lg text-sm font-medium"
                
              >
                View Project
              </motion.h4>
            </div>
            <h1 className="w-[90%] text-center text-gray-600 text-sm md:text-base font-medium">
              {item.title}
            </h1>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Contact;
