"use client";

import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative text-white bg-green-800 h-28">
      <div className="flex justify-center items-center">
        <button
          className="text-3xl pr-8 md:hidden focus:outline-none z-40"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      <ul
        className={`flex flex-col md:flex-row gap-3 sm:gap-8 justify-center items-center text-center text-2xl font-bold w-full absolute top-0 left-0 mt-14 md:mt-0 sm:p-3 z-20 ${
          isOpen ? "block" : "hidden"
        } md:flex bg-green-800`}
      >
        <li className="hover:[text-shadow:1px_1px_3px_white]">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Meaningful EndCare
          </Link>
        </li>
        <li className="hover:[text-shadow:1px_1px_3px_white]">
          <Link href="/faq" onClick={() => setIsOpen(false)}>
            FAQ
          </Link>
        </li>
        <li className="hover:[text-shadow:1px_1px_3px_white]">
          <Link href="/services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
        </li>
        <li className="hover:[text-shadow:1px_1px_3px_white]">
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
        </li>
        <li className="hover:[text-shadow:1px_1px_3px_white] pb-3 sm:pb-0">
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
