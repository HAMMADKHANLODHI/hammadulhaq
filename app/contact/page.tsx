"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FC } from "react";

const contact: FC = () => {
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
        CONTACT
      </motion.h1>
      <motion.h1
        className="text-4xl font-semibold text-gray-600 mt-[1rem]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get In Touch
      </motion.h1>

      {/* Cards Container */}
      <motion.div
        className="w-full justify-around flex flex-wrap"
        variants={containerVariants}
      >
        {/* Web Development */}
        <motion.a
          href="https://wa.me/923110599159"
          target="_blank"
          rel="noopener noreferrer"
          variants={cardVariants}
          className="md:w-[30%] w-[90%] mt-[2rem] h-[14rem] flex-col bg-[#EFF0F4] text-amber-500 rounded-2xl flex items-center font-semibold tracking-wide shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] transition-all duration-300 ease-out hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] hover:scale-[0.98] active:scale-[0.96]"
        >
          <div className="w-[4rem] h-[4rem] bg-[#EFF0F4] text-amber-500 rounded-full mt-[2rem] flex justify-center items-center shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
            <Image src={"/whatapp.svg"} alt="WhatsApp" width={30} height={30} />
          </div>
          <h1 className="text-black text-2xl mt-[2rem]">WhatsApp</h1>
          <p className="text-gray-600 font-extralight m-[0.5rem]">
            +92 311 0599159
          </p>
        </motion.a>


        <motion.a
          href="mailto:hammadulhalodhi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          variants={cardVariants}
          className="md:w-[30%] w-[90%] mt-[2rem] h-[14rem] flex-col bg-[#EFF0F4] text-amber-500 rounded-2xl flex items-center font-semibold tracking-wide shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] transition-all duration-300 ease-out hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] hover:scale-[0.98] active:scale-[0.96]"
        >
          <div className="w-[4rem] h-[4rem] bg-[#EFF0F4] text-amber-500 rounded-full mt-[2rem] flex justify-center items-center shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
            <Image src={"/gmail.svg"} alt="Gmail" width={30} height={30} />
          </div>
          <h1 className="text-black text-2xl mt-[2rem]">Gmail</h1>
          <p className="text-gray-600 font-extralight m-[0.5rem]">
            hammadulhalodhi@gmail.com
          </p>
        </motion.a>


        {/* Back-End Development */}
        <motion.a
          href="https://maps.app.goo.gl/XVZJ2c6wZuj6Mc229"
          target="_blank"
          rel="noopener noreferrer"
          variants={cardVariants}
          className="md:w-[30%] w-[90%] mt-[2rem] h-[14rem] flex-col bg-[#EFF0F4] text-amber-500 rounded-2xl flex items-center font-semibold tracking-wide shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] transition-all duration-300 ease-out hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] hover:scale-[0.98] active:scale-[0.96]"
        >
          <div className="w-[4rem] h-[4rem] bg-[#EFF0F4] text-amber-500 rounded-full mt-[2rem] flex justify-center items-center shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
            <Image src={"/address.svg"} alt="Address" width={30} height={30} />
          </div>
          <h1 className="text-black text-2xl mt-[2rem]">Location</h1>
          <p className="text-gray-600 font-extralight m-[0.5rem]">
            Lahore, Pakistan
          </p>
        </motion.a>



      </motion.div>
      <motion.div
        variants={cardVariants}
        className="md:w-[90%] w-[95%] mt-[2rem] p-6 bg-[#EFF0F4] text-amber-500 rounded-2xl flex flex-col items-center font-semibold tracking-wide shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] transition-all duration-300 ease-out hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] hover:scale-[0.98] active:scale-[0.96]"
      >
      

        <form className="w-full flex h-[20rem] flex-col gap-4">
          <div className="w-full justify-around h-full flex ">
            <div className="md:w-[45%] w-[43%] min-h-full flex flex-col justify-around "><input
              type="text"
              placeholder="Your Name"
              className="md:w-[100%] w-[90%] h-[20%] flex-col bg-[#EFF0F4] text-gray-800 font-extralight rounded-2xl flex items-center  tracking-wide shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] transition-all duration-300 ease-out hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] hover:scale-[0.98] active:scale-[0.96]"
              required
            />

              {/* Email */}
              <input
                type="email"
                placeholder="Your Email"
                className="md:w-[100%] w-[90%] h-[20%] flex-col bg-[#EFF0F4] text-gray-800 font-extralight rounded-2xl flex items-center tracking-wide shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] transition-all duration-300 ease-out hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] hover:scale-[0.98] active:scale-[0.96]"
                required
              />

              {/* Subject */}
              <input
                type="text"
                placeholder="Subject"
                className="md:w-[100%] w-[90%] h-[20%] flex-col bg-[#EFF0F4] text-gray-800 font-extralight rounded-2xl flex items-center  tracking-wide shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] transition-all duration-300 ease-out hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] hover:scale-[0.98] active:scale-[0.96]"
                required
              /></div>
            {/* Name */}


            {/* Message */}
            <textarea
              placeholder="Your Message"
              rows={5}
              className="md:w-[45%]  w-[43%] h-[100%] flex-col bg-[#EFF0F4] text-gray-800 font-extralight rounded-2xl flex items-center tracking-wide shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] transition-all duration-300 ease-out hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] hover:scale-[0.98] active:scale-[0.96]"
              required
            ></textarea>
          </div>


          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="md:w-[20%]  h-[3rem] bg-amber-500 text-white  rounded-xl shadow-md hover:bg-amber-600 transition-all"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

    </motion.div>
  );
};

export default contact;
