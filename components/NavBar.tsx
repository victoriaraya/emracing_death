"use client";

import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative text-[#8C4A18] bg-[#CDBA9D] h-32">
      <div className="flex justify-center items-center">
        <button
          className="text-3xl md:hidden focus:outline-none z-40"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      <ul
        className={`flex flex-col md:flex-row gap-3 sm:gap-8 justify-center items-center text-center text-2xl font-bold w-full absolute top-0 left-0 mt-14 md:mt-0 sm:p-3 z-20 ${
          isOpen ? "block" : "hidden"
        } md:flex bg-[#CDBA9D]`}
      >
        <li className="relative group">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Meaningful EndCare
          </Link>
          <span className="absolute left-1/2 bottom-[-3px] w-0 h-[2px] bg-[#8C4A18] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>
        <li className="relative group">
          <Link href="/faq" onClick={() => setIsOpen(false)}>
            FAQ
          </Link>
          <span className="absolute left-1/2 bottom-[-3px] w-0 h-[2px] bg-[#8C4A18] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>
        <li className="relative group">
          <Link href="/services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <span className="absolute left-1/2 bottom-[-3px] w-0 h-[2px] bg-[#8C4A18] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>
        <li className="relative group">
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <span className="absolute left-1/2 bottom-[-3px] w-0 h-[2px] bg-[#8C4A18] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>
        <li className="relative group">
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <span className="absolute left-1/2 bottom-[-3px] w-0 h-[2px] bg-[#8C4A18] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
