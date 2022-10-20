import { Icon } from "@iconify/react";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { motion } from "framer-motion";

const TestimonialVideo = () => {
  const [isOpen, setOpen] = useState(false);
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
      <div className="flex flex-col mx-auto  px-6 lg:px-16 justify-center w-screen max-w-[100rem]">
        <div className="w-full h-[430px] bg-[#0e605a] relative rounded-lg">
          <div className="grid lg:grid-cols-2 gap-8 relative items-center">
            <div className="inset-0 lg:w-8/12 lg:h-[500px] lg:px-0 px-4 h-[200px] lg:translate-x-24 lg:-translate-y-10 -translate-y-10  ">
              <div className="flex w-full h-full video_banner rounded-lg ">
                <button
                  className="appearance-none m-auto cursor-pointer"
                  onClick={() => setOpen(true)}>
                  <Icon
                    icon="arcticons:oplayer"
                    fontSize={70}
                    color="#fff"
                    className=""
                  />
                </button>
              </div>
            </div>

            <div className="px-6 lg:px-16 mb-10 text-center ">
              <h1 className="md:text-4xl text-3xl font-bold px-4 text-white">
                How to trade with us?
              </h1>
              <p className="text-center text-white text-sm md:text-xl font-bold mt-2">
                Step by step guide on how it to trade with us
              </p>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="Dz044ibdhNo"
        onClose={() => setOpen(false)}
      />
    </motion.section>
  );
};
// https://youtube.com/watch?v=Dz044ibdhNo&feature=share

export default TestimonialVideo;
