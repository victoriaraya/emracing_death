"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FAQItem = (props) => {
  const question = props.question;
  const answer = props.answer;
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-[#4F7641] text-[#4F7641] pb-4">
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="text-2xl pb-8 mr-24 leading-loose pt-2">
          {question}
        </span>
        <IoIosArrowDown
          className={`transform transition-transform duration-300 size-6 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <p className="text-xl pb-14 leading-loose">{answer}</p>}
    </div>
  );
};

export default FAQItem;
