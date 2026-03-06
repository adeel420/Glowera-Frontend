import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Online_Payment = () => {
  const [files, setFiles] = useState();
  const navigate = useNavigate();
  return (
    <div className="px-6 py-16 ">
      {/* Bank Details */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl uppercase font-light text-gray-800">
            Bank Account Details
          </h1>
          <p className="font-light text-[15px] mt-3 leading-relaxed text-gray-600">
            Please transfer the payment to the following bank account and upload the proof below.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto border-t-4 border-[#be4544]">
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600 font-light uppercase tracking-wide text-sm">Bank Name</span>
              <span className="text-gray-800 font-semibold text-lg">Meezan Bank</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600 font-light uppercase tracking-wide text-sm">Account Title</span>
              <span className="text-gray-800 font-semibold text-lg">Your Company Name</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600 font-light uppercase tracking-wide text-sm">Account Number</span>
              <span className="text-gray-800 font-semibold text-lg font-mono">1234567890123456</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-gray-600 font-light uppercase tracking-wide text-sm">IBAN</span>
              <span className="text-gray-800 font-semibold text-lg font-mono">PK12MEZN0000001234567890</span>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-[#faf8f7] rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              💡 After making the payment, please upload the transaction receipt below to complete your order.
            </p>
          </div>
        </div>
      </div>

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

              <div>
                <label className="block text-sm font-normal uppercase tracking-wide text-gray-700 mb-2">
                  Upload Payment Proof
                </label>

                <label
                  htmlFor="paymentProof"
                  className="h-[150px] flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer text-gray-500 hover:text-[#be4544] hover:border-[#be4544] transition-all duration-300"
                >
                  <span className="text-5xl font-light leading-none">+</span>
                  <span className="text-sm mt-2">
                    Click to upload screenshot
                  </span>
                </label>

                <input
                  id="paymentProof"
                  type="file"
                  accept="image/*,.pdf"
                  className="hidden"
                  onChange={(e) => setFiles(e.target.files[0])}
                />
              </div>

              <div className="">
                {files && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">
                      Selected file: {files.name}
                    </p>
                    <img
                      src={URL.createObjectURL(files)}
                      alt="Preview"
                      className="mt-2 max-h-32 rounded-lg border"
                    />
                  </div>
                )}
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

export default Online_Payment;
