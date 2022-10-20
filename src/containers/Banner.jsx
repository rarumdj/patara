import React from "react";
import { apple_store } from "../assets/images";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      className="py-24 px-6 lg:px-16 flex justify-center">
      <div className="container w-full rounded-2xl p-10 bg-banner flex md:flex-row flex-col justify-between items-center">
        <div className="space-y-4">
          <h1 className="md:text-4xl text-2xl font-bold text-white">
            Coming soon on <br />
            <span className="font-medium">App Store and play store</span>
          </h1>
          <div className="flex gap-4 md:w-fit w-24">
            <img src={apple_store} alt="" className="" />
            <img src={apple_store} alt="" className="" />
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:w-fit h-fit md:items-center md:space-x-6 md:mt-0 mt-10">
          <input
            type="text"
            placeholder="Enter Email"
            className="bg-transparent border-b outline-none focus:outline-none text-white md:w-80 border-white border-opacity-50 placeholder:text-white p-1"
          />
          <button className=" md:mt-0 mt-5 py-3 px-4 rounded-2xl md:text-base text-xs font-bold text-center text-white bg-orange-400">
            JOIN WAITLIST
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Banner;
