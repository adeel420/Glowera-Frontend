import React from "react";
import { featuredProducts } from "../data/Data";

const Wishlist = () => {
  return (
    <div className="pb-16 ">
      {/* Header */}
      <div className="linear min-h-[260px] sm:min-h-[320px] lg:min-h-[420px] w-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <h1 className="red-text text-[20px] sm:text-[24px] lg:text-[30px] text-[#be4544]">
          Your Favorites
        </h1>

        <h1 className="text-white text-[28px] sm:text-[36px] lg:text-[52px] font-light mt-2">
          MY WISHLIST
        </h1>

        <p className="text-white font-light text-[14px] sm:text-[15px] lg:text-[18px] mt-4 max-w-[700px] leading-relaxed">
          Save your favorite beauty essentials in one place. Your wishlist lets
          you keep track of the cosmetics you love and plan your next purchase
          easily. Add items to your cart anytime and enjoy a smooth shopping
          experience with Glowera.
        </p>
      </div>

      {/* Product Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#faf8f7] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-white p-4 sm:p-6 flex items-center justify-center">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-[180px] sm:h-[200px] object-contain group-hover:scale-110 transition-transform duration-500"
                />

                {product.discount && (
                  <span className="absolute top-3 left-3 bg-[#be4544] text-white text-xs px-3 py-1 rounded-full">
                    -{product.discount}%
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-xs sm:text-sm font-light uppercase tracking-wide text-gray-600 mb-1">
                  {product.category}
                </h3>

                <h2 className="text-sm sm:text-base font-normal text-gray-800 mb-3 group-hover:text-[#be4544] transition-colors line-clamp-2">
                  {product.name}
                </h2>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-base sm:text-lg font-semibold text-gray-800">
                    ${product.price}
                  </span>

                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
