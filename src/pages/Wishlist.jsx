import React, { useState } from "react";
import { featuredProducts } from "../data/Data";
import { useNavigate } from "react-router-dom";
import { IoHeartOutline, IoHeart, IoCartOutline } from "react-icons/io5";

const Wishlist = () => {
  const navigate = useNavigate();
  const [wishlistItems, setWishlistItems] = useState(featuredProducts.map(p => p.id));

  const toggleWishlist = (productId, e) => {
    e.stopPropagation();
    setWishlistItems(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="pb-16 bg-gradient-to-br from-pink-50 via-white to-rose-50 min-h-screen relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 min-h-[420px] w-full flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 animate-fade-in-up">
          <h1 className="red-text text-[26px] sm:text-[30px] lg:text-[36px] bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent animate-slide-in-down">
            💖 Your Favorites
          </h1>

          <h1 className="text-[36px] sm:text-[46px] lg:text-[60px] font-bold mt-3 bg-gradient-to-r from-pink-700 to-rose-700 bg-clip-text text-transparent animate-slide-in-up animation-delay-200">
            MY WISHLIST
          </h1>

          <p className="text-gray-700 font-medium text-[16px] sm:text-[18px] lg:text-[20px] mt-6 max-w-3xl leading-relaxed animate-fade-in animation-delay-400">
            Save your favorite beauty essentials in one place. Keep track of the cosmetics you love and plan your next purchase easily.
          </p>
        </div>
      </div>

      {/* Product Cards */}
      <div className="max-w-7xl mx-auto px-6 mt-12 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            {wishlistItems.length} Items in Your Wishlist
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer animate-fade-in-up transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => navigate("/detail")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="absolute inset-[2px] bg-white rounded-3xl z-10"></div>

              <div className="relative z-20">
                {/* Image */}
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

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-8 group-hover:translate-x-0">
                    <button
                      onClick={(e) => toggleWishlist(product.id, e)}
                      className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                    >
                      {wishlistItems.includes(product.id) ? (
                        <IoHeart className="text-pink-500" size={20} />
                      ) : (
                        <IoHeartOutline size={20} />
                      )}
                    </button>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Content */}
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

                  <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-full font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                    <IoCartOutline size={20} />
                    Add to Cart
                  </button>
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
