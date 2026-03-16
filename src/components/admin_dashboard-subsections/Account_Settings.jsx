import React, { useState, useEffect } from "react";
import { FaCreditCard, FaMoneyBillWave, FaUniversity, FaSave } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccountSettings, saveAccountSettings } from "../../redux/slice/accountSlice";

const Account_Settings = () => {
  const dispatch = useDispatch();
  const { settings, status, saveStatus } = useSelector((state) => state.account);

  const [accountSelection, setAccountSelection] = useState([]);
  const [bankDetails, setBankDetails] = useState({
    AccountTitle: "",
    AccountNo: "",
    BankName: "",
    iban: "",
  });

  useEffect(() => {
    dispatch(fetchAccountSettings());
  }, [dispatch]);

  // Jab settings API se aaye to form fill karo
  useEffect(() => {
    if (settings) {
      setAccountSelection(settings.accountSelection || []);
      setBankDetails({
        AccountTitle: settings.AccountTitle || "",
        AccountNo: settings.AccountNo || "",
        BankName: settings.BankName || "",
        iban: settings.iban || "",
      });
    }
  }, [settings]);

  const handleToggle = (method) => {
    setAccountSelection((prev) =>
      prev.includes(method) ? prev.filter((m) => m !== method) : [...prev, method]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (accountSelection.length === 0) {
      toast.error("Please select at least one payment method");
      return;
    }
    const result = await dispatch(saveAccountSettings({ accountSelection, ...bankDetails }));
    if (saveAccountSettings.fulfilled.match(result)) {
      toast.success("Settings saved successfully!");
    } else {
      toast.error(result.payload?.error || "Failed to save settings");
    }
  };

  const isSaving = saveStatus === "loading";

  return (
    <div className="animate-fade-in-up">
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-1">
          Account Settings
        </h2>
        <p className="text-gray-500 text-sm">Manage payment methods and bank account details</p>
      </div>

      {status === "loading" ? (
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-pink-500 border-t-transparent"></div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Payment Methods */}
          <div className="bg-white rounded-2xl shadow border-2 border-pink-200 p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow">
                <FaCreditCard className="text-white text-lg" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Payment Methods
                </h3>
                <p className="text-gray-500 text-xs">Enable or disable payment options for customers</p>
              </div>
            </div>

            <div className="space-y-3">
              {/* Online Payment */}
              <div className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${accountSelection.includes("online") ? "border-pink-400 bg-pink-50" : "border-pink-100 bg-gray-50"}`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-400 rounded-xl flex items-center justify-center shadow">
                    <FaCreditCard className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Online Payment</h4>
                    <p className="text-xs text-gray-500">Accept payments via bank transfer</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={accountSelection.includes("online")} onChange={() => handleToggle("online")} className="sr-only peer" />
                  <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-7 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-rose-500"></div>
                </label>
              </div>

              {/* Cash on Delivery */}
              <div className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${accountSelection.includes("cod") ? "border-pink-400 bg-pink-50" : "border-pink-100 bg-gray-50"}`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center shadow">
                    <FaMoneyBillWave className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Cash on Delivery</h4>
                    <p className="text-xs text-gray-500">Accept cash payments on delivery</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={accountSelection.includes("cod")} onChange={() => handleToggle("cod")} className="sr-only peer" />
                  <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-7 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-rose-500"></div>
                </label>
              </div>
            </div>

            {/* Status Summary */}
            <div className="mt-4 p-3 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-sm text-blue-800 font-semibold">
                ℹ️ Active:{" "}
                {accountSelection.length === 0
                  ? "None (Please enable at least one)"
                  : accountSelection.map((m) => (m === "online" ? "Online Payment" : "Cash on Delivery")).join(" • ")}
              </p>
            </div>
          </div>

          {/* Bank Details */}
          <div className="bg-white rounded-2xl shadow border-2 border-pink-200 p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow">
                <FaUniversity className="text-white text-lg" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Bank Account Details
                </h3>
                <p className="text-gray-500 text-xs">Shown to customers for online payment</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Account Title", name: "AccountTitle", placeholder: "e.g. Muhammad Ali" },
                { label: "Account Number", name: "AccountNo", placeholder: "e.g. 1234567890" },
                { label: "Bank Name", name: "BankName", placeholder: "e.g. HBL / Meezan Bank" },
                { label: "IBAN", name: "iban", placeholder: "e.g. PK36ABCD0000001234567890" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-bold text-pink-600 mb-1">{field.label}</label>
                  <input
                    type="text"
                    name={field.name}
                    value={bankDetails[field.name]}
                    onChange={(e) => setBankDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all text-sm"
                  />
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-yellow-50 rounded-xl border border-yellow-200">
              <p className="text-xs text-yellow-800 font-semibold">
                ⚠️ Bank details will be shown to customers when they choose Online Payment at checkout.
              </p>
            </div>
          </div>

          {/* Current Config */}
          <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-2xl shadow p-6">
            <div className="flex items-center gap-3 mb-4">
              <MdAccountBalance className="text-2xl" />
              <h3 className="text-xl font-bold">Current Configuration</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Online Payment", value: accountSelection.includes("online") ? "✓ Enabled" : "✗ Disabled" },
                { label: "Cash on Delivery", value: accountSelection.includes("cod") ? "✓ Enabled" : "✗ Disabled" },
                { label: "Account Title", value: bankDetails.AccountTitle || "Not Set" },
                { label: "Bank Name", value: bankDetails.BankName || "Not Set" },
              ].map((item) => (
                <div key={item.label} className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                  <p className="text-white/75 text-xs mb-1">{item.label}</p>
                  <p className="font-bold text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            disabled={isSaving}
            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-xl font-bold uppercase tracking-wide hover:shadow-lg transition-all disabled:opacity-60 flex items-center justify-center gap-3"
          >
            {isSaving ? (
              <><svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg> Saving...</>
            ) : (
              <><FaSave /> Save Settings</>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default Account_Settings;
