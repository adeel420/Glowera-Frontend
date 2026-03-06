import React from "react";
import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";

const About = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Header */}
      <div className="linear min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] w-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="red-text text-[22px] sm:text-[26px] lg:text-[30px] text-[#be4544]">
          Who We Are
        </h1>

        <h1 className="text-white text-[30px] sm:text-[38px] lg:text-[52px] font-light mt-2">
          ABOUT OUR BRAND
        </h1>

        <p className="text-white font-light text-[14px] sm:text-[16px] lg:text-[18px] mt-4 max-w-[700px]">
          We are passionate about bringing high-quality beauty and skincare
          products that help you feel confident and radiant.
          <br className="hidden sm:block" />
          Our mission is to make beauty simple, accessible, and empowering for
          everyone.
        </p>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16 px-6 py-14 lg:py-20">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="red-text text-[22px] sm:text-[26px] lg:text-[30px] text-[#be4544]">
            Glowera
          </h2>

          <h1 className="text-[30px] sm:text-[38px] lg:text-[48px] font-light mt-2">
            OUR STORY
          </h1>

          <p className="font-light text-[14px] sm:text-[16px] lg:text-[18px] mt-5 leading-relaxed text-gray-700">
            Glowera was created with a simple vision — to help people feel
            confident in their own skin. We believe beauty is not about
            perfection, but about embracing your natural glow.
            <br className="hidden sm:block" />
            <br />
            Our journey began with a passion for skincare and beauty products
            that truly care for the skin. At Glowera, we carefully curate
            products that combine quality, style, and effectiveness so you can
            feel your best every day.
            <br className="hidden sm:block" />
            <br />
            We are committed to bringing you products that enhance your natural
            beauty and fit seamlessly into your daily routine.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={assets.about}
            alt="About Glowera"
            className="w-[85%] sm:w-[70%] md:w-[60%] lg:w-[90%] max-w-[500px] object-contain"
          />
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-[#faf8f7] py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Our Mission */}
          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-[#947972]/20 to-[#f1e5e5]/40 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-[#be4544]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-light uppercase tracking-wide text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="font-light text-[15px] leading-relaxed text-gray-600">
              Our mission at Glowera is to make beauty simple, accessible, and
              empowering for everyone. We strive to provide high-quality beauty
              and skincare products that inspire confidence and celebrate
              individuality.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-[#947972]/20 to-[#f1e5e5]/40 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-[#be4544]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-light uppercase tracking-wide text-gray-800 mb-4">
              Our Vision
            </h3>
            <p className="font-light text-[15px] leading-relaxed text-gray-600">
              To become a trusted beauty brand that empowers individuals
              worldwide to embrace their natural beauty. We envision a world
              where everyone feels confident and radiant in their own skin.
            </p>
          </div>

          {/* Our Promise */}
          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-[#947972]/20 to-[#f1e5e5]/40 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-[#be4544]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-light uppercase tracking-wide text-gray-800 mb-4">
              Our Promise
            </h3>
            <p className="font-light text-[15px] leading-relaxed text-gray-600">
              We promise to deliver only the finest quality products that are
              safe, effective, and ethically sourced. Your trust and
              satisfaction are at the heart of everything we do.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="red-text text-[26px] lg:text-[30px] text-[#be4544]">
              why glowera
            </h2>
            <h1 className="text-3xl lg:text-4xl font-light text-gray-800 mt-2">
              WHY CHOOSE US
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-[#faf8f7] rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#947972] to-[#f1e5e5] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-normal uppercase tracking-wide text-gray-800 mb-2">
                Premium Quality
              </h3>
              <p className="text-sm text-gray-600 font-light">
                Carefully curated products that meet the highest standards
              </p>
            </div>

            <div className="text-center p-6 bg-[#faf8f7] rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#947972] to-[#f1e5e5] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-normal uppercase tracking-wide text-gray-800 mb-2">
                Best Prices
              </h3>
              <p className="text-sm text-gray-600 font-light">
                Competitive pricing without compromising on quality
              </p>
            </div>

            <div className="text-center p-6 bg-[#faf8f7] rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#947972] to-[#f1e5e5] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-normal uppercase tracking-wide text-gray-800 mb-2">
                Fast Delivery
              </h3>
              <p className="text-sm text-gray-600 font-light">
                Quick and reliable shipping to your doorstep
              </p>
            </div>

            <div className="text-center p-6 bg-[#faf8f7] rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-[#947972] to-[#f1e5e5] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-normal uppercase tracking-wide text-gray-800 mb-2">
                Customer Care
              </h3>
              <p className="text-sm text-gray-600 font-light">
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
