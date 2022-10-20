import React from "react";
import { crypto, hide, money, money_bill, payment, secured } from "../../assets/images";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
    variants={{
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 50 },
    }} className=" px-6 lg:px-16 flex justify-center">
      <div className="container md:px-24 px-8 pb-12 text-neutral pt-12 md:pb-24  md:pt-16  mx-auto bg-[#2FBCB34D] bg-opacity-30 rounded-2xl">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4">
            Our services
          </h1>
        </div>
        <div className="grid md:grid-cols-3 md:gap-8 gap-16">
          <div className="p-8 flex flex-col text-center items-center bg-white shadow-md rounded-2xl shadow-gray-500/10 relative">
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-16 p-3 md:w-16 md:h-16 w-14 bg-[#17575461] bg-opacity-40 h-14 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
              <img src={money} alt="" />
            </div>
            <div className="flex-grow mt-8">
              <p className="leading-relaxed text-base">
              We process various crypto to crypto, crypto to fiat and fiat to
                fiat exchange services to users in the various countries of
                registration.
              </p>
            </div>
          </div>

          <div className="p-8 flex flex-col text-center items-center bg-white shadow-md rounded-2xl shadow-gray-500/10 relative">
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-16 p-3 md:w-16 md:h-16 w-14 bg-[#17575461] bg-opacity-40 h-14 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
              <img src={payment} alt="" />
            </div>
            <div className="flex-grow mt-8">
              <p className="leading-relaxed text-base">
                We also offer cross border payments and money transfer services
                in the following countries (United Kingdom, Turkey, Nigeria, and
                Cyprus).
              </p>
            </div>
          </div>

          <div className="p-8 flex flex-col text-center items-center bg-white shadow-md rounded-2xl shadow-gray-500/10 relative">
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-16 p-3 md:w-16 md:h-16 w-14 bg-[#17575461] bg-opacity-40 h-14 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
              <img src={money_bill} alt="" />
            </div>
            <div className="flex-grow mt-8">
              <p className="leading-relaxed text-base">
                We also collect crypto and fiat payments on behalf of our
                registered merchants ( You can check our merchant directory to
                see a list of our Registered Merchants).
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Service;
