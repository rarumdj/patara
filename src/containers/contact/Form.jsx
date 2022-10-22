import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Form = ({ title }) => {
  const success = () =>
    toast("Message Delivered", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const error = () =>
    toast.error("Message Delivery Failed", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const [toSend, setToSend] = useState({
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_sf6tnoo",
        "template_8jdbm5w",
        toSend,
        "user_9TNYwIfklHc7RB3UrNHCj"
      )
      .then((response) => {
        success();
        setToSend({
          email: "",
          message: "",
        });
      })
      .catch((err) => error());
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full mt-32 flex flex-col items-center">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h3 className="md:text-3xl text-xl font-bold text-gray-900 text-center mb-12">
        {title}
      </h3>
      <div className="bg-[#175754CC] bg-opacity-80 rounded-2xl md:px-24 px-8 md:py-16 py-10 lg:w-8/12 w-full">
        <div className="relative mb-4">
          <label for="email" className="leading-7 text-sm text-white semi-bold">
            Your Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onClick={handleChange}
            className="w-full rounded border-b-2 border-[#2FBCB3] bg-[#2FBCB3] bg-opacity-80   focus:border-[#2FBCB3]  text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label
            for="message"
            className="leading-7 text-sm text-white semi-bold">
            Your Inquiry
          </label>
          <textarea
            id="message"
            name="message"
            onClick={handleChange}
            className="w-full bg-[#2FBCB3] bg-opacity-80 rounded border-b-2 border-[#2FBCB3] focus:border-[#2FBCB3]  h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
      </div>
      <button className="mt-8 py-3 px-8 rounded-2xl font-bold text-center text-white bg-orange-400">
        SUBMIT
      </button>
    </div>
  );
};

export default Form;
