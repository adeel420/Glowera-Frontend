import React from "react";
import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";

const About = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 min-h-[450px] w-full flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 animate-fade-in-up">
          <h1 className="red-text text-[26px] sm:text-[30px] lg:text-[36px] bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent animate-slide-in-down">
            🌸 Who We Are
          </h1>

          <h1 className="text-[36px] sm:text-[46px] lg:text-[60px] font-bold mt-3 bg-gradient-to-r from-pink-700 to-rose-700 bg-clip-text text-transparent animate-slide-in-up animation-delay-200">
            ABOUT OUR BRAND
          </h1>

          <p className="text-gray-700 font-medium text-[16px] sm:text-[18px] lg:text-[20px] mt-6 max-w-3xl animate-fade-in animation-delay-400">
            We are passionate about bringing high-quality beauty and skincare products that help you feel confident and radiant.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-6 py-20">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in-up">
          <h2 className="red-text text-[26px] sm:text-[30px] lg:text-[36px] bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent animate-slide-in-left">
            ✨ Glowera
          </h2>

          <h1 className="text-[36px] sm:text-[44px] lg:text-[54px] font-bold mt-3 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent animate-slide-in-left animation-delay-200">
            OUR STORY
          </h1>

          <p className="font-light text-[15px] sm:text-[17px] lg:text-[19px] mt-6 leading-relaxed text-gray-700 animate-fade-in animation-delay-400">
            Glowera was created with a simple vision — to help people feel confident in their own skin. We believe beauty is not about perfection, but about embracing your natural glow.
            <br /><br />
            Our journey began with a passion for skincare and beauty products that truly care for the skin. At Glowera, we carefully curate products that combine quality, style, and effectiveness so you can feel your best every day.
            <br /><br />
            We are committed to bringing you products that enhance your natural beauty and fit seamlessly into your daily routine.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center animate-float">
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full opacity-40 animate-pulse animation-delay-1000"></div>
            <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-br from-pink-300 to-rose-300 rounded-full opacity-50 animate-bounce-slow"></div>
            <img
              src={assets.about}
              alt="About Glowera"
              className="relative w-[85%] sm:w-[70%] md:w-[60%] lg:w-[90%] max-w-[500px] object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-gradient-to-br from-pink-50 via-white to-rose-50 py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="red-text text-[32px] lg:text-[36px] bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
              🎯 Our Values
            </h2>
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              WHAT DRIVES US
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Our Mission */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-pink-300 animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
                Our Mission
              </h3>
              <p className="font-light text-[15px] leading-relaxed text-gray-600">
                Our mission at Glowera is to make beauty simple, accessible, and empowering for everyone. We strive to provide high-quality beauty and skincare products that inspire confidence and celebrate individuality.
              </p>
            </div>

            {/* Our Vision */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-pink-300 animate-fade-in-up animation-delay-200">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
                Our Vision
              </h3>
              <p className="font-light text-[15px] leading-relaxed text-gray-600">
                To become a trusted beauty brand that empowers individuals worldwide to embrace their natural beauty. We envision a world where everyone feels confident and radiant in their own skin.
              </p>
            </div>

            {/* Our Promise */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-pink-300 animate-fade-in-up animation-delay-400">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
                Our Promise
              </h3>
              <p className="font-light text-[15px] leading-relaxed text-gray-600">
                We promise to deliver only the finest quality products that are safe, effective, and ethically sourced. Your trust and satisfaction are at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="red-text text-[32px] lg:text-[36px] bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
              💖 Why Glowera
            </h2>
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              WHY CHOOSE US
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 bg-white rounded-3xl hover:bg-gradient-to-br hover:from-pink-50 hover:to-rose-50 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-3">
                Premium Quality
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Carefully curated products that meet the highest standards
              </p>
            </div>

            <div className="group text-center p-8 bg-white rounded-3xl hover:bg-gradient-to-br hover:from-pink-50 hover:to-rose-50 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up animation-delay-200">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-3">
                Best Prices
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Competitive pricing without compromising on quality
              </p>
            </div>

            <div className="group text-center p-8 bg-white rounded-3xl hover:bg-gradient-to-br hover:from-pink-50 hover:to-rose-50 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up animation-delay-400">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-3">
                Fast Delivery
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Quick and reliable shipping to your doorstep
              </p>
            </div>

            <div className="group text-center p-8 bg-white rounded-3xl hover:bg-gradient-to-br hover:from-pink-50 hover:to-rose-50 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up animation-delay-600">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-3">
                Customer Care
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Dedicated support team ready to assist you
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* News Letter */}
      <NewsLetter />
    </div>
  );
};

export default About;
