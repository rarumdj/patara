import React, { useState } from "react";
import AccodionItems from "../../components/AccodionItems";
import Form from "../contact/Form";

const FaqQuest = [
  {
    question: "Who can use the patara platform?",
    answer: `Anyone human looking for the best rates to swap their crypto for fiat.`,
  },
  {
    question:
      "I would like to accept crypto for my business, can patara support me?",
    answer: `We currently process crypto payments for over 100 stores/ businesses across the globe if you would like us to support you accept crypto in your business email us here  business@pataraechange.com`,
  },
  {
    question: "Can I receive money to my dormicilliary account?",
    answer: `Yes you can you can indicate this while making your trade in the how you would like to be paid section.`,
  },
  {
    question: "I would like to process a face to face transaction.",
    answer: `You can find the location nearest to you for cash pickup on our about us page `,
  },
];

const Faq = () => {
  const [clicked, setClicked] = useState("0");
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <>
      <div className="text-center mb-20">
        <h1 className="sm:text-4xl text-2xl font-bold title-font text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="basis-4/5 space-y-6 w-full">
        {FaqQuest.map((faq, index) => (
          <AccodionItems
            faq={faq}
            onToggle={() => handleToggle(index)}
            active={clicked === index}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default Faq;
