import React from "react";
import { work_01, work_02, work_03, work_04 } from "../assets/images";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 lg:px-16 flex justify-center">
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
          <h1 className="sm:text-5xl text-3xl font-bold title-font text-gray-900 mb-4">
            How it works
          </h1>
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
          className="flex md:flex-row flex-col items-center mb-16">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={work_01}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="space-y-6">
              <h2 className="font-bold md:text-3xl text-xl text-neutral">
                Connect
              </h2>
              <p className="text-sm text-neutral">
                We connect cryptocurrency traders with a wide a range of global
                financial markets through one single account in a safe, easy and
                secure environment.
              </p>
            </div>
          </div>
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
          className="flex md:flex-row flex-col-reverse items-center mb-16">
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pr-12 lg:text-left text-center">
            <div className="space-y-6">
              <h2 className="font-bold md:text-3xl text-xl text-neutral">
                Connect More
              </h2>
              <p className="text-sm text-neutral">
                We connect cryptocurrency traders with a wide a range of global
                financial markets through one single account in a safe, easy and
                secure environment.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={work_02}
            />
          </div>
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
          className="flex md:flex-row flex-col items-center mb-16">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={work_03}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="space-y-6">
              <h2 className="font-bold md:text-3xl text-xl text-neutral">
                Connect
              </h2>
              <p className="text-sm text-neutral">
                We connect cryptocurrency traders with a wide a range of global
                financial markets through one single account in a safe, easy and
                secure environment.
              </p>
            </div>
          </div>
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
          className="flex md:flex-row flex-col-reverse items-center">
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pr-12 lg:text-left text-center">
            <div className="space-y-6">
              <h2 className="font-bold md:text-3xl text-xl text-neutral">
                Connect More
              </h2>
              <p className="text-sm text-neutral">
                We connect cryptocurrency traders with a wide a range of global
                financial markets through one single account in a safe, easy and
                secure environment.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={work_04}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
