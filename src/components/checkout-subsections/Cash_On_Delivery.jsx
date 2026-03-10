import React from "react";
import { useNavigate } from "react-router-dom";

const Cash_On_Delivery = () => {
  const navigate = useNavigate();
  
  return (
    <div className="px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Form */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-pink-100 animate-fade-in-up">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Billing Details
          </h1>
          <p className="font-light text-[16px] mt-3 leading-relaxed text-gray-600">
            Fill out the form below to complete your order
          </p>

          <form className="mt-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                placeholder="+1 (234) 567-890"
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                Complete Address
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                placeholder="House no. 1, Street no. 1, City, Country"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  City
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="Lahore"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  State / Province
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="Punjab"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  Postal Code
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="54000"
                />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  Country
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="Pakistan"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-full font-bold uppercase tracking-wide hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:sticky lg:top-4">
          <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-pink-100 animate-fade-in-up animation-delay-200">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-6 pb-4 border-b-2 border-pink-200">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-700">
                <span className="font-light">Subtotal</span>
                <span className="font-bold">$123.98</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span className="font-light">Shipping</span>
                <span className="font-bold">$5.99</span>
              </div>
              <div className="border-t-2 border-pink-200 pt-4 flex justify-between text-xl">
                <span className="font-bold uppercase tracking-wide">Total</span>
                <span className="font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  $129.97
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-4 rounded-2xl mb-6">
              <p className="text-sm text-gray-700 text-center font-medium">
                💵 Pay cash when you receive your order at your doorstep
              </p>
            </div>

            <button
              className="w-full bg-white border-2 border-pink-300 text-pink-600 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-pink-50 transition-all duration-300"
              onClick={() => navigate("/shop")}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cash_On_Delivery;
