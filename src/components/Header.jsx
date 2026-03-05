import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { navLinks } from "../data/Data";

const Header = () => {
  return (
    <div>
      {/* Top Bar */}
      <div className="bg-black text-white py-3 px-4 text-xs sm:text-sm flex justify-center items-center text-center">
        <p>Free Shipping All Over the Pakistan</p>
      </div>

      {/* Main Header */}
      <div className="px-4 py-4 lg:py-6 flex flex-col lg:flex-row items-center gap-4 lg:gap-0 justify-between border-b border-b-[#ccc]">
        {/* Logo */}
        <h1 className="text-3xl sm:text-4xl font-bold">
          <span className="text-5xl sm:text-6xl text-[#cfabae]">G</span>
          lowera
        </h1>

        {/* Search */}
        <form className="flex w-full lg:w-[600px] border border-[#ccc] rounded p-1 items-center">
          <input
            type="text"
            placeholder="Search Product..."
            className="w-full text-[13px] outline-0 px-2"
          />
          <button className="bg-[#bd4544] hover:bg-[#888888] transition-all text-white h-[40px] w-[60px] rounded flex items-center justify-center text-xl">
            <IoSearchOutline />
          </button>
        </form>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <span className="text-2xl cursor-pointer hover:text-[#cfabae] transition-all">
            <IoIosHeartEmpty />
          </span>
          <span className="text-2xl cursor-pointer hover:text-[#cfabae] transition-all">
            <FiUser />
          </span>
          <span className="text-2xl cursor-pointer hover:text-[#cfabae] transition-all">
            <IoCartOutline />
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="w-full border-b border-b-[#ccc]">
        <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="px-4 py-3 hover:bg-[#cfabae] hover:text-white transition-all inline-block text-sm sm:text-base flex-shrink-0"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
