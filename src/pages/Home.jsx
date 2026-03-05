import React from "react";
import { assets } from "../assets/assets";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="linear flex flex-col lg:flex-row items-center min-h-screen">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center flex flex-col items-center justify-center px-6 py-12 lg:py-0">
          <h1 className="red-text text-[24px] sm:text-[28px] lg:text-[32px] text-[#be4544]">
            beauty products
          </h1>

          <h1 className="text-white text-[34px] sm:text-[42px] lg:text-[52px] font-light mt-2">
            SKIN CARE
          </h1>

          <p className="text-white font-light text-[15px] sm:text-[16px] lg:text-[18px] mt-4 sm:mt-6">
            Sed lobortis consequat libero sed volutpat.{" "}
            <br className="hidden sm:block" />
            Orci varius natoque penatibus et magnis
          </p>

          <button className="uppercase text-white border border-white cursor-pointer mt-6 py-2 px-6 rounded font-semibold hover:bg-white hover:text-black transition-all duration-300">
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
    </div>
  );
};

export default Home;
