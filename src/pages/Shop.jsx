import React from "react";
import {
  featuredCategories,
  featuredProducts,
  filterByPrice,
} from "../data/Data";

const Shop = () => {
  return (
    <div>
      {/* Header */}
      <div className="linear min-h-[400px] w-full text-center flex items-center justify-center flex-col ">
        <h1 className="red-text text-[24px] sm:text-[28px] lg:text-[32px] text-[#be4544]">
          Explore Our Collection
        </h1>

        <h1 className="text-white text-[34px] sm:text-[42px] lg:text-[52px] font-light mt-2">
          SHOP YOUR FAVORITES
        </h1>

        <p className="text-white font-light text-[15px] sm:text-[16px] lg:text-[18px] mt-4 sm:mt-6">
          Discover a wide range of beauty and skincare products crafted to
          enhance your natural glow. <br className="hidden sm:block" />
          Find everything you need in one place.
        </p>
      </div>

      {/* Filters & Products Section */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-6 py-12">
        {/* Filter section */}
        <aside className="lg:w-[280px] bg-[#faf8f7] rounded-lg p-6 h-fit lg:sticky top-4">
          <div className="mb-8">
            <h3 className="text-lg font-normal uppercase tracking-wide mb-4 text-gray-800 border-b border-gray-300 pb-2">
              Category
            </h3>
            <div className="space-y-3">
              {featuredCategories.slice(0, 6).map((category) => (
                <label
                  key={category.id}
                  className="flex items-center cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 accent-[#be4543] text-[#be4544] focus:ring-[#be4544] cursor-pointer"
                  />
                  <span className="ml-3 text-sm text-gray-700 group-hover:text-[#be4544] transition-colors">
                    {category.title}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-normal uppercase tracking-wide mb-4 text-gray-800 border-b border-gray-300 pb-2">
              Price Range
            </h3>
            <div className="space-y-3">
              {filterByPrice.map((priceRange) => (
                <label
                  key={priceRange.id}
                  className="flex items-center cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="price"
                    className="w-4 h-4 border-gray-300 text-[#be4544] accent-[#be4543] focus:ring-[#be4544] cursor-pointer"
                  />
                  <span className="ml-3 text-sm text-gray-700 group-hover:text-[#be4544] transition-colors">
                    {priceRange.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <button className="w-full mt-6 bg-[#be4544] text-white py-3 rounded-lg font-semibold uppercase tracking-wide hover:bg-[#a03d3c] transition-all duration-300">
            Apply Filters
          </button>
        </aside>

        {/* Product section */}
        <div className="flex-1">
          <div className="mb-8">
            <h1 className="text-[#be4544] red-text text-[28px] lg:text-[32px]">
              your choice
            </h1>
            <h1 className="text-3xl lg:text-4xl font-light text-gray-800">
              BEST ITEMS FOR YOU
            </h1>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </div>
  );
};

export default Shop;
