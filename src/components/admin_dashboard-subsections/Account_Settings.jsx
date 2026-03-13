import React, { useState } from "react";
import { FaCreditCard, FaMoneyBillWave, FaUniversity, FaSave } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import toast from "react-hot-toast";

const Account_Settings = () => {
  const [paymentSettings, setPaymentSettings] = useState({
    onlinePayment: true,
    cashOnDelivery: true,
  });

  const [bankDetails, setBankDetails] = useState({
    accountTitle: "",
    accountNumber: "",
    bankName: "",
    branchCode: "",
    iban: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePaymentToggle = (type) => {
    setPaymentSettings((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const handleBankDetailsChange = (e) => {
    const { name, value } = e.target;
    setBankDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveSettings = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("Settings saved successfully!");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="animate-fade-in-up">
      <div className="mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
          Account Settings
        </h2>
        <p className="text-gray-600">Manage payment methods and bank account details</p>
      </div>

      {/* Payment Methods Section */}
      <div className="bg-white rounded-2xl shadow-lg border-2 border-pink-200 p-6 mb-8 animate-fade-in-up">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
            <FaCreditCard className="text-white text-xl" />
          </div>
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Payment Methods
            </h3>
            <p className="text-gray-600 text-sm">Enable or disable payment options for customers</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Online Payment Toggle */}
          <div className="flex items-center justify-between p-5 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border-2 border-pink-200 hover:shadow-md transition-all">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-400 rounded-xl flex items-center justify-center shadow-lg">
                <FaCreditCard className="text-white text-2xl" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800">Online Payment</h4>
                <p className="text-sm text-gray-600">Accept payments via credit/debit cards</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={paymentSettings.onlinePayment}
                onChange={() => handlePaymentToggle("onlinePayment")}
                className="sr-only peer"
              />
              <div className="w-16 h-8 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-8 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-rose-500"></div>
            </label>
          </div>

          {/* Cash on Delivery Toggle */}
          <div className="flex items-center justify-between p-5 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border-2 border-pink-200 hover:shadow-md transition-all">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center shadow-lg">
                <FaMoneyBillWave className="text-white text-2xl" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800">Cash on Delivery</h4>
                <p className="text-sm text-gray-600">Accept cash payments on delivery</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={paymentSettings.cashOnDelivery}
                onChange={() => handlePaymentToggle("cashOnDelivery")}
                className="sr-only peer"
              />
              <div className="w-16 h-8 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-8 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-rose-500"></div>
            </label>
          </div>
        </div>

        {/* Payment Status Summary */}
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200">
          <p className="text-sm text-blue-800 font-semibold">
            ℹ️ Active Payment Methods: 
            <span className="ml-2">
              {paymentSettings.onlinePayment && "Online Payment"}
              {paymentSettings.onlinePayment && paymentSettings.cashOnDelivery && " • "}
              {paymentSettings.cashOnDelivery && "Cash on Delivery"}
              {!paymentSettings.onlinePayment && !paymentSettings.cashOnDelivery && "None (Please enable at least one)"}
            </span>
          </p>
        </div>
      </div>

      {/* Bank Account Details Section */}
      <div className="bg-white rounded-2xl shadow-lg border-2 border-pink-200 p-6 animate-fade-in-up animation-delay-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
            <FaUniversity className="text-white text-xl" />
          </div>
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Bank Account Details
            </h3>
            <p className="text-gray-600 text-sm">Update your bank account information</p>
          </div>
        </div>

        <form onSubmit={handleSaveSettings} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Account Title */}
            <div>
              <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                Account Title *
              </label>
              <input
                type="text"
                name="accountTitle"
                value={bankDetails.accountTitle}
                onChange={handleBankDetailsChange}
                required
                className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                placeholder="Enter account holder name"
              />
            </div>

            {/* Account Number */}
            <div>
              <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                Account Number *
              </label>
              <input
                type="text"
                name="accountNumber"
                value={bankDetails.accountNumber}
                onChange={handleBankDetailsChange}
                required
                className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                placeholder="Enter account number"
              />
            </div>

            {/* Bank Name */}
            <div>
              <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                Bank Name *
              </label>
              <input
                type="text"
                name="bankName"
                value={bankDetails.bankName}
                onChange={handleBankDetailsChange}
                required
                className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                placeholder="Enter bank name"
              />
            </div>

            {/* Branch Code */}
            <div>
              <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                Branch Code
              </label>
              <input
                type="text"
                name="branchCode"
                value={bankDetails.branchCode}
                onChange={handleBankDetailsChange}
                className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                placeholder="Enter branch code"
              />
            </div>
          </div>

          {/* IBAN */}
          <div>
            <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
              IBAN Number
            </label>
            <input
              type="text"
              name="iban"
              value={bankDetails.iban}
              onChange={handleBankDetailsChange}
              className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
              placeholder="Enter IBAN number (e.g., PK36ABCD0000001234567890)"
            />
          </div>

          {/* Info Box */}
          <div className="p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl border-2 border-yellow-200">
            <p className="text-sm text-yellow-800 font-semibold">
              ⚠️ Important: Make sure all bank details are correct. These details will be used for payment processing.
            </p>
          </div>

          {/* Save Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-xl font-bold uppercase tracking-wide hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </>
              ) : (
                <>
                  <FaSave />
                  Save Settings
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Current Settings Display */}
      <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-2xl shadow-lg p-6 mt-8 animate-fade-in-up animation-delay-400">
        <div className="flex items-center gap-3 mb-4">
          <MdAccountBalance className="text-3xl" />
          <h3 className="text-2xl font-bold">Current Configuration</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <p className="text-white/80 text-sm mb-1">Online Payment</p>
            <p className="text-2xl font-bold">
              {paymentSettings.onlinePayment ? "✓ Enabled" : "✗ Disabled"}
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <p className="text-white/80 text-sm mb-1">Cash on Delivery</p>
            <p className="text-2xl font-bold">
              {paymentSettings.cashOnDelivery ? "✓ Enabled" : "✗ Disabled"}
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <p className="text-white/80 text-sm mb-1">Bank Account</p>
            <p className="text-lg font-bold">
              {bankDetails.accountTitle || "Not Set"}
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <p className="text-white/80 text-sm mb-1">Bank Name</p>
            <p className="text-lg font-bold">
              {bankDetails.bankName || "Not Set"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account_Settings;
