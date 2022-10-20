import React from "react";
import { cryto_imgs, email, whatsapp } from "../../assets/images";
import Faq from "../faqs/Faq";
import Form from "./Form";

const Contact = () => {
  return (
    <section className="md:pt-52 pt-36 pb-24 px-6 lg:px-16 flex justify-center">
      <div className="container md:px-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-6xl text-2xl font-bold title-font text-gray-900 mb-4">
            We love hearing from you, <br />
            so don't hesitate to{" "}
            <span className="text-[#2FBCB3]"> reach out!</span>
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500 md:px-10">
            Our customer support team is available 24/5 from Sunday 21:00 UTC to
            Friday 22:00 UTC
          </p>
        </div>
       
        <div className="mt-32">
          <div className="flex md:flex-row flex-col  gap-8 justify-around text-neutral">
            <div className="flex gap-4 items-center">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center px-2">
                <img src={whatsapp} alt="" />
              </div>
              <div className="space-y-1">
                <h6 className="font-semibold">Turkey</h6>
                <p>+905 488 240 571</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center px-2">
                <img src={email} alt="" />
              </div>
              <div className="space-y-1">
                <h6 className="font-semibold">Email</h6>
                <p>info@pataraexchange.com</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center px-2">
                <img src={whatsapp} alt="" />
              </div>
              <div className="space-y-1">
                <h6 className="font-semibold">Nigeria</h6>
                <p>+234 816 998 6056</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-28">
          <Faq />
        </div>

        <Form title="Give us your feedback" />
      </div>
    </section>
  );
};

export default Contact;
