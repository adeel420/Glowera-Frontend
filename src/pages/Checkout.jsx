import React, { useState } from "react";
import Online_Payment from "../components/checkout-subsections/Online_Payment";
import Cash_On_Delivery from "../components/checkout-subsections/Cash_On_Delivery";

const Checkout = () => {
  const [selectedMethod, setSelectedMethod] = useState("online");
  
  return (
    <div className="py-16 px-6 bg-gradient-to-br from-pink-50 via-white to-rose-50 min-h-screen relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-300 to-rose-300 rounded-full filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="red-text text-[32px] lg:text-[36px] bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
            💳 Checkout
          </h2>
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            CHOOSE PAYMENT METHOD
          </h1>
          <p className="font-light text-[16px] mt-4 leading-relaxed text-gray-600">
            Select your preferred payment method to complete your order
          </p>
        </div>

        {/* Payment Method Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Online Payment */}
          <div
            className={`group relative p-8 rounded-3xl cursor-pointer transition-all duration-500 transform hover:scale-105 animate-fade-in-up ${
              selectedMethod === "online"
                ? "bg-gradient-to-br from-pink-500 to-rose-500 shadow-2xl"
                : "bg-white shadow-lg hover:shadow-2xl border-2 border-pink-100"
            }`}
            onClick={() => setSelectedMethod("online")}
          >
            {/* Checkmark */}
            <div
              className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                selectedMethod === "online"
                  ? "bg-white text-pink-500"
                  : "bg-pink-100 text-transparent"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div className="text-center">
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 ${
                  selectedMethod === "online"
                    ? "bg-white/20 backdrop-blur-sm"
                    : "bg-gradient-to-br from-pink-400 to-rose-400"
                }`}
              >
                <svg
                  className={`w-12 h-12 ${selectedMethod === "online" ? "text-white" : "text-white"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3
                className={`text-2xl font-bold uppercase tracking-wide mb-2 ${
                  selectedMethod === "online" ? "text-white" : "text-gray-800"
                }`}
              >
                Online Payment
              </h3>
              <p
                className={`text-sm ${
                  selectedMethod === "online" ? "text-white/90" : "text-gray-600"
                }`}
              >
                Pay securely with card or digital wallet
              </p>
            </div>
          </div>

          {/* Cash on Delivery */}
          <div
            className={`group relative p-8 rounded-3xl cursor-pointer transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-200 ${
              selectedMethod === "cod"
                ? "bg-gradient-to-br from-pink-500 to-rose-500 shadow-2xl"
                : "bg-white shadow-lg hover:shadow-2xl border-2 border-pink-100"
            }`}
            onClick={() => setSelectedMethod("cod")}
          >
            {/* Checkmark */}
            <div
              className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                selectedMethod === "cod"
                  ? "bg-white text-pink-500"
                  : "bg-pink-100 text-transparent"
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <div className="text-center">
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 ${
                  selectedMethod === "cod"
                    ? "bg-white/20 backdrop-blur-sm"
                    : "bg-gradient-to-br from-pink-400 to-rose-400"
                }`}
              >
                <svg
                  className={`w-12 h-12 ${selectedMethod === "cod" ? "text-white" : "text-white"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3
                className={`text-2xl font-bold uppercase tracking-wide mb-2 ${
                  selectedMethod === "cod" ? "text-white" : "text-gray-800"
                }`}
              >
                Cash on Delivery
              </h3>
              <p
                className={`text-sm ${
                  selectedMethod === "cod" ? "text-white/90" : "text-gray-600"
                }`}
              >
                Pay when you receive your order
              </p>
            </div>
          </div>
        </div>

        {/* Payment Method Content */}
        <div className="animate-fade-in-up animation-delay-400">
          {selectedMethod === "online" && <Online_Payment />}
          {selectedMethod === "cod" && <Cash_On_Delivery />}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
