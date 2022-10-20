import React from "react";
import { crypto_img, missionchart, visionchart } from "../../assets/images";
import { motion } from "framer-motion";

const Statement = () => {
  return (
    <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
    variants={{
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 50 },
    }} className="py-24 px-6 lg:px-16 flex justify-center">
      <div className="container text-neutral md:p-24 p-8 mx-auto bg-[#175754] bg-opacity-5 rounded-2xl">
        <div className="flex md:flex-row flex-col items-start mb-24">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={visionchart}
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="space-y-6">
              <h2 className="font-bold md:text-5xl text-2xl text-neutral-600 mb-10">
                Vision
              </h2>
              <p className="text-sm">
                We aim to make cross border payments and crypto transactions as
                easy as sending a text message.
              </p>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col-reverse items-start mb-16">
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pr-12 lg:text-left text-center">
            <div className="space-y-6">
              <h2 className="font-bold md:text-5xl text-2xl text-neutral-600 mb-10">
                Mission
              </h2>
              <p className="text-sm">
                Our Mission is to provide a borderless and trustless online
                payment platform where users can send and receive crypto and
                fiat payments across borders without any restrictions.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={missionchart}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Statement;
