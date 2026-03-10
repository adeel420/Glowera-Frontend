import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Radiant Lipstick",
      price: 25.0,
      quantity: 1,
      img: assets.makupGirl,
    },
    {
      id: 2,
      name: "Hydrating Face Serum",
      price: 45.99,
      quantity: 2,
      img: assets.makupGirl,
    },
    {
      id: 3,
      name: "Vitamin C Cream",
      price: 52.99,
      quantity: 1,
      img: assets.makupGirl,
    },
  ]);
  const navigate = useNavigate();

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <div className="py-12 px-6 bg-gradient-to-br from-pink-50 via-white to-rose-50 min-h-screen relative overflow-hidden">
      {/* Background Animation */}
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
            You have <span className="font-bold text-pink-600">{cartItems.length} items</span> in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-lg p-6 border-2 border-pink-100 hover:shadow-2xl transition-all duration-500 animate-fade-in-up hover:scale-[1.02]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* Product Image */}
                  <div className="relative group">
                    <div className="w-32 h-32 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-4 overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                    <p className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-10 h-10 rounded-full bg-pink-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white transition-all font-bold transform hover:scale-110"
                    >
                      −
                    </button>
                    <span className="w-12 text-center font-bold text-lg">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-10 h-10 rounded-full bg-pink-100 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white transition-all font-bold transform hover:scale-110"
                    >
                      +
                    </button>
                  </div>

                  {/* Total & Remove */}
                  <div className="flex flex-col items-center gap-3">
                    <p className="text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 rounded-full hover:bg-red-100 text-red-500 hover:text-red-600 transition-all transform hover:scale-110"
                    >
                      <IoTrashOutline size={24} />
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
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span className="font-light">Shipping</span>
                  <span className="font-bold">${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t-2 border-pink-200 pt-4 flex justify-between text-xl">
                  <span className="font-bold uppercase tracking-wide">Total</span>
                  <span className="font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                    ${total.toFixed(2)}
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

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t-2 border-pink-200 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                    <span className="text-white">✓</span>
                  </div>
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                    <span className="text-white">🚚</span>
                  </div>
                  <span>Free Shipping Over $50</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                    <span className="text-white">↩</span>
                  </div>
                  <span>30-Day Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
