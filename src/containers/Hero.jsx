import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";
import { bar, bg_02, bg_03, earth, hero_img_1, person } from "../assets/images";
import { motion } from "framer-motion";

const imgss = [hero_img_1, bg_02, bg_03];
const Hero = () => {
  const [clicked, setClicked] = useState(0);
  const [startInterval, setStartInterval] = useState(true);
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked(0);
    }
    setClicked(index);
  };

  const interval = useRef(null);
  useEffect(() => {
    interval.current = setInterval(() => {
      if (clicked <= 1) setClicked((click) => click + 1);
      if (clicked === 2) setClicked(0);
    }, 12000);

    return () => {
      clearInterval(interval.current);
    };
  }, [startInterval, clicked]);

  return (
    <section
      id="home"
      className="gradient__bg pt-20 2xl:h-full lg:h-[1232px] min-h-screen relative">
      <div className="absolute w-full h-[434px] bottom-0 fade_bg_hero" />
      <div className="flex flex-col md:flex-row lg:pl-24  items-center">
        <div className="space-y-6 lg:mt-20 sm:mt-10 mt-16 lg:mr-8 lg:px-0 px-8 sm:mb-20 w-full">
          {clicked === 0 && (
            <>
              <h1 className=" w-full text-white font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
                Trade your <span className="text-orange-400">crypto</span>{" "}
                instantly
              </h1>
              <p className="text-white text-sm sm:text-base">
                A user friendly platform to trade between cryptocurrencies,
                stablecoins and environmental assets in one easy step.
              </p>
            </>
          )}
          {clicked === 1 && (
            <>
              <h1 className=" w-full text-white font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
                Swap your <span className="text-orange-400">crypto</span>
                instantly
              </h1>
              <p className="text-white text-sm sm:text-base">
                Initiate instant money transfers between over 16+ countries
                across the globe in just one click
              </p>
            </>
          )}
          {clicked === 2 && (
            <>
              <h1 className=" w-full text-white font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
                Cross border <span className="text-orange-400">payments</span>
              </h1>
              <p className="text-white text-sm sm:text-base">
                Initiate instant money transfers between over 16+ countries
                across the globe in just one click
              </p>
            </>
          )}
          <p className="hover:-translate-y-1 transition-all duration-500 ease-in-out">
            <a
              href="https://wa.me/message/RFB4WFBPM6WTL1"
              target="_blank"
              className=" py-3 px-4 rounded-3xl font-bold text-center text-white bg-orange-400 flex w-fit items-center"
              rel="noreferrer">
              TRADE NOW{" "}
              <span className="rounded-full bg-white ml-2">
                <Icon
                  icon="fe:arrow-right"
                  fontSize={30}
                  className="text-orange-400 p-1.5"
                />
              </span>
            </a>
          </p>
          <div className="flex space-x-2 !mt-10">
            {imgss.map((_, i) => (
              <div
                onClick={() => handleToggle(i)}
                className={`${
                  clicked === i ? "bg-white" : ""
                } md:w-14 md:h-1.5 w-8 h-1 rounded-full border border-white cursor-pointer`}
              />
            ))}
          </div>
        </div>
        <div className="ml-auto md:mt-0 mt-10">
          <img src={imgss[clicked]} alt="hero_banner" className="" />
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        className="flex flex-col items-center mt-36 px-4 md:pb-0 pb-14">
        <div className="space-y-3">
          <h3 className="md:text-4xl text-2xl font-bold text-white text-center">
            Our customer base <br className="md:block hidden" /> is worldwide
          </h3>
          <p className="text-sm text-white text-center opacity-50">
            Trade comfortably from any part of the world
          </p>
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
        className="flex flex-col px-4 md:items-center">
        <div className="stats bg-transparent z-10 md:mt-20 mb-10">
          <div className="stat place-itsems-center">
            <div className="flex-grow md:pl-8 flex sm:items-center items-center flex-row">
              <div className="flex-shrink-0 md:w-20 md:h-20 w-14 h-14 bg-black bg-opacity-20 rounded-full inline-flex items-center justify-center">
                <img src={earth} alt="" className="md:w-9 w-6" />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="font-bold title-font text-white mb-1 md:text-2xl text-xl">
                  193
                </h2>
                <p className="leading-relaxed text-white md:text-base text-sm">
                  Countries Reached
                </p>
              </div>
            </div>
          </div>
          <div className="stat place-itesms-center">
            <div className="flex-grow md:pl-8 flex sm:items-center items-center flex-row">
              <div className="flex-shrink-0 md:w-20 md:h-20 w-14 h-14 bg-black bg-opacity-20 rounded-full inline-flex items-center justify-center">
                <img src={person} alt="" className="md:w-9 w-6" />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="font-bold title-font text-white mb-1 md:text-2xl text-xl">
                  Over 10K
                </h2>
                <p className="leading-relaxed text-white md:text-base text-sm">
                  Cryptocurrency Users
                </p>
              </div>
            </div>
          </div>

          <div className="stat place-itemss-center">
            <div className="flex-grow md:pl-8 flex sm:items-center items-center flex-row">
              <div className="flex-shrink-0 md:w-20 md:h-20 w-14 h-14 bg-black bg-opacity-20 rounded-full inline-flex items-center justify-center">
                <img src={bar} alt="" className="md:w-9 w-6" />
              </div>
              <div className="flex-grow pl-6 ">
                <h2 className="font-bold title-font text-white mb-1 md:text-2xl text-xl">
                  $50B
                </h2>
                <p className="leading-relaxed text-white md:text-base text-sm">
                  Digital Currency Exchanged
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
