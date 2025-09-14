"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FC } from "react";

const Services: FC = () => {
  // ✅ Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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
      className="w-full min-h-screen flex flex-col items-center bg-[#EFF0F4] py-20 px-4 text-amber-600"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {/* Headings */}
      <motion.h1
        className="text-2xl font-medium"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Services
      </motion.h1>
      <motion.h1
        className="text-4xl font-semibold text-gray-600 mt-[1rem]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        What I Do
      </motion.h1>

      {/* Cards Container */}
      <motion.div
        className="w-full justify-around flex flex-wrap"
        variants={containerVariants}
      >
        {/* Web Development */}
        <motion.div variants={cardVariants} className="md:w-[30%] w-[90%] mt-[2rem] h-[28rem] flex-col bg-[#EFF0F4] text-amber-500 rounded-2xl flex items-center font-semibold tracking-wide shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] transition-all duration-300 ease-out hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] hover:scale-[0.98] active:scale-[0.96]">
          <div className=" w-[4rem] h-[4rem] bg-[#EFF0F4] text-amber-500 rounded-full mt-[2rem] flex justify-center items-center shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
            <Image src={"/website.svg"} alt="web development" width={30} height={30} />
          </div>
          <h1 className="text-black text-2xl mt-[2rem]">Web Development</h1>
          <p className="text-gray-600 font-extralight m-[0.5rem]">
            I specialize in modern web development using cutting-edge frameworks such
            as Next.js, React, Express, and Node.js along with strong fundamentals in
            HTML5, CSS3, and JavaScript. From building responsive landing pages to
            developing scalable full-stack applications, I focus on delivering fast,
            secure, and SEO-optimized websites that create a smooth user experience.
          </p>
        </motion.div>

        {/* Front-End Development */}
        <motion.div variants={cardVariants} className="md:w-[30%] w-[90%] mt-[2rem] h-[28rem] flex-col bg-[#EFF0F4] text-amber-500 rounded-2xl flex items-center font-semibold tracking-wide shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] transition-all duration-300 ease-out hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] hover:scale-[0.98] active:scale-[0.96]">
          <div className=" w-[4rem] h-[4rem] bg-[#EFF0F4] text-amber-500 rounded-full mt-[2rem] flex justify-center items-center shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
            <Image src={"/frontend.svg"} alt="front end" width={30} height={30} />
          </div>
          <h1 className="text-black text-2xl mt-[2rem]">Front-End Development</h1>
          <p className="text-gray-600 font-extralight m-[0.5rem]">
            With expertise in React, Next.js, and Tailwind CSS, I design interactive,
            user-friendly, and mobile-responsive interfaces. My goal is to combine clean
            UI with excellent performance, ensuring that websites are not only visually
            appealing but also accessible and optimized for speed & SEO.
          </p>
        </motion.div>

        {/* Back-End Development */}
        <motion.div variants={cardVariants} className="md:w-[30%] w-[90%] mt-[2rem] h-[28rem] flex-col bg-[#EFF0F4] text-amber-500 rounded-2xl flex items-center font-semibold tracking-wide shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] transition-all duration-300 ease-out hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] hover:scale-[0.98] active:scale-[0.96]">
          <div className=" w-[4rem] h-[4rem] bg-[#EFF0F4] text-amber-500 rounded-full mt-[2rem] flex justify-center items-center shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
            <Image src={"/code.svg"} alt="backend development" width={30} height={30} />
          </div>
          <h1 className="text-black text-2xl mt-[2rem]">Back-End Development</h1>
          <p className="text-gray-600 font-extralight m-[0.5rem]">
            I develop robust server-side applications using Node.js, Express, and
            MongoDB/PostgreSQL. My backend solutions ensure secure authentication,
            efficient data management, and smooth API integrations, enabling businesses
            to scale while maintaining high performance and security.
          </p>
        </motion.div>

        {/* Desktop Application */}
        <motion.div variants={cardVariants} className="md:w-[30%] w-[90%] mt-[2rem] h-[28rem] flex-col bg-[#EFF0F4] text-amber-500 rounded-2xl flex items-center font-semibold tracking-wide shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] transition-all duration-300 ease-out hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] hover:scale-[0.98] active:scale-[0.96]">
          <div className=" w-[4rem] h-[4rem] bg-[#EFF0F4] text-amber-500 rounded-full mt-[2rem] flex justify-center items-center shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
            <Image src={"/destop.svg"} alt="desktop app" width={30} height={30} />
          </div>
          <h1 className="text-black text-2xl mt-[2rem]">Desktop Application</h1>
          <p className="text-gray-600 font-extralight m-[0.5rem]">
            I create cross-platform desktop applications using Electron.js combined with
            Next.js and Node.js. These apps offer the power of web technologies with the
            performance of native desktop software, providing custom solutions for
            businesses and individuals.
          </p>
        </motion.div>

        {/* API Development & Integration */}
        <motion.div variants={cardVariants} className="md:w-[30%] w-[90%] mt-[2rem] h-[28rem] flex-col bg-[#EFF0F4] text-amber-500 rounded-2xl flex items-center font-semibold tracking-wide shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] transition-all duration-300 ease-out hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] hover:scale-[0.98] active:scale-[0.96]">
          <div className=" w-[4rem] h-[4rem] bg-[#EFF0F4] text-amber-500 rounded-full mt-[2rem] flex justify-center items-center shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
            <Image src={"/api.svg"} alt="api development" width={30} height={30} />
          </div>
          <h1 className="text-black text-2xl mt-[2rem]">API Development & Integration</h1>
          <p className="text-gray-600 font-extralight m-[0.5rem]">
            I design and implement RESTful and GraphQL APIs for smooth communication
            between different systems. My integrations include third-party APIs (payment
            gateways, social logins, cloud services) and custom APIs to ensure
            scalability, flexibility, and reliability.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
