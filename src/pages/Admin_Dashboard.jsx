import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminBtn } from "../data/Data";
import { BiLogOut } from "react-icons/bi";
import User_Management from "../components/admin_dashboard-subsections/User_Management";
import Categories_Management from "../components/admin_dashboard-subsections/Categories_Management";
import Products_Management from "../components/admin_dashboard-subsections/Products_Management";
import Update_Products from "../components/admin_dashboard-subsections/Update_Products";
import Orders from "../components/admin_dashboard-subsections/Orders";
import Contact_Messages from "../components/admin_dashboard-subsections/Contact_Messages";
import Newsletter_Emails from "../components/admin_dashboard-subsections/Newsletter_Emails";

const Admin_Dashboard = () => {
  const [activeBtn, setActiveBtn] = useState(0);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-full md:w-72 linear text-white shadow-2xl">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <span className="text-2xl font-bold">A</span>
            </div>
            <div>
              <h1 className="text-2xl font-extrabold">Admin Panel</h1>
              <p className=" text-sm red-text text-[#bd4544] ">
                Glowera Management
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible px-3 space-x-2 md:space-x-0 md:space-y-2 pb-2 md:pb-0">
          {adminBtn.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveBtn(btn.id)}
              className={`flex cursor-pointer items-center gap-3 px-4 py-3 rounded-xl whitespace-nowrap transition-all ${
                activeBtn === btn.id
                  ? "bg-white text-[#bd4544] shadow-xl scale-105"
                  : "text-white hover:bg-white/10 backdrop-blur-sm"
              }`}
            >
              {<btn.icon />}
              <span className="text-sm font-semibold">{btn.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 bg-[#faf8f7]">
        {activeBtn === 0 && <User_Management />}
        {activeBtn === 1 && <Categories_Management />}
        {activeBtn === 2 && <Products_Management />}
        {activeBtn === 3 && <Update_Products />}
        {activeBtn === 4 && <Orders />}
        {activeBtn === 5 && <Contact_Messages />}
        {activeBtn === 6 && <Newsletter_Emails />}

        {activeBtn === 7 && (
          <div className="flex items-center justify-center h-96">
            <div className="text-center bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl mb-6">
                <BiLogOut className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Logout</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Are you sure you want to logout?
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  className="bg-gradient-to-r from-red-600 to-pink-600 cursor-pointer text-white px-8 py-3 rounded-xl hover:from-red-700 hover:to-pink-700 font-bold shadow-lg hover:shadow-xl transition-all"
                  onClick={() => navigate("/")}
                >
                  Confirm Logout
                </button>
                <button
                  className="bg-gray-100 cursor-pointer text-gray-700 px-8 py-3 rounded-xl hover:bg-gray-200 font-bold transition-all"
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
  );
};

export default Admin_Dashboard;
