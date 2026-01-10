"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FC, useState, ChangeEvent, FormEvent } from "react";

const Contact: FC = () => {
  // ✅ Contact form state
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  // ✅ Input and textarea change handler
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Submit handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setLoading(true);
    setStatus(null);


  

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus(data.error || "Something went wrong!");
      } else {
        setStatus("✅ Message sent successfully!");
        try {
    const res = await fetch("/api/mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });

    const data = await res.json();
    if (data.success) alert("✅ Message sent successfully!");
    else alert("❌ Failed to send message: " + data.error);
  } catch (err) {
    console.error("Error submitting form:", err);
    alert("❌ Something went wrong. Please try again later.");
  }
        setContact({ name: "", email: "", subject: "", message: "" });

      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("❌ Server error, please try again.");
      
    } finally {
      setLoading(false);
    }
  };

  // ✅ Animation variants
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
        className="text-4xl font-semibold text-gray-600 mt-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get In Touch
      </motion.h1>

      {/* Contact Info Cards */}
      <motion.div
        className="w-full justify-around flex flex-wrap"
        variants={containerVariants}
      >
        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/923110599159"
          target="_blank"
          rel="noopener noreferrer"
          variants={cardVariants}
          className="md:w-[30%] w-[90%] mt-8 h-[14rem] flex-col bg-[#EFF0F4] text-amber-500 rounded-2xl flex items-center font-semibold tracking-wide shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] transition-all duration-300 ease-out hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] hover:scale-[0.98] active:scale-[0.96]"
        >
          <div className="w-[4rem] h-[4rem] bg-[#EFF0F4] text-amber-500 rounded-full mt-8 flex justify-center items-center shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
            <Image src="/whatapp.svg" alt="WhatsApp" width={30} height={30} />
          </div>
          <h1 className="text-black text-2xl mt-6">WhatsApp</h1>
          <p className="text-gray-600 font-extralight mt-2">+92 311 0599159</p>
        </motion.a>

        {/* Gmail */}
        <motion.a
          href="mailto:hammadulhalodhi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          variants={cardVariants}
          className="md:w-[30%] w-[90%] mt-8 h-[14rem] flex-col bg-[#EFF0F4] text-amber-500 rounded-2xl flex items-center font-semibold tracking-wide shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] transition-all duration-300 ease-out hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] hover:scale-[0.98] active:scale-[0.96]"
        >
          <div className="w-[4rem] h-[4rem] bg-[#EFF0F4] text-amber-500 rounded-full mt-8 flex justify-center items-center shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
            <Image src="/gmail.svg" alt="Gmail" width={30} height={30} />
          </div>
          <h1 className="text-black text-2xl mt-6">Gmail</h1>
          <p className="text-gray-600 font-extralight mt-2">
            hammadulhaqlodhi@gmail.com
          </p>
        </motion.a>

        {/* Location */}
        <motion.a
          href="https://maps.app.goo.gl/XVZJ2c6wZuj6Mc229"
          target="_blank"
          rel="noopener noreferrer"
          variants={cardVariants}
          className="md:w-[30%] w-[90%] mt-8 h-[14rem] flex-col bg-[#EFF0F4] text-amber-500 rounded-2xl flex items-center font-semibold tracking-wide shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] transition-all duration-300 ease-out hover:shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff] hover:scale-[0.98] active:scale-[0.96]"
        >
          <div className="w-[4rem] h-[4rem] bg-[#EFF0F4] text-amber-500 rounded-full mt-8 flex justify-center items-center shadow-[inset_2px_2px_9px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
            <Image src="/address.svg" alt="Address" width={30} height={30} />
          </div>
          <h1 className="text-black text-2xl mt-6">Location</h1>
          <p className="text-gray-600 font-extralight mt-2">Lahore, Pakistan</p>
        </motion.a>
      </motion.div>

      {/* ✅ Contact Form */}
      <motion.div
        variants={cardVariants}
        className="md:w-[90%] w-[95%] mt-8 p-6 bg-[#EFF0F4] text-amber-500 rounded-2xl flex flex-col items-center font-semibold tracking-wide shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] transition-all duration-300 ease-out"
      >
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="w-full flex flex-col md:flex-row justify-between gap-4">
            <div className="flex flex-col md:w-1/2 gap-4">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={contact.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-[#EFF0F4] text-gray-800 rounded-2xl shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] focus:outline-none"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={contact.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-[#EFF0F4] text-gray-800 rounded-2xl shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] focus:outline-none"
              />
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                value={contact.subject}
                onChange={handleChange}
                required
                className="w-full p-3 bg-[#EFF0F4] text-gray-800 rounded-2xl shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] focus:outline-none"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              value={contact.message}
              onChange={handleChange}
              required
              className="w-full md:w-1/2 p-3 bg-[#EFF0F4] text-gray-800 rounded-2xl shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] focus:outline-none"
              rows={6}
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="mt-6 md:w-[20%] h-[3rem] bg-amber-500 text-white rounded-xl shadow-md hover:bg-amber-600 transition-all"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>

        {status && (
          
          <div className="mt-4 flex justify-center items-center">
          <Image
      src="/alert.svg"
      width={20}
      height={20}
      alt="Picture of the author"
    />
          <p className="ml-2  text-center text-red-700 font-medium">{status}</p>
        </div>
        
        )}
      </motion.div>
    </motion.div>
  );
};

export default Contact;
