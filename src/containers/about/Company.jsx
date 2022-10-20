import React from "react";
import { whoweare } from "../../assets/images";
import { motion } from "framer-motion";

const Company = () => {
  return (
    <section className="py-24 px-6 lg:px-16 flex justify-center white__wave_line">
      <div className="container flex lg:flex-row  flex-col items-center md:p-24 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pr-12 lg:text-left text-center">
          <div className="space-y-6 text-neutral">
            <h2 className="font-bold md:text-5xl text-2xl">Who we are</h2>
            <p className="text-sm">
              Patara exchange is a subsidiary of patara trading limited
              currently registered in the United Kingdom, North Cyprus and
              Nigeria We provide our services to over 10,000 users all around
              the world. We are at the forefront of processing crypto payments
              and cross border transactions where we provide customers with
              competitive market rates and instant payments .
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="lg:w-1/2 w-full mb-10 lg:mt-0 mt-24 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center h-full w-full"
            src={whoweare}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Company;
