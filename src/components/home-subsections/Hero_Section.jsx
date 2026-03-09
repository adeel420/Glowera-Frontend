import React from "react";
import { assets } from "../../assets/assets";

const Hero_Section = () => {
  return (
    <div className="linear relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center min-h-screen px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start justify-center py-12 lg:py-0 z-10">
          <div className="animate-fade-in-up">
            <h1 className="red-text text-[28px] sm:text-[32px] lg:text-[36px] bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent animate-slide-in-left">
              ✨ Premium Beauty Products
            </h1>

            <h1 className="text-[42px] sm:text-[52px] lg:text-[68px] font-bold mt-3 leading-tight animate-slide-in-left animation-delay-200">
              <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 bg-clip-text text-transparent">
                GLOW LIKE
              </span>
              <br />
              <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 bg-clip-text text-transparent">
                NEVER BEFORE
              </span>
            </h1>

            <p className="text-gray-700 font-light text-[16px] sm:text-[18px] lg:text-[20px] mt-6 max-w-lg animate-slide-in-left animation-delay-400">
              Discover our exclusive collection of premium skincare products designed to enhance your natural beauty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-slide-in-left animation-delay-600">
              <button className="group relative uppercase text-white bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform">
                <span className="relative z-10">Shop Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
              <button className="uppercase text-pink-600 bg-white border-2 border-pink-500 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 transform">
                View Collection
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 animate-fade-in animation-delay-800">
              <div className="text-center">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">500+</h3>
                <p className="text-sm text-gray-600 mt-1">Products</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">50K+</h3>
                <p className="text-sm text-gray-600 mt-1">Happy Customers</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">4.9★</h3>
                <p className="text-sm text-gray-600 mt-1">Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center px-6 pb-10 lg:pb-0 relative z-10">
          <div className="relative animate-float">
            {/* Decorative circles */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full opacity-40 animate-pulse animation-delay-1000"></div>
            
            <img
              src={assets.heroImg}
              alt="Hero"
              className="relative w-[85%] sm:w-[70%] lg:w-full max-w-[550px] drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            
            {/* Floating badge */}
            <div className="absolute top-10 -left-6 bg-white rounded-2xl shadow-2xl p-4 animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  🎁
                </div>
                <div>
                  <p className="text-xs text-gray-500">Special Offer</p>
                  <p className="text-sm font-bold text-pink-600">30% OFF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero_Section;
