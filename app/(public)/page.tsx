"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center bg-[#EFF0F4] px-4">
      {/* Hero Section */}
      <section className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between py-20">
        {/* Left Content */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#333] leading-tight">
            Hi, I’m <span className="text-amber-600">Hammad Ul Haq</span>
          </h1>
          <p className="text-lg md:text-xl text-[#555] leading-relaxed">
            A passionate <span className="font-semibold">Full-Stack JavaScript Developer</span> 
            specializing in building modern, scalable, and interactive web applications
            using <span className="font-semibold">MERN & Next.js</span>.
          </p>

          <div className="flex space-x-4 mt-4">
            <motion.a
              href="/about"
              whileHover={{ scale: 1.05, y: -3 }}
              className="px-6 py-3 rounded-xl bg-amber-500 text-white font-semibold 
                         shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
                         transition-all duration-300"
            >
              About Me
            </motion.a>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -3 }}
              className="px-6 py-3 rounded-xl bg-[#EFF0F4] text-[#333] font-semibold 
                         shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
                         hover:shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] 
                         transition-all duration-300"
            >
              Hire Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content (Profile Image) */}
        <motion.div
          className="relative w-64 h-64 md:w-96 md:h-96 mb-12 md:mb-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-[#EFF0F4] w-full h-full rounded-full flex justify-center items-center shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff]">
            <div className="relative w-[90%] h-[90%] rounded-full overflow-hidden shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:scale-105 transition-transform duration-300">
              <Image
                src="/hammad.jpeg"
                alt="Hammad Ul Haq"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="w-full max-w-6xl py-16 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#333] mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Expertise
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["React.js", "Next.js", "Node.js", "MongoDB"].map((skill, i) => (
            <motion.div
              key={skill}
              className="bg-[#EFF0F4] rounded-xl py-6 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="font-semibold text-lg text-[#333]">{skill}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
