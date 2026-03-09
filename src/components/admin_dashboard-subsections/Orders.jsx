import React from "react";
import { BsCart3 } from "react-icons/bs";
import { FaEye } from "react-icons/fa";

const Orders = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-light uppercase tracking-wide text-gray-800 mb-2">Orders Management</h2>
        <p className="text-gray-600 font-light">Track and manage customer orders</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-[#947972] to-[#f1e5e5] text-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Total Orders</p>
              <p className="text-4xl font-light mt-2">156</p>
            </div>
            <BsCart3 className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 text-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Pending</p>
              <p className="text-4xl font-light mt-2">12</p>
            </div>
            <BsCart3 className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-400 text-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Processing</p>
              <p className="text-4xl font-light mt-2">8</p>
            </div>
            <BsCart3 className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-400 text-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Completed</p>
              <p className="text-4xl font-light mt-2">136</p>
            </div>
            <BsCart3 className="text-5xl opacity-30" />
          </div>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by order ID or customer name..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all"
        />
        <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all">
          <option>All Status</option>
          <option>Pending</option>
          <option>Processing</option>
          <option>Completed</option>
        </select>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-[#947972] to-[#f1e5e5] text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-normal uppercase tracking-wide">Order ID</th>
                <th className="px-6 py-4 text-left text-sm font-normal uppercase tracking-wide">Customer</th>
                <th className="px-6 py-4 text-left text-sm font-normal uppercase tracking-wide">Date</th>
                <th className="px-6 py-4 text-left text-sm font-normal uppercase tracking-wide">Total</th>
                <th className="px-6 py-4 text-left text-sm font-normal uppercase tracking-wide">Status</th>
                <th className="px-6 py-4 text-center text-sm font-normal uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: "#ORD-001", customer: "Sarah Johnson", date: "2024-01-15", total: "$125.99", status: "Completed" },
                { id: "#ORD-002", customer: "Michael Brown", date: "2024-01-16", total: "$89.50", status: "Processing" },
                { id: "#ORD-003", customer: "Emily Davis", date: "2024-01-17", total: "$210.00", status: "Pending" },
              ].map((order, index) => (
                <tr key={index} className="border-b hover:bg-[#faf8f7] transition-colors">
                  <td className="px-6 py-4 font-semibold text-[#be4544]">{order.id}</td>
                  <td className="px-6 py-4 text-gray-700">{order.customer}</td>
                  <td className="px-6 py-4 text-gray-700">{order.date}</td>
                  <td className="px-6 py-4 font-semibold text-gray-800">{order.total}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      order.status === "Completed" ? "bg-green-100 text-green-800" :
                      order.status === "Processing" ? "bg-blue-100 text-blue-800" :
                      "bg-yellow-100 text-yellow-800"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-[#be4544] hover:text-[#a03d3c] transition-colors p-2 hover:bg-[#faf8f7] rounded-lg" title="View Details">
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
