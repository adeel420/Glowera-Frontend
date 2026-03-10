import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminBtn } from "../data/Data";
import { BiLogOut } from "react-icons/bi";
import { FiMenu, FiX } from "react-icons/fi";
import User_Management from "../components/admin_dashboard-subsections/User_Management";
import Categories_Management from "../components/admin_dashboard-subsections/Categories_Management";
import Products_Management from "../components/admin_dashboard-subsections/Products_Management";
import Update_Products from "../components/admin_dashboard-subsections/Update_Products";
import Orders from "../components/admin_dashboard-subsections/Orders";
import Contact_Messages from "../components/admin_dashboard-subsections/Contact_Messages";
import Newsletter_Emails from "../components/admin_dashboard-subsections/Newsletter_Emails";

const Admin_Dashboard = () => {
  const [activeBtn, setActiveBtn] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all"
      >
        {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:relative w-80 h-full bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 text-white shadow-2xl z-40 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Animated Background Blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

        <div className="relative p-6">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8 animate-fade-in-up">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-3xl font-bold">G</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Admin Panel</h1>
              <p className="text-white/80 text-sm">Glowera Management</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="space-y-2">
            {adminBtn.map((btn, index) => (
              <button
                key={btn.id}
                onClick={() => {
                  setActiveBtn(btn.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 animate-fade-in-up ${
                  activeBtn === btn.id
                    ? "bg-white text-pink-600 shadow-xl scale-105"
                    : "text-white hover:bg-white/20 backdrop-blur-sm"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <btn.icon className="text-xl" />
                <span className="font-semibold">{btn.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 overflow-auto">
        {/* Header Stats Bar */}
        <div className="mb-8 animate-fade-in-up">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-pink-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">156</p>
                <p className="text-gray-600 text-sm">Total Orders</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">48</p>
                <p className="text-gray-600 text-sm">Products</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">5</p>
                <p className="text-gray-600 text-sm">Users</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">$12.5K</p>
                <p className="text-gray-600 text-sm">Revenue</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="animate-fade-in-up animation-delay-200">
          {activeBtn === 0 && <User_Management />}
          {activeBtn === 1 && <Categories_Management />}
          {activeBtn === 2 && <Products_Management />}
          {activeBtn === 3 && <Update_Products />}
          {activeBtn === 4 && <Orders />}
          {activeBtn === 5 && <Contact_Messages />}
          {activeBtn === 6 && <Newsletter_Emails />}

          {activeBtn === 7 && (
            <div className="flex items-center justify-center min-h-[500px]">
              <div className="text-center bg-white rounded-3xl shadow-2xl p-12 border-2 border-pink-200 max-w-md animate-fade-in-up">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl mb-6 shadow-lg">
                  <BiLogOut className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-3">
                  Logout Confirmation
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Are you sure you want to logout from admin panel?
                </p>
                <div className="flex gap-4 justify-center">
                  <button
                    className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-xl hover:shadow-lg hover:scale-105 font-bold transition-all"
                    onClick={() => navigate("/")}
                  >
                    Confirm Logout
                  </button>
                  <button
                    className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl hover:bg-gray-200 font-bold transition-all"
                    onClick={() => setActiveBtn(0)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin_Dashboard;
