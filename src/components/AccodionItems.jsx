import { Icon } from "@iconify/react";
import React, { useRef } from "react";

const AccodionItems = ({ faq, active, onToggle }) => {
  const { question, answer } = faq;
  const contentEl = useRef();
  return (
    <div>
      <div
        className={`${
          active ? "space-y-4" : ""
        } w-full p-6 rounded-lg bg-[#2FBCB3] bg-opacity-10 border-b-2  border-[#2FBCB3]`}
      >
        <div className="flex cursor-pointer" onClick={onToggle}>
          <h5 className={`md:text-xl text-gray-900 text-lg ${active ? " font-bold" : ""}`}>
            {question}
          </h5>
          <span className="ml-auto">
            <Icon
              icon={`${active ? "eva:arrow-ios-upward-fill" : "eva:arrow-ios-downward-fill"}`}
              fontSize={30}
              className="text-gray-900 transition-all ease-in-out duration-300"
            />
          </span>
        </div>
        <div
          ref={contentEl}
          style={
            active
              ? { height: contentEl.current.scrollHeight }
              : { height: "0px" }
          }
          className="h-0 overflow-hidden transition-all ease-in-out duration-200"
        >
          <p className="text-gray-600 md:text-base text-sm">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default AccodionItems;
