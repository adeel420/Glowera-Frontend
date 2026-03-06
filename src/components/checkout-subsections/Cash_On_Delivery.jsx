import React from "react";
import { useNavigate } from "react-router-dom";

const Cash_On_Delivery = () => {
  const navigate = useNavigate();
  return (
    <div className="px-6 py-16 ">
      <div className="bg-[#faf8f7] py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h1 className="text-3xl lg:text-4xl uppercase font-light text-gray-800">
              Billing details
            </h1>
            <p className="font-light text-[15px] mt-3 leading-relaxed text-gray-600">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-normal uppercase tracking-wide text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-normal uppercase tracking-wide text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-normal uppercase tracking-wide text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-normal uppercase tracking-wide text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all"
                  placeholder="+1 (234) 567-890"
                />
              </div>

              <div>
                <label className="block text-sm font-normal uppercase tracking-wide text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all"
                  placeholder="House no. 1, Street no. 1, City, Country"
                />
              </div>

              <div>
                <label className="block text-sm font-normal uppercase tracking-wide text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all"
                  placeholder="Lahore"
                />
              </div>

              <div>
                <label className="block text-sm font-normal uppercase tracking-wide text-gray-700 mb-2">
                  State / Province
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all"
                  placeholder="Punjab"
                />
              </div>

              <div>
                <label className="block text-sm font-normal uppercase tracking-wide text-gray-700 mb-2">
                  Postal Code
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all"
                  placeholder="Lahore"
                />
              </div>

              <div>
                <label className="block text-sm font-normal uppercase tracking-wide text-gray-700 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all"
                  placeholder="Pakistan"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#be4544] text-white py-3 rounded-lg cursor-pointer font-semibold uppercase tracking-wide hover:bg-[#a03d3c] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Checkout Section */}
          <div className="lg:col-span-1 sticky top-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-2xl font-light uppercase tracking-wide text-gray-800 mb-6 border-b pb-4">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span className="font-light">Subtotal</span>
                  <span className="font-semibold">
                    {/* ${subtotal.toFixed(2)} */} 12
                  </span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span className="font-light">Shipping</span>
                  <span className="font-semibold">
                    {/* ${shipping.toFixed(2)} */} 30
                  </span>
                </div>
                <div className="border-t pt-4 flex justify-between text-lg">
                  <span className="font-normal uppercase tracking-wide">
                    Total
                  </span>
                  <span className="font-bold text-[#be4544]">
                    {/* ${total.toFixed(2)} */} 15
                  </span>
                </div>
              </div>

              <button
                className="w-full bg-[#be4544] text-white py-3 rounded-lg font-semibold uppercase tracking-wide hover:bg-[#a03d3c] transition-all duration-300 mb-3 cursor-pointer"
                onClick={() => navigate("/checkout")}
              >
                Place Order
              </button>

              <button
                className="w-full bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold uppercase tracking-wide hover:border-[#be4544] hover:text-[#be4544] transition-all duration-300 cursor-pointer"
                onClick={() => navigate("/shop")}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cash_On_Delivery;
