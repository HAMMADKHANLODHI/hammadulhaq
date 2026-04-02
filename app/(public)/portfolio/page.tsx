"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FC } from "react";
import Link from "next/link";
import { sendGAEvent } from '@next/third-parties/google'; // ✅ Strength: Analytics

// ✅ Correct way to animate Next.js Link
const MotionLink = motion(Link);

// ✅ Type Safety for your projects
interface ProjectItem {
  id: number;
  title: string;
  img: string;
  link: string;
}

const Portfolio: FC = () => { // Changed name from 'Contact' to 'Portfolio' for clarity
  const projects: ProjectItem[] = [
    { id: 1, title: "SMART VIDEO INSIGHT", img: "/project-porfolio.png", link: "https://github.com/HAMMADKHANLODHI/SMART-VIDEO-INSIGHT-FYP"},
    { id: 2, title: "PLEXUS AI", img: "/project-porfolio.png", link: "https://github.com/HAMMADKHANLODHI/plexus-ai" },
    { id: 3, title: "MINGO CHAT APP", img: "/project-porfolio.png", link: "https://github.com/HAMMADKHANLODHI/mingo" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="w-full min-h-screen flex flex-col items-center bg-[#EFF0F4] py-16 px-4"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <motion.span className="text-amber-600 text-xl font-medium tracking-widest">PORTFOLIO</motion.span>
      <motion.h2 className="text-3xl md:text-4xl font-semibold text-gray-600 mt-3 mb-10 text-center">LATEST WORKS</motion.h2>

      <motion.div 
        className="w-full sm:w-[90%] flex flex-wrap justify-center gap-8"
        variants={containerVariants}
      >
        {projects.map((item) => (
          <MotionLink
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={item.id}
            variants={cardVariants}
            // ✅ Track which project recruiters are clicking on
            onClick={() => sendGAEvent('event', 'portfolio_view', { project_name: item.title })}
            className="group w-full sm:w-[45%] md:w-[30%] lg:w-[18rem] p-4 bg-[#EFF0F4] rounded-3xl 
                       shadow-[9px_9px_16px_#bebebe,-9px_-9px_16px_#ffffff] 
                       hover:shadow-[inset_4px_4px_10px_#bebebe,inset_-4px_-4px_10px_#ffffff] 
                       transition-all duration-300"
          >
            <div className="relative w-full h-[12rem] overflow-hidden rounded-2xl mb-4">
              <Image
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                alt={item.title}
                src={item.img}
                fill
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
            </div>
            
            <h3 className="text-gray-700 font-bold text-lg mb-1">{item.title}</h3>
            <p className="text-amber-600 text-sm font-semibold">View Case Study →</p>
          </MotionLink>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;