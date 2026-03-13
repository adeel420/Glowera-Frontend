import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProducts,
  fetchProductsByColor,
} from "../redux/slice/productsSlice";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import toast from "react-hot-toast";

const Shop = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);
  const [likedProducts, setLikedProducts] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const toggleLike = (productId, e) => {
    e.stopPropagation();
    setLikedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  const handleColorFilter = (colorName) => {
    if (selectedColor === colorName) {
      setSelectedColor(null);
      dispatch(fetchAllProducts());
    } else {
      setSelectedColor(colorName);
      dispatch(fetchProductsByColor(colorName));
    }
  };

  const filteredProducts = products.filter((product) =>
    product.title?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Extract unique colors from all products
  const allColors = [
    ...new Set(products.flatMap((p) => p.colors?.map((c) => c.name) || [])),
  ];

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
            Discover a wide range of beauty and skincare products crafted to
            enhance your natural glow.
          </p>
        </div>
      </div>

      {/* Filters & Products Section */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-6 py-16">
        {/* Filter section */}
        <aside className="lg:w-[300px] bg-white rounded-2xl p-6 h-fit lg:sticky top-4 shadow-lg border border-pink-100 animate-fade-in">
          <div className="mb-8">
            <h3 className="text-lg font-bold uppercase tracking-wide mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent border-b-2 border-pink-200 pb-3">
              Colors
            </h3>
            <div className="space-y-3">
              {allColors.length > 0 ? (
                allColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => handleColorFilter(color)}
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedColor === color
                        ? "bg-pink-500 text-white"
                        : "bg-pink-50 text-gray-700 hover:bg-pink-100"
                    }`}
                  >
                    {color}
                  </button>
                ))
              ) : (
                <p className="text-gray-500 text-sm">No colors available</p>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent border-b-2 border-pink-200 pb-3">
              Search
            </h3>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-500 transition-all"
            />
          </div>

          {selectedColor && (
            <button
              onClick={() => {
                setSelectedColor(null);
                dispatch(fetchAllProducts());
              }}
              className="w-full mt-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2 rounded-lg font-bold uppercase tracking-wide hover:shadow-lg transition-all"
            >
              Clear Filters
            </button>
          )}
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
            <p className="text-gray-600 mt-2">
              {filteredProducts.length} products found
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {status === "loading" ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">Loading products...</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No products found</p>
              </div>
            ) : (
              filteredProducts.map((product, index) => (
                <div
                  key={product._id}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => navigate(`/detail/${product._id}`)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  <div className="absolute inset-[2px] bg-white rounded-3xl z-10"></div>

                  <div className="relative z-20">
                    <div className="relative overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50 p-6 h-[280px] flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-pink-100 group-hover:to-rose-100 transition-all duration-500">
                      <img
                        src={product.images?.[0]}
                        alt={product.title}
                        className="w-full h-full object-contain transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 drop-shadow-lg"
                      />

                      {product.discountPercentage && (
                        <div className="absolute top-4 left-4 animate-bounce-slow">
                          <span className="relative block bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs px-4 py-2 rounded-full font-bold shadow-xl">
                            🎉 {product.discountPercentage}% OFF
                          </span>
                        </div>
                      )}

                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-8 group-hover:translate-x-0">
                        <button
                          onClick={(e) => toggleLike(product._id, e)}
                          className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                        >
                          {likedProducts.includes(product._id) ? (
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
                        {product.category?.name || "Beauty"}
                      </h3>
                      <h2 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-rose-600 group-hover:bg-clip-text transition-all duration-300 line-clamp-2 min-h-[56px]">
                        {product.title}
                      </h2>

                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-base">
                            ★
                          </span>
                        ))}
                        <span className="text-xs text-gray-500 ml-1 font-semibold">
                          (4.9)
                        </span>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                            ${product.exactPrice}
                          </span>
                          {product.discountPrice && (
                            <span className="text-sm text-gray-400 line-through">
                              ${product.discountPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      {product.colors && product.colors.length > 0 && (
                        <div className="flex gap-2 mb-4">
                          {product.colors.map((color) => (
                            <div
                              key={color.name}
                              className="w-6 h-6 rounded-full border-2 border-gray-300 hover:border-pink-500 transition-all"
                              style={{ backgroundColor: color.hexCode }}
                              title={color.name}
                            />
                          ))}
                        </div>
                      )}

                      <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-full font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:shadow-2xl hover:scale-105">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
