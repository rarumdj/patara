import React from 'react'

const Form = ({title}) => {
  return (
    <div className="w-full mt-32 flex flex-col items-center">
    <h3 className="md:text-3xl text-xl font-bold text-gray-900 text-center mb-12">
     {title}
    </h3>
    <div className="bg-[#175754CC] bg-opacity-80 rounded-2xl md:px-24 px-8 md:py-16 py-10 lg:w-8/12 w-full">
      <div className="relative mb-4">
        <label
          for="email"
          className="leading-7 text-sm text-white semi-bold">
          Your Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
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
          className="w-full bg-[#2FBCB3] bg-opacity-80 rounded border-b-2 border-[#2FBCB3] focus:border-[#2FBCB3]  h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
    </div>
    <button className="mt-8 py-3 px-8 rounded-2xl font-bold text-center text-white bg-orange-400">
      SUBMIT
    </button>
  </div>
  )
}

export default Form