import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCart,
  fetchUpdateCartItem,
  fetchRemoveFromCart,
} from "../redux/slice/cartSlice";
import { fetchLoginData } from "../redux/slice/authSlices/loginSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, status } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.login);
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(fetchLoginData(token));
  }, [dispatch]);

  useEffect(() => {
    if (user?.id) {
      dispatch(fetchAllCart({ userId: user.id }));
    }
  }, [dispatch, user?.id]);

  const products = cart?.products || [];

  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty < 1) return;
    dispatch(
      fetchUpdateCartItem({ cartId: cart._id, productId, quantity: newQty }),
    );
  };

  const handleRemove = (productId) => {
    dispatch(fetchRemoveFromCart({ cartId: cart._id, productId }));
  };

  const subtotal = products.reduce((sum, item) => {
    const price = item.product?.exactPrice || 0;
    return sum + price * item.quantity;
  }, 0);

  const shipping = subtotal > 0 ? 200 : 0;
  const total = subtotal + shipping;

  return (
    <div className="py-12 px-6 bg-gradient-to-br from-pink-50 via-white to-rose-50 min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="red-text text-[32px] lg:text-[36px] bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
            🛒 Your Cart
          </h2>
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            SHOPPING CART
          </h1>
          <p className="font-light text-[16px] mt-4 leading-relaxed text-gray-600">
            You have{" "}
            <span className="font-bold text-pink-600">
              {products.length} items
            </span>{" "}
            in your cart
          </p>
        </div>

        {/* Loading */}
        {status === "loading" && (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-pink-500 border-t-transparent"></div>
          </div>
        )}

        {/* Empty Cart */}
        {status !== "loading" && products.length === 0 && (
          <div className="bg-white rounded-3xl shadow-lg border-2 border-pink-100 p-16 text-center max-w-xl mx-auto">
            <p className="text-6xl mb-4">🛒</p>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Your cart is empty
            </h3>
            <p className="text-gray-500 mb-6">
              Add some products to get started
            </p>
            <button
              onClick={() => navigate("/shop")}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all"
            >
              Shop Now
            </button>
          </div>
        )}

        {/* Cart Items */}
        {status !== "loading" && products.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {products.map((item, index) => (
                <div
                  key={item._id}
                  className="bg-white rounded-3xl shadow-lg p-6 border-2 border-pink-100 hover:shadow-2xl transition-all duration-500 animate-fade-in-up hover:scale-[1.01]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    {/* Image */}
                    <div className="w-32 h-32 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-3 flex-shrink-0 overflow-hidden">
                      <img
                        src={item.product?.images?.[0]}
                        alt={item.product?.title}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg font-bold text-gray-800 mb-1">
                        {item.product?.title}
                      </h3>
                      <p className="text-sm text-pink-500 font-semibold mb-1">
                        {item.product?.category?.name}
                      </p>
                      {item.color && (
                        <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                          <span className="text-xs text-gray-500">Color:</span>
                          <div
                            className="w-4 h-4 rounded-full border border-gray-300"
                            style={{ backgroundColor: item.color?.hexCode }}
                          ></div>
                          <span className="text-xs text-gray-600">
                            {item.color?.name}
                          </span>
                        </div>
                      )}
                      <p className="text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                        Rs {item.product?.exactPrice}
                      </p>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          handleUpdateQuantity(
                            item.product?._id,
                            item.quantity - 1,
                          )
                        }
                        className="w-10 h-10 rounded-full bg-pink-100 cursor-pointer hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white transition-all font-bold"
                      >
                        −
                      </button>
                      <span className="w-10 text-center font-bold text-lg">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleUpdateQuantity(
                            item.product?._id,
                            item.quantity + 1,
                          )
                        }
                        className="w-10 h-10 rounded-full bg-pink-100 cursor-pointer hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white transition-all font-bold"
                      >
                        +
                      </button>
                    </div>

                    {/* Total & Remove */}
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-lg font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                        Rs{" "}
                        {(
                          item.product?.exactPrice * item.quantity
                        ).toLocaleString()}
                      </p>
                      <button
                        onClick={() => handleRemove(item.product?._id)}
                        className="p-2 rounded-full cursor-pointer hover:bg-red-100 text-red-400 hover:text-red-600 transition-all"
                      >
                        <IoTrashOutline size={22} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-4 border-2 border-pink-100 animate-fade-in-up animation-delay-400">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-6 pb-4 border-b-2 border-pink-200">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span className="font-light">Subtotal</span>
                    <span className="font-bold">
                      Rs {subtotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span className="font-light">Shipping</span>
                    <span className="font-bold">Rs {shipping}</span>
                  </div>
                  <div className="border-t-2 border-pink-200 pt-4 flex justify-between text-xl">
                    <span className="font-bold uppercase tracking-wide">
                      Total
                    </span>
                    <span className="font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                      Rs {total.toLocaleString()}
                    </span>
                  </div>
                </div>

                <button
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-full font-bold uppercase tracking-wide hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-3"
                  onClick={() => navigate("/checkout")}
                >
                  Proceed to Checkout
                </button>

                <button
                  className="w-full bg-white border-2 border-pink-300 text-pink-600 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-pink-50 transition-all duration-300"
                  onClick={() => navigate("/shop")}
                >
                  Continue Shopping
                </button>

                <div className="mt-6 pt-6 border-t-2 border-pink-200 space-y-3">
                  {[
                    { icon: "✓", text: "Secure Checkout" },
                    { icon: "🚚", text: "Free Shipping Over Rs 2000" },
                    { icon: "↩", text: "Easy Returns" },
                  ].map((badge) => (
                    <div
                      key={badge.text}
                      className="flex items-center gap-3 text-sm text-gray-600"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">{badge.icon}</span>
                      </div>
                      <span>{badge.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
