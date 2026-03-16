import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Online_Payment = ({ bankDetails }) => {
  const [files, setFiles] = useState();
  const navigate = useNavigate();

  return (
    <div className="px-6 py-16">
      {/* Bank Details */}
      <div className="max-w-7xl mx-auto mb-12 animate-fade-in-up">
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Bank Account Details
          </h1>
          <p className="font-light text-[16px] mt-4 leading-relaxed text-gray-600">
            Please transfer the payment to the following bank account and upload the proof below.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl mx-auto border-t-4 border-pink-500 animate-fade-in-up animation-delay-200">
          <div className="space-y-4">
            {bankDetails?.BankName && (
              <div className="flex items-center justify-between py-3 border-b-2 border-pink-100">
                <span className="text-gray-600 font-bold uppercase tracking-wide text-sm">Bank Name</span>
                <span className="text-gray-800 font-bold text-lg">{bankDetails.BankName}</span>
              </div>
            )}
            {bankDetails?.AccountTitle && (
              <div className="flex items-center justify-between py-3 border-b-2 border-pink-100">
                <span className="text-gray-600 font-bold uppercase tracking-wide text-sm">Account Title</span>
                <span className="text-gray-800 font-bold text-lg">{bankDetails.AccountTitle}</span>
              </div>
            )}
            {bankDetails?.AccountNo && (
              <div className="flex items-center justify-between py-3 border-b-2 border-pink-100">
                <span className="text-gray-600 font-bold uppercase tracking-wide text-sm">Account Number</span>
                <span className="text-gray-800 font-bold text-lg font-mono">{bankDetails.AccountNo}</span>
              </div>
            )}
            {bankDetails?.iban && (
              <div className="flex items-center justify-between py-3">
                <span className="text-gray-600 font-bold uppercase tracking-wide text-sm">IBAN</span>
                <span className="text-gray-800 font-bold text-lg font-mono">{bankDetails.iban}</span>
              </div>
            )}
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl">
            <p className="text-sm text-gray-700 text-center font-medium">
              💡 After making the payment, please upload the transaction receipt below to complete your order.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Form */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-pink-100 animate-fade-in-up animation-delay-400">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Billing Details
          </h1>
          <p className="font-light text-[16px] mt-3 leading-relaxed text-gray-600">
            Fill out the form below to complete your order
          </p>

          <form className="mt-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="Doe" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="john@example.com" />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">Phone Number</label>
              <input type="tel" className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="+92 300 1234567" />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">Complete Address</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="House no. 1, Street no. 1, City" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">City</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="Lahore" />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">Postal Code</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="54000" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                Upload Payment Proof
              </label>
              <label htmlFor="paymentProof" className="h-[150px] flex flex-col items-center justify-center border-2 border-dashed border-pink-300 rounded-2xl cursor-pointer text-gray-500 hover:text-pink-600 hover:border-pink-500 hover:bg-pink-50 transition-all duration-300">
                <span className="text-5xl font-light leading-none">📤</span>
                <span className="text-sm mt-2 font-medium">Click to upload screenshot</span>
              </label>
              <input id="paymentProof" type="file" accept="image/*,.pdf" className="hidden" onChange={(e) => setFiles(e.target.files[0])} />
            </div>

            {files && (
              <div className="mt-4 p-4 bg-pink-50 rounded-2xl animate-fade-in">
                <p className="text-sm text-gray-700 font-medium mb-2">Selected file: {files.name}</p>
                <img src={URL.createObjectURL(files)} alt="Preview" className="mt-2 max-h-32 rounded-xl border-2 border-pink-200" />
              </div>
            )}

            <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-full font-bold uppercase tracking-wide hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:sticky lg:top-4">
          <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-pink-100 animate-fade-in-up animation-delay-600">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-6 pb-4 border-b-2 border-pink-200">
              Order Summary
            </h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-700">
                <span className="font-light">Subtotal</span>
                <span className="font-bold">Rs 123.98</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span className="font-light">Shipping</span>
                <span className="font-bold">Rs 200</span>
              </div>
              <div className="border-t-2 border-pink-200 pt-4 flex justify-between text-xl">
                <span className="font-bold uppercase tracking-wide">Total</span>
                <span className="font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Rs 323.98</span>
              </div>
            </div>
            <button className="w-full bg-white border-2 border-pink-300 text-pink-600 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-pink-50 transition-all duration-300" onClick={() => navigate("/shop")}>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Online_Payment;
