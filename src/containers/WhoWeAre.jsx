import React from "react";
import { crypto_img } from "../assets/images";
import { motion } from "framer-motion";

const WhoWeAre = () => {
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
      id="eligibility"
      className="px-6 lg:px-16 flex justify-center">
      <div className="container h-full flex md:flex-row flex-col p-10 items-center md:p-24 mx-auto bg-green-200 bg-opacity-20 rounded-2xl">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img alt="feature" className="object-cover object-center h-full w-full" src={crypto_img} />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 md:-mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="space-y-6">
            <h2 className="font-bold md:text-5xl text-2xl text-neutral opacity-80">Who we are</h2>
            <p className="text-sm text-neutral md:text-xl opacity-80">
              We connect cryptocurrency traders with a wide a range of global
              financial markets through one single account in a safe, easy and
              secure environment.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhoWeAre;
