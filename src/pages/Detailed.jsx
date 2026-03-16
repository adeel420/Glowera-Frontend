import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../redux/slice/productsSlice";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { fetchLoginData } from "../redux/slice/authSlices/loginSlice";
import { fetchCreateCart } from "../redux/slice/cartSlice";
import Loader from "../components/loader/Loader";

const Detailed = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isLiked, setIsLiked] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const { selectedProduct } = useSelector((state) => state.products);
  const { status } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const { id } = useParams();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchLoginData(token));
  }, [dispatch]);

  const handleCart = async (e) => {
    e.preventDefault();
    if (!token) {
      return toast.error("Please login first");
    }
    if (!user?.id) {
      return toast.error("User not found, please login again");
    }
    const result = await dispatch(
      fetchCreateCart({
        products: selectedProduct?._id,
        quantity,
        user: user?.id,
        color: selectedColor,
      }),
    );
    if (fetchCreateCart.fulfilled.match(result)) {
      toast.success("Added to cart successfully!");
    } else {
      toast.error(result.payload?.error || "Failed to add to cart");
    }
  };

  useEffect(() => {
    if (selectedProduct?.colors?.length > 0) {
      setSelectedColor(selectedProduct.colors[0]);
    }
  }, [selectedProduct]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2 days ago",
      comment:
        "Absolutely love this product! It made my skin feel so smooth and radiant.",
    },
    {
      id: 2,
      name: "Emily Davis",
      rating: 4,
      date: "1 week ago",
      comment: "Great quality and fast delivery. Highly recommend!",
    },
    {
      id: 3,
      name: "Michael Brown",
      rating: 5,
      date: "2 weeks ago",
      comment: "Best purchase ever! Will definitely buy again.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-rose-50 py-12 px-6">
      {status === "loading" && <Loader />}
      <div className="max-w-7xl mx-auto">
        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl p-8 border-2 border-pink-100 animate-fade-in-up">
          {/* Images */}
          <div>
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 mb-4 relative overflow-hidden group">
              <div className="absolute top-4 right-4 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
              <img
                src={selectedProduct?.images?.[selectedImage] || assets.heroImg}
                className="w-full h-[450px] object-contain transform group-hover:scale-110 transition-transform duration-700"
                alt="Product"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {selectedProduct?.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setSelectedImage(index)}
                  className={`h-[100px] w-full object-cover rounded-2xl cursor-pointer border-2 transition-all duration-300 hover:scale-105 ${
                    selectedImage === index
                      ? "border-pink-500 shadow-lg"
                      : "border-pink-200 hover:border-pink-400"
                  }`}
                  alt={`Thumbnail ${index + 1}`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-fade-in-up animation-delay-200">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
              {selectedProduct?.title}
            </h1>
            <p className="text-sm uppercase tracking-wide text-pink-500 font-bold mb-4">
              {selectedProduct?.category?.name}
            </p>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-600 font-semibold">
                (24 reviews)
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Rs {selectedProduct?.exactPrice}
              </span>
              {selectedProduct?.discountPrice > 0 && (
                <>
                  <span className="text-xl text-gray-400 line-through">
                    Rs {selectedProduct?.discountPrice}
                  </span>
                  <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm px-4 py-1 rounded-full font-bold">
                    {selectedProduct?.discountPercentage}%
                  </span>
                </>
              )}
            </div>

            <p className="text-gray-600 font-light leading-relaxed mb-6">
              {selectedProduct?.subtitle}
            </p>

            <div className="border-t border-b border-pink-200 py-6 mb-6 space-y-4">
              {/* Colors */}
              {selectedProduct?.colors?.length > 0 && (
                <div className="flex items-start gap-3">
                  <span className="text-sm uppercase tracking-wide font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent w-24 pt-2">
                    Color:
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    {selectedProduct.colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(color)}
                        className="relative group"
                        title={color.name}
                      >
                        <div
                          className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                            selectedColor?.hexCode === color.hexCode
                              ? "border-pink-500 scale-110 shadow-lg"
                              : "border-gray-300 hover:border-pink-400 hover:scale-105"
                          }`}
                          style={{ backgroundColor: color.hexCode }}
                        ></div>
                        {selectedColor?.hexCode === color.hexCode && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                          {color.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="flex items-center gap-3">
                <span className="text-sm uppercase tracking-wide font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent w-24">
                  Quantity:
                </span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 cursor-pointer rounded-full bg-pink-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white transition-all font-semibold"
                  >
                    −
                  </button>
                  <span className="w-12 text-center font-bold text-lg">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 cursor-pointer rounded-full bg-pink-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white transition-all font-semibold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Stock */}
              <div className="flex items-center gap-3">
                <span className="text-sm uppercase tracking-wide font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent w-24">
                  Stock:
                </span>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full animate-pulse ${selectedProduct?.stock > 0 ? "bg-green-500" : "bg-red-500"}`}
                  ></div>
                  <span
                    className={`font-bold ${selectedProduct?.stock > 0 ? "text-green-600" : "text-red-600"}`}
                  >
                    {selectedProduct?.stock > 0 ? "In Stock" : "Out of Stock"} -
                    ({selectedProduct?.stock})
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-full font-bold uppercase tracking-wide cursor-pointer hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={handleCart}
              >
                Add to Cart
              </button>
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="w-14 h-14 border-2 cursor-pointer border-pink-300 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:border-transparent hover:text-white transition-all flex items-center justify-center group"
              >
                {isLiked ? (
                  <IoHeart className="text-2xl text-pink-500 group-hover:text-white" />
                ) : (
                  <IoHeartOutline className="text-2xl group-hover:text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12 bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-pink-100 animate-fade-in-up animation-delay-400">
          <div className="flex border-b-2 border-pink-100">
            <button
              onClick={() => setActiveTab("description")}
              className={`flex-1 py-4 px-6 font-bold uppercase tracking-wide cursor-pointer transition-all ${
                activeTab === "description"
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white"
                  : "text-gray-600 hover:bg-pink-50"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`flex-1 py-4 px-6 font-bold uppercase tracking-wide cursor-pointer transition-all ${
                activeTab === "reviews"
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white"
                  : "text-gray-600 hover:bg-pink-50"
              }`}
            >
              Reviews (24)
            </button>
          </div>

          <div className="p-8">
            {activeTab === "description" ? (
              <div className="space-y-4">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
                  Product Description
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {selectedProduct?.description}
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-6">
                  Customer Reviews
                </h3>
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-pink-200 pb-6 last:border-0"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg">
                          {review.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? "fill-current"
                                    : "fill-gray-300"
                                }`}
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">
                            {review.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {review.comment}
                    </p>
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

export default Detailed;
