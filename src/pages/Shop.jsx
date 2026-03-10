import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import {
  featuredCategories,
  featuredProducts,
  filterByPrice,
} from "../data/Data";

const Shop = () => {
  const navigate = useNavigate();
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = (productId, e) => {
    e.stopPropagation();
    setLikedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 min-h-[450px] w-full text-center flex items-center justify-center flex-col relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-20 w-64 h-64 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 animate-fade-in-up">
          <h1 className="red-text text-[28px] sm:text-[32px] lg:text-[36px] bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent animate-slide-in-down">
            ✨ Explore Our Collection
          </h1>

          <h1 className="text-[38px] sm:text-[48px] lg:text-[60px] font-bold mt-3 bg-gradient-to-r from-pink-700 to-rose-700 bg-clip-text text-transparent animate-slide-in-up animation-delay-200">
            SHOP YOUR FAVORITES
          </h1>

          <p className="text-gray-700 font-medium text-[16px] sm:text-[18px] lg:text-[20px] mt-6 max-w-2xl mx-auto px-4 animate-fade-in animation-delay-400">
            Discover a wide range of beauty and skincare products crafted to enhance your natural glow.
          </p>
        </div>
      </div>

      {/* Filters & Products Section */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-6 py-16">
        {/* Filter section */}
        <aside className="lg:w-[300px] bg-white rounded-2xl p-6 h-fit lg:sticky top-4 shadow-lg border border-pink-100 animate-fade-in">
          <div className="mb-8">
            <h3 className="text-lg font-bold uppercase tracking-wide mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent border-b-2 border-pink-200 pb-3">
              Category
            </h3>
            <div className="space-y-3">
              {featuredCategories.slice(0, 6).map((category) => (
                <label
                  key={category.id}
                  className="flex items-center cursor-pointer group p-2 rounded-lg hover:bg-pink-50 transition-all"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-pink-300 text-pink-500 focus:ring-pink-500 cursor-pointer"
                  />
                  <span className="ml-3 text-sm text-gray-700 group-hover:text-pink-600 transition-colors font-medium">
                    {category.title}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent border-b-2 border-pink-200 pb-3">
              Price Range
            </h3>
            <div className="space-y-3">
              {filterByPrice.map((priceRange) => (
                <label
                  key={priceRange.id}
                  className="flex items-center cursor-pointer group p-2 rounded-lg hover:bg-pink-50 transition-all"
                >
                  <input
                    type="radio"
                    name="price"
                    className="w-4 h-4 border-pink-300 text-pink-500 focus:ring-pink-500 cursor-pointer"
                  />
                  <span className="ml-3 text-sm text-gray-700 group-hover:text-pink-600 transition-colors font-medium">
                    {priceRange.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <button className="w-full mt-8 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-full font-bold uppercase tracking-wide hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Apply Filters
          </button>
        </aside>

        {/* Product section */}
        <div className="flex-1">
          <div className="mb-10 animate-fade-in-up">
            <h1 className="red-text text-[32px] lg:text-[36px] bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              your choice
            </h1>
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              BEST ITEMS FOR YOU
            </h1>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => navigate("/detail")}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="absolute inset-[2px] bg-white rounded-3xl z-10"></div>

                <div className="relative z-20">
                  <div className="relative overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50 p-6 h-[280px] flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-pink-100 group-hover:to-rose-100 transition-all duration-500">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                    
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-contain transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 drop-shadow-lg"
                    />
                    
                    {product.discount && (
                      <div className="absolute top-4 left-4 animate-bounce-slow">
                        <span className="relative block bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs px-4 py-2 rounded-full font-bold shadow-xl">
                          🎉 {product.discount}% OFF
                        </span>
                      </div>
                    )}

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-8 group-hover:translate-x-0">
                      <button
                        onClick={(e) => toggleLike(product.id, e)}
                        className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                      >
                        {likedProducts.includes(product.id) ? (
                          <IoHeart className="text-pink-500" size={20} />
                        ) : (
                          <IoHeartOutline size={20} />
                        )}
                      </button>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
                      {product.category}
                    </h3>
                    <h2 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-rose-600 group-hover:bg-clip-text transition-all duration-300 line-clamp-2 min-h-[56px]">
                      {product.name}
                    </h2>
                    
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-base">★</span>
                      ))}
                      <span className="text-xs text-gray-500 ml-1 font-semibold">(4.9)</span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-full font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:shadow-2xl hover:scale-105">
                      Add to Cart
                    </button>
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
