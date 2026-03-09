import React from "react";
import { FaCheckCircle, FaEdit, FaEnvelope, FaTimesCircle, FaTrash, FaUser } from "react-icons/fa";

const User_Management = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-light uppercase tracking-wide text-gray-800 mb-2">User Management</h2>
        <p className="text-gray-600 font-light">Manage all registered users</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-[#947972] to-[#f1e5e5] text-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Total Users</p>
              <p className="text-4xl font-light mt-2">5</p>
            </div>
            <FaUser className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-400 text-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Verified</p>
              <p className="text-4xl font-light mt-2">3</p>
            </div>
            <FaCheckCircle className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 text-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Unverified</p>
              <p className="text-4xl font-light mt-2">2</p>
            </div>
            <FaTimesCircle className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#be4544] to-[#a03d3c] text-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Admins</p>
              <p className="text-4xl font-light mt-2">0</p>
            </div>
            <FaUser className="text-5xl opacity-30" />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all"
        />
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-[#947972] to-[#f1e5e5] text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-normal uppercase tracking-wide">Name</th>
                <th className="px-6 py-4 text-left text-sm font-normal uppercase tracking-wide">Email</th>
                <th className="px-6 py-4 text-left text-sm font-normal uppercase tracking-wide">Status</th>
                <th className="px-6 py-4 text-left text-sm font-normal uppercase tracking-wide">Role</th>
                <th className="px-6 py-4 text-center text-sm font-normal uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-[#faf8f7] transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-[#947972] to-[#f1e5e5] text-white h-10 w-10 rounded-full flex items-center justify-center font-semibold">
                      A
                    </div>
                    <span className="font-normal text-gray-800">Adeel</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <FaEnvelope className="text-gray-400" />
                    demo@gmail.com
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                    Verified
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#faf8f7] text-[#be4544]">
                      Admin
                    </span>
                    <button className="text-[#be4544] hover:text-[#a03d3c] transition-colors p-1 hover:bg-[#faf8f7] rounded" title="Edit Role">
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
