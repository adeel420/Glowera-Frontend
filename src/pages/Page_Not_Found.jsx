import React from "react";

const Page_Not_Found = () => {
  return (
    <div className="linear min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1
        className="red-text text-[#be4543] font-bold 
      text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[14rem] leading-none"
      >
        404
      </h1>

      <h2
        className="red-text text-[#be4543] font-bold 
      text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] -mt-6 sm:-mt-8 md:-mt-10"
      >
        NOT FOUND
      </h2>

      <p
        className="text-white font-light 
      text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] 
      mt-4 max-w-[700px]"
      >
        The resource requested could not be found on this server!
      </p>

      <a
        href="/"
        className="mt-8 bg-[#be4543] text-white px-6 py-3 rounded-lg 
        text-sm sm:text-base hover:bg-[#a63c3a] transition duration-300"
      >
        Back to Home
      </a>
    </div>
  );
};

export default Page_Not_Found;
