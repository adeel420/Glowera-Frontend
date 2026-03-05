import React from "react";
import { assets } from "../../assets/assets";
import { featuredProducts } from "../../data/Data";

const Featured_Product = () => {
  return (
    <div className=" ">
      {/* Banner */}
      <div
        className="relative min-h-[400px] w-full flex flex-col items-center justify-center bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(100deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${assets.makupGirl})`,
          //   backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="red-text text-[24px] sm:text-[28px] lg:text-[32px] text-[#be4544]">
          Beauty Products
        </h1>

        <h1 className="text-white text-[34px] sm:text-[42px] lg:text-[52px] font-light mt-2">
          SKIN CARE
        </h1>

        <p className="text-white font-light text-[15px] sm:text-[16px] lg:text-[18px] mt-4 sm:mt-6 text-center max-w-md">
          Sed lobortis consequat libero sed volutpat.{" "}
          <br className="hidden sm:block" />
          Orci varius natoque penatibus et magnis
        </p>

        <button className="uppercase text-white border border-white cursor-pointer mt-6 py-2 px-6 rounded font-semibold hover:bg-white hover:text-black transition-all duration-300">
          View Collections
        </button>
      </div>

      {/* Category */}
      <div className="py-16 px-6 bg-white">
        <h1 className="text-[#be4544] red-text text-center text-[28px] lg:text-[32px]">
          your choice
        </h1>
        <h1 className="text-center text-3xl lg:text-4xl font-light mt-2 text-gray-800">
          BEST ITEMS FOR YOU
        </h1>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#faf8f7] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div className="relative overflow-hidden bg-white p-6">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-[200px] object-contain group-hover:scale-110 transition-transform duration-500"
                />
                {product.discount && (
                  <span className="absolute top-3 left-3 bg-[#be4544] text-white text-xs px-3 py-1 rounded-full">
                    -{product.discount}%
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-sm font-light uppercase tracking-wide text-gray-600 mb-1">
                  {product.category}
                </h3>
                <h2 className="text-base font-normal text-gray-800 mb-3 group-hover:text-[#be4544] transition-colors">
                  {product.name}
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-gray-800">
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

export default Featured_Product;
