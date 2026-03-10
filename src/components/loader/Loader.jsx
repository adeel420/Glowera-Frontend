import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-pink-50/95 via-rose-50/95 to-pink-100/95 backdrop-blur-sm flex items-center justify-center">
      <div className="relative">
        {/* Animated Circles */}
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 rounded-full border-4 border-pink-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-pink-500 animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-rose-500 animate-spin animation-delay-200" style={{ animationDirection: 'reverse' }}></div>
          <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-pink-400 animate-spin animation-delay-400"></div>
        </div>

        {/* Center Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center animate-pulse">
            <h1 className="text-4xl font-bold">
              <span className="text-5xl bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                G
              </span>
            </h1>
          </div>
        </div>

        {/* Loading Text */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <p className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent animate-pulse">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
