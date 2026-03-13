import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory } from "../redux/slice/productsSlice";
import { fetchCategories } from "../redux/slice/categoriesSlice";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";

const CategoryProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id: categoryId } = useParams();
  
  const { products, status } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);
  
  const [likedProducts, setLikedProducts] = useState([]);
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState("all");

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categoryId) {
      dispatch(fetchProductsByCategory(categoryId));
    }
  }, [dispatch, categoryId]);

  const currentCategory = categories.find((cat) => cat._id === categoryId);

  const toggleLike = (productId) => {
    setLikedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  // Filter and sort products
  let filteredProducts = [...products];

  // Price filter
  if (priceRange !== "all") {
    filteredProducts = filteredProducts.filter((product) => {
      const price = product.exactPrice;
      switch (priceRange) {
        case "under500":
          return price < 500;
        case "500-1500":
          return price >= 500 && price <= 1500;
        case "1500-3000":
          return price >= 1500 && price <= 3000;
        case "above3000":
          return price > 3000;
        default:
          return true;
      }
    });
  }

  // Sort products
  if (sortBy === "price-low") {
    filteredProducts.sort((a, b) => a.exactPrice - b.exactPrice);
  } else if (sortBy === "price-high") {
    filteredProducts.sort((a, b) => b.exactPrice - a.exactPrice);
  } else if (sortBy === "name") {
    filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4 animate-fade-in-up">
            {currentCategory?.image ? (
              <img
                src={currentCategory.image}
                alt={currentCategory.name}
                className="w-16 h-16 rounded-2xl object-cover shadow-lg"
              />
            ) : (
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <BiCategory className="text-3xl" />
              </div>
            )}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold animate-slide-in-down">
                {currentCategory?.name || "Products"}
              </h1>
              <p className="text-white/90 mt-2">
                {filteredProducts.length} Products Available
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border-2 border-pink-200 p-6 sticky top-6">
              <div className="flex items-center gap-2 mb-6">
                <FiFilter className="text-pink-500 text-xl" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Filters
                </h2>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-800 mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category._id}
                      onClick={() => navigate(`/category/${category._id}`)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 ${
                        categoryId === category._id
                          ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg"
                          : "hover:bg-pink-50 text-gray-700"
                      }`}
                    >
                      {category.image ? (
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-8 h-8 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-400 rounded-lg flex items-center justify-center">
                          <BiCategory className="text-white text-sm" />
                        </div>
                      )}
                      <span className="font-semibold">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-800 mb-3">Price Range</h3>
                <div className="space-y-2">
                  {[
                    { value: "all", label: "All Prices" },
                    { value: "under500", label: "Under Rs 500" },
                    { value: "500-1500", label: "Rs 500 - 1500" },
                    { value: "1500-3000", label: "Rs 1500 - 3000" },
                    { value: "above3000", label: "Above Rs 3000" },
                  ].map((range) => (
                    <label
                      key={range.value}
                      className="flex items-center gap-3 cursor-pointer hover:bg-pink-50 p-2 rounded-lg transition-all"
                    >
                      <input
                        type="radio"
                        name="priceRange"
                        value={range.value}
                        checked={priceRange === range.value}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-4 h-4 text-pink-500 focus:ring-pink-500"
                      />
                      <span className="text-gray-700 font-medium">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h3 className="font-bold text-gray-800 mb-3">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                >
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {status === "loading" ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-pink-500 border-t-transparent"></div>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg border-2 border-pink-200 p-12 text-center">
                <BiCategory className="text-6xl text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  No Products Found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your filters or browse other categories
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product._id}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => navigate(`/detail/${product._id}`)}
                  >
                    {/* Product Image */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50 p-6 h-64 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-pink-100 group-hover:to-rose-100 transition-all duration-500">
                      <img
                        src={product.images?.[0]}
                        alt={product.title}
                        className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />

                      {/* Discount Badge */}
                      {product.discountPercentage > 0 && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                            {product.discountPercentage}% OFF
                          </span>
                        </div>
                      )}

                      {/* Wishlist Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLike(product._id);
                        }}
                        className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                      >
                        {likedProducts.includes(product._id) ? (
                          <IoHeart className="text-pink-500" size={20} />
                        ) : (
                          <IoHeartOutline size={20} />
                        )}
                      </button>
                    </div>

                    {/* Product Info */}
                    <div className="p-5">
                      <span className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                        {product.category?.name}
                      </span>

                      <h3 className="text-lg font-bold text-gray-800 mt-2 mb-3 line-clamp-2 min-h-[56px] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-rose-600 group-hover:bg-clip-text transition-all">
                        {product.title}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-sm">
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">(4.9)</span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between mb-3">
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
                      </div>

                      {/* Stock Status */}
                      <div className="flex items-center gap-2 mb-3">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            product.stock > 0 ? "bg-green-500" : "bg-red-500"
                          } animate-pulse`}
                        ></div>
                        <span
                          className={`text-xs font-semibold ${
                            product.stock > 0 ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {product.stock > 0 ? "In Stock" : "Out of Stock"}
                        </span>
                      </div>

                      {/* Add to Cart Button */}
                      <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-full font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:shadow-xl">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
