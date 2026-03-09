import React from "react";
import { assets } from "../../assets/assets";

const Hero_Section = () => {
  return (
    <div className="linear flex flex-col lg:flex-row items-center min-h-screen">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center flex flex-col items-center justify-center px-6 py-12 lg:py-0">
        <h1 className="red-text text-[24px] sm:text-[28px] lg:text-[32px] bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
          beauty products
        </h1>

        <h1 className="text-[34px] sm:text-[42px] lg:text-[52px] font-light mt-2 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
          SKIN CARE
        </h1>

        <p className="text-pink-700 font-light text-[15px] sm:text-[16px] lg:text-[18px] mt-4 sm:mt-6">
          Sed lobortis consequat libero sed volutpat.{" "}
          <br className="hidden sm:block" />
          Orci varius natoque penatibus et magnis
        </p>

        <button className="uppercase text-white bg-gradient-to-r from-pink-500 to-rose-500 border-2 border-pink-500 cursor-pointer mt-6 py-3 px-8 rounded-full font-semibold hover:bg-transparent hover:text-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl">
          View Collections
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center px-6 pb-10 lg:pb-0">
        <img
          src={assets.heroImg}
          alt="Hero"
          className="w-[80%] sm:w-[60%] lg:w-[90%] max-w-[500px]"
        />
      </div>
    </div>
  );
};

export default Hero_Section;
