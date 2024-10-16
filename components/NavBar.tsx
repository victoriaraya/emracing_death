"use client";

import { useState } from "react";
import Link from "next/link";
import { Noto_Sans_Ethiopic } from "next/font/google";

const notoSansEthiopic = Noto_Sans_Ethiopic({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-notoSansEthiopic",
  weight: "200",
});

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`${notoSansEthiopic.className} relative text-[#2c393a] bg-[#CDBA9D] md:h-32 h-16`}
    >
      <div className="flex justify-center items-center">
        <button
          className="text-3xl md:hidden focus:outline-none z-40"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      <ul
        className={`flex flex-col md:flex-row gap-3 sm:gap-20 justify-center items-center text-center text-2xl font-bold w-full sm:h-full absolute top-0 left-0 mt-14 md:mt-0 sm:p-3 z-20 ${
          isOpen ? "block" : "hidden"
        } md:flex bg-[#CDBA9D]`}
      >
        <li className="relative group">
          <Link href="/faq" onClick={() => setIsOpen(false)}>
            FAQ
          </Link>
          <span className="absolute left-1/2 bottom-[-3px] w-0 h-[2px] bg-[#2c393a] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>
        <li className="relative group">
          <Link href="/services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <span className="absolute left-1/2 bottom-[-3px] w-0 h-[2px] bg-[#2c393a] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>
        <li className="relative group">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Meaningful EndCare
          </Link>
          <span className="absolute left-1/2 bottom-[-3px] w-0 h-[2px] bg-[#2c393a] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>
        <li className="relative group">
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <span className="absolute left-1/2 bottom-[-3px] w-0 h-[2px] bg-[#2c393a] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>
        <li className="relative group sm:pb-0 pb-2">
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <span className="absolute left-1/2 bottom-[-3px] w-0 h-[2px] bg-[#2c393a] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
