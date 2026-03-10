import React from "react";
import { FaCheckCircle, FaEdit, FaEnvelope, FaTimesCircle, FaTrash, FaUser } from "react-icons/fa";

const User_Management = () => {
  return (
    <div className="animate-fade-in-up">
      <div className="mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
          User Management
        </h2>
        <p className="text-gray-600">Manage all registered users</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Total Users</p>
              <p className="text-4xl font-bold mt-2">5</p>
            </div>
            <FaUser className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-400 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up animation-delay-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Verified</p>
              <p className="text-4xl font-bold mt-2">3</p>
            </div>
            <FaCheckCircle className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up animation-delay-400">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Unverified</p>
              <p className="text-4xl font-bold mt-2">2</p>
            </div>
            <FaTimesCircle className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-400 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up animation-delay-600">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Admins</p>
              <p className="text-4xl font-bold mt-2">1</p>
            </div>
            <FaUser className="text-5xl opacity-30" />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6 animate-fade-in-up animation-delay-800">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="w-full px-6 py-4 border-2 border-pink-200 rounded-2xl focus:outline-none focus:border-pink-500 transition-all shadow-sm"
        />
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-pink-200 animate-fade-in-up animation-delay-1000">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-pink-500 to-rose-500 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">Email</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">Role</th>
                <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-pink-100 hover:bg-pink-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white h-12 w-12 rounded-xl flex items-center justify-center font-bold shadow-md">
                      A
                    </div>
                    <span className="font-semibold text-gray-800">Adeel</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <FaEnvelope className="text-pink-500" />
                    demo@gmail.com
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-4 py-2 rounded-full text-xs font-bold bg-green-100 text-green-800">
                    Verified
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-pink-100 to-rose-100 text-pink-600">
                      Admin
                    </span>
                    <button className="text-pink-500 hover:text-pink-700 transition-colors p-2 hover:bg-pink-50 rounded-lg" title="Edit Role">
                      <FaEdit />
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="text-red-600 hover:text-red-800 transition-colors p-2 hover:bg-red-50 rounded-lg" title="Delete User">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User_Management;
