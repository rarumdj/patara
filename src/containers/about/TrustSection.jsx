import React from "react";
import { cryto_imgs } from "../../assets/images";
import { motion } from "framer-motion";

const TrustSection = () => {
  return (
    <section className="md:pt-52 pt-36 md:pb-24 pb-8 px-6 lg:px-16 flex justify-center">
      <div className="container md:px-24 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="text-center mb-20">
          <h1 className="sm:text-6xl text-2xl font-bold title-font text-gray-900 mb-4">
            A secure and reliable <br /> exchange{" "}
            <span className="text-[#2FBCB3]">platform.</span>
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500 md:px-10">
            Our platform provides a means for users to buy, sell and swap
            various fiat and crypto currencies
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="md:mt-32 mt-16">
          <img src={cryto_imgs} alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
