import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { IoHeartOutline, IoHeart, IoEyeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../redux/slice/productsSlice";

const Featured_Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [likedProducts, setLikedProducts] = useState([]);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  // Get latest 8 products
  const featuredProducts = products.slice(0, 8);

  const toggleLike = (productId, e) => {
    e.stopPropagation();
    setLikedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
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
            Discover our exclusive range of premium skincare products crafted
            with natural ingredients for radiant, healthy skin.
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
            <p className="text-gray-600 mt-4 text-lg">
              Loved by thousands of customers
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => navigate(`/detail/${product._id}`)}
              >
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="absolute inset-[2px] bg-white rounded-3xl z-10"></div>

                {/* Content */}
                <div className="relative z-20">
                  {/* Product Image */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50 p-6 h-[280px] flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-pink-100 group-hover:to-rose-100 transition-all duration-500">
                    {/* Sparkle Effect */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                    <div className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-rose-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-200"></div>

                    <img
                      src={product.images?.[0] || assets.heroImg}
                      alt={product.name}
                      className="w-full h-full object-contain transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 drop-shadow-lg"
                      loading="lazy"
                    />

                    {/* Discount Badge */}
                    {product.discountPercentage > 0 && (
                      <div className="absolute top-4 left-4 animate-bounce-slow">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full blur-md opacity-75"></div>
                          <span className="relative block bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs px-4 py-2 rounded-full font-bold shadow-xl">
                            🎉 {product.discountPercentage}% OFF
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-8 group-hover:translate-x-0">
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
                      <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white transition-all duration-300 transform hover:scale-125 hover:rotate-12">
                        <IoEyeOutline size={20} />
                      </button>
                    </div>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 relative">
                    {/* Category Badge */}
                    <div className="inline-block mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                        {product.category?.name || "Product"}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-rose-600 group-hover:bg-clip-text transition-all duration-300 line-clamp-2 min-h-[56px]">
                      {product.title}
                    </h2>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className="text-yellow-400 text-base transform group-hover:scale-110 transition-transform duration-300"
                            style={{ transitionDelay: `${i * 50}ms` }}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-1 font-semibold">
                        (4.9)
                      </span>
                    </div>

                    {/* Price Section */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                          Rs {product.exactPrice}
                        </span>
                        {product.discountPrice > 0 && (
                          <span className="text-sm text-gray-400 line-through">
                            Rs {product.discountPrice}
                          </span>
                        )}
                      </div>
                      {product.discountPrice > 0 && (
                        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                          Save Rs {product.discountPrice}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart Button */}
                    <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3.5 rounded-full font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:shadow-2xl hover:scale-105 relative overflow-hidden">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <svg
                          className="w-5 h-5"
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
                        Add to Cart
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    </button>

                    {/* Stock Indicator */}
                    <div className="mt-3 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div
                        className={`w-2 h-2 rounded-full animate-pulse ${product.stock > 0 ? "bg-green-500" : "bg-red-500"}`}
                      ></div>
                      <span className="text-xs text-gray-600 font-medium">
                        {product.stock > 0
                          ? "In Stock - Fast Shipping"
                          : "Out of Stock"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12 animate-fade-in">
            <button
              onClick={() => navigate("/shop")}
              className="group relative uppercase text-white bg-gradient-to-r from-pink-500 to-rose-500 px-10 py-4 rounded-full font-bold overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl transform cursor-pointer hover:scale-105"
            >
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
