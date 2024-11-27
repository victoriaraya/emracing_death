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
        <span className="text-center sm:text-left text-lg sm:text-2xl sm:pb-8 mr-6 leading-loose sm:leading-loose sm:pt-2">
          {question}
        </span>
        <IoIosArrowDown
          className={`transform transition-transform duration-300 w-14 sm:w-10 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <p className="text-center sm:text-left text-lg sm:text-xl pb-4 sm:pb-14 leading-loose sm:leading-loose">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQItem;
