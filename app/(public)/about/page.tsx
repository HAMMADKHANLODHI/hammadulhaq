"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FC } from "react";

import { useState } from "react";
import Link from "next/link";
const About: FC = () => {
  const [showskill, setshowskill] = useState(true);
  const showskills = () => {
    setshowskill(true);
    setshowExperience(false);
    console.log("The skill is ", showskill)
  }
  const [showExperience, setshowExperience] = useState(false);
  const showExperiences = () => {
    setshowExperience(true);
    setshowskill(false);
    setshowEducation(false);
    console.log("The Experience is ", showExperience)
  }
  const [showEducation, setshowEducation] = useState(false);
  const showEducations = () => {
    setshowEducation(true);
    setshowExperience(false);
    setshowskill(false);
    console.log("The Experience is ", showExperience)
  }





  return (
    <div className=" w-full  min-h-screen min-w-screen flex flex-col justify-center items-center bg-[#EFF0F4] py-20 px-4">
      <div className="w-full max-w-6xl flex flex-col items-center">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-[#333] mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>

        {/* Main Content */}
        <div className="w-full flex flex-col md:flex-row gap-8">
          {/* Profile Image Section */}
          <div className="md:w-[40%] flex flex-col items-center gap-4">
            <div className="bg-[#EFF0F4] w-full flex justify-center items-center rounded-3xl aspect-square shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] transition-all duration-300">
              <div className="relative w-[90%] h-[90%] rounded-3xl overflow-hidden shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[4px_4px_12px_#bebebe,-4px_-4px_12px_#ffffff] hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out">
                <Image
                  src="/hammad.jpeg"
                  alt="Profile Image"
                  fill
                  priority
                  className="object-cover rounded-3xl transition-all duration-500 ease-out
             hover:scale-105 hover:brightness-110 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
                />

              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/hammad-ul-haq-07b62a357/"
                target="_blank"
                rel="noopener noreferrer"
                className=" rounded-full w-12 h-12 bg-[#EFF0F4] text-amber-500
             flex justify-center items-center font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out
             hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#0A66C2]"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.1 3.77-2.1 4.03 0 4.78 2.65 4.78 6.1V24h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.7-2.53 3.46V24h-4V8z" />
                </svg>
              </a>

              {/* GitHub */}
              <Link
                href="https://github.com/HAMMADKHANLODHI"
                target="_blank"
                rel="noopener noreferrer"
                className=" rounded-full w-12 h-12 bg-[#EFF0F4] text-amber-500
             flex justify-center items-center font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out
             hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-[#333]"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.3-5.467-1.335-5.467-5.933 0-1.31.468-2.382 1.236-3.222-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.45 11.45 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.288-1.552 3.294-1.23 3.294-1.23.656 1.653.243 2.873.12 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.807 5.628-5.48 5.922.43.37.814 1.102.814 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* About Text Section */}
          <div className="md:w-[60%] flex flex-col justify-center items-start gap-6">
            <motion.p
              className="text-[#555] text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Hello! I'm <span className="font-bold">Hammad Ul Haq</span>, a
              passionate MERN and Full-Stack JavaScript Developer. I specialize
              in building modern, responsive web applications using{" "}
              <span className="font-semibold">
                React.js, Next.js, Node.js, Express.js, and MongoDB
              </span>
              . I love creating interactive user interfaces and smooth
              animations that bring websites to life. My goal is to write clean,
              maintainable code while delivering an amazing user experience.
            </motion.p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a
                href="/Mern-stack-resume-hammad.pdf"
                download
                className="bg-[#EFF0F4] text-amber-500 rounded-2xl px-6 py-3
             flex justify-center items-center font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out
             hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96]"
              >
                Download CV
              </a>

              <a
                href="mailto:hammadulhaqlodhi@gmail.com"
                className="bg-[#EFF0F4] text-amber-500 rounded-2xl px-6 py-3
             flex justify-center items-center font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out
             hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96]"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>

      </div>
      <div className="flex w-[70%] mt-[3rem] justify-around ">
        <div
          onClick={showskills}

          className="bg-[#EFF0F4] text-amber-500 rounded-2xl px-6 py-3
             flex justify-center items-center font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out
             hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96]"
        >
          Skills
        </div>
        <div
          onClick={showExperiences}

          className="bg-[#EFF0F4] text-amber-500 rounded-2xl px-6 py-3
             flex justify-center items-center font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out
             hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96]"
        >
          Experience
        </div>
        <div
          onClick={showEducations}
          className="bg-[#EFF0F4] text-amber-500 rounded-2xl px-6 py-3
             flex justify-center items-center font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out
             hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96]"
        >
          Education
        </div>
      </div>
      <div className={`w-[80%] ${showskill ? "" : "hidden"} mt-[2rem] justify-between flex flex-wrap`}>
        <div className="w-[45%] mt-[1rem]">
          <div className="flex justify-between">
            <h1 className=" text-amber-400 font-semibold">HTML</h1>
            <h1 className=" text-amber-400 font-semibold">78%</h1>
          </div>

          <div className=" * w-[95%]  h-[1rem] bg-[#EFF0F4] text-amber-500 rounded-2xl 
             flex  items-center font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out
             hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96] ">
            <div className=" w-[78%] ml-[3%] h-[40%] bg-gray-600 rounded-full  "></div>
          </div>
        </div>
        <div className="w-[45%] mt-[1rem]">
          <div className="flex justify-between">
            <h1 className=" text-amber-400 font-semibold">HTML</h1>
            <h1 className=" text-amber-400 font-semibold">78%</h1>
          </div>

          <div className=" * w-[95%]  h-[1rem] bg-[#EFF0F4] text-amber-500 rounded-2xl 
             flex  items-center font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out
             hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96] ">
            <div className=" w-[78%] ml-[3%] h-[40%] bg-gray-600 rounded-full  "></div>
          </div>
        </div>
        <div className="w-[45%] mt-[1rem]">
          <div className="flex justify-between">
            <h1 className=" text-amber-400 font-semibold">HTML</h1>
            <h1 className=" text-amber-400 font-semibold">78%</h1>
          </div>

          <div className=" * w-[95%]  h-[1rem] bg-[#EFF0F4] text-amber-500 rounded-2xl 
             flex  items-center font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out
             hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96] ">
            <div className=" w-[78%] ml-[3%] h-[40%] bg-gray-600 rounded-full  "></div>
          </div>
        </div>


      </div>
      <div className={`w-[90%] ${showExperience ? "" : "hidden"} relative mt-[2rem] justify-between items-center flex flex-wrap`}>
        <div className="w-[1px] h-[90%] absolute ml-[1.5rem] bg-gray-300"></div>
        <div className=" mt-[3rem] flex items-start relative justify-between w-full ">
          <div className="z-50 w-[3rem] relative h-[3rem] bg-[#EFF0F4] text-amber-500 rounded-full 
             flex justify-center items-center font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out
             hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96]">
            <Image src={"/work.svg"}
              alt="education "
              width={30}
              height={10}
              className="" />


          </div>
          <div className="w-[90%] absolute mt-[1.5rem] bg-gray-300 h-[1px]"></div>
          <div className=" w-[90%] z-50 bg-[#EFF0F4] text-amber-500 rounded-2xl px-6 py-3
             flex font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out flex-col
             hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96]">
            <h3 className="text-amber-600 font-light ">July 2025 - Aug 2025</h3>
            <h1 className="text-black font-extrabold">SMART VIDEO INSIGHT</h1>
            <p className="text-gray-600 font-extralight">Smart Video Insight is an AI-powered web platform that transforms video content into accessible, searchable, and multilingual resources. Built with React, Next.js, Django, and MongoDB, the system automatically transcribes speech into text, translates content into multiple languages, generates concise AI summaries, and extracts valuable metadata such as keywords and timestamps. By making videos easy to search, understand, and share, Smart Video Insight enhances accessibility, saves time, and helps users unlock deeper insights from their video libraries.</p>




          </div>
        </div>


      </div>
      <div className={`w-[90%] ${showEducation ? "" : "hidden"} relative mt-[2rem] justify-between items-center flex flex-wrap`}>
        <div className="w-[1px] h-[90%] absolute ml-[1.5rem] bg-gray-300"></div>
        <div className=" mt-[3rem]  flex items-start relative justify-between w-full ">
          <div className="z-50 w-[3rem] relative h-[3rem] bg-[#EFF0F4] text-amber-500 rounded-full 
             flex justify-center items-center font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out
             hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96]">
            <Image src={"/work.svg"}
              alt="education "
              width={30}
              height={10}
              className="" />


          </div>
          <div className="w-[90%] absolute mt-[1.5rem] bg-gray-300 h-[1px]"></div>
          <div className=" w-[90%] z-50 bg-[#EFF0F4] text-amber-500 rounded-2xl px-6 py-3
             flex font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out flex-col
             hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96]">
            <h3 className="text-amber-600 font-light ">2017 - 2018</h3>
            <h1 className="text-black font-extrabold">AL FAREED SCHOOL</h1>
            <p className="text-gray-600 font-extralight">I completed my Matriculation in Science from Zakariya Public School, Pakpattan, with an A+ grade, securing an impressive 914 out of 1100 marks. This achievement highlights my strong academic performance, dedication to excellence, and commitment to continuous learning. My time at Zakariya Public School not only strengthened my knowledge in core subjects but also nurtured qualities such as discipline, problem-solving, and a growth-oriented mindset.</p>




          </div>
          
        </div>
        <div className=" mt-[3rem] flex items-start relative justify-between w-full ">
          <div className="z-50 w-[3rem] relative h-[3rem] bg-[#EFF0F4] text-amber-500 rounded-full 
             flex justify-center items-center font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out
             hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96]">
            <Image src={"/work.svg"}
              alt="education "
              width={30}
              height={10}
              className="" />


          </div>
          <div className="w-[90%] absolute mt-[1.5rem] bg-gray-300 h-[1px]"></div>
          <div className=" w-[90%] z-50 bg-[#EFF0F4] text-amber-500 rounded-2xl px-6 py-3
             flex font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out flex-col
             hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96]">
            <h3 className="text-amber-600 font-light ">2019 - 2020</h3>
            <h1 className="text-black font-extrabold">Concordia College, Sahiwal</h1>
            <p className="text-gray-600 font-extralight">I pursued my Intermediate in FSc Pre-Engineering from Concordia College, Sahiwal, where I earned an A grade with 815 out of 1100 marks. This academic milestone reflects my strong grasp of mathematics, physics, and chemistry, along with a disciplined approach to problem-solving and analytical thinking. My studies at Concordia College laid a solid foundation for my passion for technology and engineering, while also strengthening my ability to adapt, collaborate, and strive for continuous improvement.</p>




          </div>
          
        </div>
        <div className=" mt-[3rem] flex items-start relative justify-between w-full ">
          <div className="z-50 w-[3rem] relative h-[3rem] bg-[#EFF0F4] text-amber-500 rounded-full 
             flex justify-center items-center font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out
             hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96]">
            <Image src={"/work.svg"}
              alt="education "
              width={30}
              height={10}
              className="" />


          </div>
          <div className="w-[90%] absolute mt-[1.5rem] bg-gray-300 h-[1px]"></div>
          <div className=" w-[90%] z-50 bg-[#EFF0F4] text-amber-500 rounded-2xl px-6 py-3
             flex font-semibold tracking-wide
             shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] 
             transition-all duration-300 ease-out flex-col
             hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] 
             hover:scale-[0.98] active:scale-[0.96]">
            <h3 className="text-amber-600 font-light ">2021 - 2025</h3>
            <h1 className="text-black font-extrabold">University of Central Punjab
</h1>
            <p className="text-gray-600 font-extralight">I completed my Bachelor of Science in Software Engineering (BSSE) from the University of Central Punjab (UCP), Lahore, a prestigious institution recognized for its academic excellence and commitment to innovation. With a strong foundation in programming, software engineering, databases, computer networks, and modern development practices, I graduated with a 3.00 CGPA after completing 134 credit hours. My journey at UCP not only equipped me with technical expertise but also nurtured essential soft skills such as teamwork, communication, and project management.</p>




          </div>
          
        </div>


      </div>




    </div>
  );
};

export default About;
