import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoHeart, IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllWishlist, fetchRemoveWishlist } from "../redux/slice/wishlistSlice";
import { fetchLoginData } from "../redux/slice/authSlices/loginSlice";
import { fetchCreateCart } from "../redux/slice/cartSlice";
import { toast } from "react-hot-toast";

const Wishlist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { wishlist, status } = useSelector((state) => state.wishlist);
  const { user } = useSelector((state) => state.login);
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(fetchLoginData(token));
  }, [dispatch]);

  useEffect(() => {
    if (user?.id) {
      dispatch(fetchAllWishlist({ userId: user.id }));
    }
  }, [dispatch, user?.id]);

  const products = wishlist?.products || [];

  const handleRemove = (productId) => {
    dispatch(fetchRemoveWishlist({ userId: user.id, productId }));
  };

  const handleAddToCart = async (productId) => {
    if (!token) return toast.error("Please login first");
    const result = await dispatch(fetchCreateCart({ products: productId, quantity: 1, user: user.id, color: null }));
    if (fetchCreateCart.fulfilled.match(result)) {
      toast.success("Added to cart!");
    } else {
      toast.error("Failed to add to cart");
    }
  };

  return (
    <div className="pb-16 bg-gradient-to-br from-pink-50 via-white to-rose-50 min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 min-h-[380px] w-full flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative z-10 animate-fade-in-up">
          <h1 className="red-text text-[26px] sm:text-[30px] lg:text-[36px] bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            💖 Your Favorites
          </h1>
          <h1 className="text-[36px] sm:text-[46px] lg:text-[60px] font-bold mt-3 bg-gradient-to-r from-pink-700 to-rose-700 bg-clip-text text-transparent">
            MY WISHLIST
          </h1>
          <p className="text-gray-700 font-medium text-[16px] sm:text-[18px] mt-4 max-w-2xl leading-relaxed">
            Save your favorite beauty essentials in one place.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 relative z-10">

        {/* Loading */}
        {status === "loading" && (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-pink-500 border-t-transparent"></div>
          </div>
        )}

        {/* Empty */}
        {status !== "loading" && products.length === 0 && (
          <div className="bg-white rounded-3xl shadow-lg border-2 border-pink-100 p-16 text-center max-w-xl mx-auto">
            <p className="text-6xl mb-4">💔</p>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Your wishlist is empty</h3>
            <p className="text-gray-500 mb-6">Add products you love to your wishlist</p>
            <button
              onClick={() => navigate("/shop")}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all"
            >
              Shop Now
            </button>
          </div>
        )}

        {/* Products */}
        {status !== "loading" && products.length > 0 && (
          <>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                {products.length} Items in Your Wishlist
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((item, index) => {
                const product = item.product;
                return (
                  <div
                    key={item._id}
                    className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer animate-fade-in-up transform hover:-translate-y-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => navigate(`/detail/${product?._id}`)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                    <div className="absolute inset-[2px] bg-white rounded-3xl z-10"></div>

                    <div className="relative z-20">
                      {/* Image */}
                      <div className="relative overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50 p-6 h-[260px] flex items-center justify-center">
                        <img
                          src={product?.images?.[0]}
                          alt={product?.title}
                          className="w-full h-full object-contain transform group-hover:scale-110 transition-all duration-700"
                          loading="lazy"
                        />

                        {product?.discountPercentage > 0 && (
                          <div className="absolute top-4 left-4">
                            <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                              {product.discountPercentage}% OFF
                            </span>
                          </div>
                        )}

                        {/* Remove from wishlist */}
                        <button
                          onClick={(e) => { e.stopPropagation(); handleRemove(product?._id); }}
                          className="absolute top-4 right-4 bg-white/90 p-2.5 rounded-full shadow-lg hover:bg-red-50 transition-all"
                        >
                          <IoHeart className="text-pink-500" size={20} />
                        </button>
                      </div>

                      {/* Info */}
                      <div className="p-5">
                        <span className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                          {product?.category?.name}
                        </span>
                        <h2 className="text-base font-bold text-gray-800 mt-1 mb-3 line-clamp-2 min-h-[48px]">
                          {product?.title}
                        </h2>

                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-sm">★</span>
                          ))}
                          <span className="text-xs text-gray-500 ml-1">(4.9)</span>
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                            Rs {product?.exactPrice}
                          </span>
                          {product?.discountPrice > 0 && (
                            <span className="text-sm text-gray-400 line-through">Rs {product?.discountPrice}</span>
                          )}
                        </div>

                        <button
                          onClick={(e) => { e.stopPropagation(); handleAddToCart(product?._id); }}
                          className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-full font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:shadow-xl flex items-center justify-center gap-2"
                        >
                          <IoCartOutline size={18} /> Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
