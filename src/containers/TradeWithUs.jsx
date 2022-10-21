import React from "react";
import { crypto, hide, person, secured, star } from "../assets/images";
import { motion } from "framer-motion";

const TradeWithUs = () => {
  const cardVarient = {
    hidden: { scale: 1 },
    animate: { scale: 1.05 },
    transition: {
      type: "tween",
      duration: "2",
      delay: "1",
      ease: "easeInOut",
    },
  };

  return (
    <section
      id="eligibility"
      className="py-24 px-6 lg:px-16 flex justify-center white__bg_line">
      <div className="container md:p-24 mx-auto bg-green-200 bg-opacity-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          className="text-center mb-20">
          <h1 className="sm:text-5xl text-3xl font-bold title-font text-gray-900 mb-4">
            Why trade with us?
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Here are a few reasons why you should choose to trade with us
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
          className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={cardVarient}
            initial="hidden"
            whileHover="animate"
            whileTap="animate"
            className="p-8 flex flex-col text-center items-center bg-white shadow-md rounded-2xl shadow-gray-500/10">
            <div className="md:w-16 md:h-16 w-14 h-14 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
              <img src={secured} alt="" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 md:text-2xl text-lg font-medium mb-3">
                Secure and Trusted
              </h2>
              <p className="leading-relaxed text-base">
                Our platform has built in security measures to guarantee users
                protection
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardVarient}
            initial="hidden"
            whileHover="animate"
            whileTap="animate"
            className="p-8 flex flex-col text-center items-center bg-white shadow-md rounded-2xl shadow-gray-500/10">
            <div className="md:w-16 md:h-16 w-14 h-14 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
              <img src={hide} alt="" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 md:text-2xl text-lg font-medium mb-3">
                No hidden fee
              </h2>
              <p className="leading-relaxed text-base">
                We provide a platform that facilitates transparency and
                accountability while trading
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardVarient}
            initial="hidden"
            whileHover="animate"
            whileTap="animate"
            className="p-8 flex flex-col text-center items-center bg-white shadow-md rounded-2xl shadow-gray-500/10">
            <div className="md:w-16 md:h-16 w-14 h-14 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
              <img src={crypto} alt="" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 md:text-2xl text-lg font-medium mb-3">
                Profit in Crypto
              </h2>
              <p className="leading-relaxed text-base">
                This platform provides a means for users to trade and make
                profits from different cryptocurrencies
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardVarient}
            initial="hidden"
            whileHover="animate"
            whileTap="animate"
            className="p-8 flex flex-col text-center items-center bg-white shadow-md rounded-2xl shadow-gray-500/10">
            <div className="md:w-16 md:h-16 w-14 h-14 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
              <img src={star} alt="" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 md:text-2xl text-lg font-medium mb-3">
                Earn Rewards
              </h2>
              <p className="leading-relaxed text-base">
                We provide time framed activities and promotions that enable
                eligible users earn Rewards for additional gains.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TradeWithUs;
