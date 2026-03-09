import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { featuredProducts } from "../../data/Data";
import { useNavigate } from "react-router-dom";
import { IoHeartOutline, IoHeart, IoEyeOutline } from "react-icons/io5";

const Featured_Product = () => {
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
    <div className="relative">
      {/* Banner */}
      <div
        className="relative min-h-[500px] w-full flex flex-col items-center justify-center bg-center bg-cover overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(236, 72, 153, 0.85), rgba(244, 114, 182, 0.75)), url(${assets.makupGirl})`,
          backgroundPosition: "center",
        }}
      >
        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-3 h-3 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-white rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute bottom-32 left-40 w-2 h-2 bg-white rounded-full animate-ping animation-delay-2000"></div>
        </div>

        <div className="relative z-10 text-center px-6 animate-fade-in-up">
          <h1 className="red-text text-[28px] sm:text-[32px] lg:text-[38px] text-white mb-3 animate-slide-in-down">
            ✨ Premium Beauty Collection
          </h1>

          <h1 className="text-white text-[40px] sm:text-[52px] lg:text-[64px] font-bold mt-2 leading-tight animate-slide-in-up animation-delay-200">
            TRANSFORM YOUR
            <br />
            <span className="text-pink-200">BEAUTY ROUTINE</span>
          </h1>

          <p className="text-white/95 font-light text-[16px] sm:text-[18px] lg:text-[20px] mt-6 max-w-2xl mx-auto animate-fade-in animation-delay-400">
            Discover our exclusive range of premium skincare products crafted with natural ingredients for radiant, healthy skin.
          </p>

          <button className="group relative uppercase text-pink-600 bg-white border-2 border-white cursor-pointer mt-8 py-4 px-10 rounded-full font-bold hover:bg-transparent hover:text-white transition-all duration-300 shadow-2xl hover:shadow-white/20 transform hover:scale-105 animate-bounce-slow animation-delay-600">
            <span className="relative z-10">Explore Collection</span>
          </button>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-20 px-6 bg-gradient-to-br from-white via-pink-50 to-rose-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-200 to-rose-200 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="red-text text-[32px] lg:text-[36px] bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
              💖 Best Sellers
            </h1>
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              TRENDING PRODUCTS
            </h1>
            <p className="text-gray-600 mt-4 text-lg">Loved by thousands of customers</p>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => navigate("/detail")}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50 p-6 h-[250px] flex items-center justify-center">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-contain transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700"
                  />
                  
                  {/* Discount Badge */}
                  {product.discount && (
                    <span className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs px-4 py-2 rounded-full font-bold shadow-lg animate-pulse">
                      -{product.discount}% OFF
                    </span>
                  )}

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <button
                      onClick={(e) => toggleLike(product.id, e)}
                      className="bg-white p-3 rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      {likedProducts.includes(product.id) ? (
                        <IoHeart className="text-pink-500" size={20} />
                      ) : (
                        <IoHeartOutline size={20} />
                      )}
                    </button>
                    <button className="bg-white p-3 rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-110">
                      <IoEyeOutline size={20} />
                    </button>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-pink-500 mb-2">
                    {product.category}
                  </h3>
                  <h2 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors duration-300 line-clamp-2">
                    {product.name}
                  </h2>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">★</span>
                    ))}
                    <span className="text-xs text-gray-500 ml-1">(4.9)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
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

                  {/* Add to Cart Button */}
                  <button className="w-full mt-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:shadow-lg hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12 animate-fade-in">
            <button className="group relative uppercase text-white bg-gradient-to-r from-pink-500 to-rose-500 px-10 py-4 rounded-full font-bold overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              <span className="relative z-10">View All Products</span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured_Product;
