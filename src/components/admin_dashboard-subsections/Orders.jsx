import React from "react";
import { BsCart3 } from "react-icons/bs";
import { FaEye } from "react-icons/fa";

const Orders = () => {
  return (
    <div className="animate-fade-in-up">
      <div className="mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
          Orders Management
        </h2>
        <p className="text-gray-600">Track and manage customer orders</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Total Orders</p>
              <p className="text-4xl font-bold mt-2">156</p>
            </div>
            <BsCart3 className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up animation-delay-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Pending</p>
              <p className="text-4xl font-bold mt-2">12</p>
            </div>
            <BsCart3 className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-400 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up animation-delay-400">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Processing</p>
              <p className="text-4xl font-bold mt-2">8</p>
            </div>
            <BsCart3 className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-400 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up animation-delay-600">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Completed</p>
              <p className="text-4xl font-bold mt-2">136</p>
            </div>
            <BsCart3 className="text-5xl opacity-30" />
          </div>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 animate-fade-in-up animation-delay-800">
        <input
          type="text"
          placeholder="Search by order ID or customer name..."
          className="flex-1 px-6 py-4 border-2 border-pink-200 rounded-2xl focus:outline-none focus:border-pink-500 transition-all shadow-sm"
        />
        <select className="px-6 py-4 border-2 border-pink-200 rounded-2xl focus:outline-none focus:border-pink-500 transition-all shadow-sm">
          <option>All Status</option>
          <option>Pending</option>
          <option>Processing</option>
          <option>Completed</option>
        </select>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-pink-200 animate-fade-in-up animation-delay-1000">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-pink-500 to-rose-500 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">Order ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">Customer</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">Total</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">Status</th>
                <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: "#ORD-001", customer: "Sarah Johnson", date: "2024-01-15", total: "$125.99", status: "Completed" },
                { id: "#ORD-002", customer: "Michael Brown", date: "2024-01-16", total: "$89.50", status: "Processing" },
                { id: "#ORD-003", customer: "Emily Davis", date: "2024-01-17", total: "$210.00", status: "Pending" },
              ].map((order, index) => (
                <tr key={index} className="border-b border-pink-100 hover:bg-pink-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-pink-600">{order.id}</td>
                  <td className="px-6 py-4 text-gray-700 font-medium">{order.customer}</td>
                  <td className="px-6 py-4 text-gray-700">{order.date}</td>
                  <td className="px-6 py-4 font-bold text-gray-800">{order.total}</td>
                  <td className="px-6 py-4">
                    <span className={`px-4 py-2 rounded-full text-xs font-bold ${
                      order.status === "Completed" ? "bg-green-100 text-green-800" :
                      order.status === "Processing" ? "bg-blue-100 text-blue-800" :
                      "bg-yellow-100 text-yellow-800"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-pink-600 hover:text-pink-800 transition-colors p-2 hover:bg-pink-50 rounded-lg" title="View Details">
                      <FaEye />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
