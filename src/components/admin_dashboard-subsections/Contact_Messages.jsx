import React from "react";
import { GoMail } from "react-icons/go";
import { FaEye, FaTrash } from "react-icons/fa";

const Contact_Messages = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-light uppercase tracking-wide text-gray-800 mb-2">Contact Messages</h2>
        <p className="text-gray-600 font-light">View and manage customer inquiries</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-[#947972] to-[#f1e5e5] text-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Total Messages</p>
              <p className="text-4xl font-light mt-2">45</p>
            </div>
            <GoMail className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 text-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Unread</p>
              <p className="text-4xl font-light mt-2">8</p>
            </div>
            <GoMail className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-400 text-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Replied</p>
              <p className="text-4xl font-light mt-2">37</p>
            </div>
            <GoMail className="text-5xl opacity-30" />
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search messages..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all"
        />
      </div>

      {/* Messages List */}
      <div className="space-y-4">
        {[
          { name: "Sarah Johnson", email: "sarah@example.com", subject: "Product Inquiry", date: "2024-01-15", status: "Unread" },
          { name: "Michael Brown", email: "michael@example.com", subject: "Order Issue", date: "2024-01-14", status: "Replied" },
          { name: "Emily Davis", email: "emily@example.com", subject: "Shipping Question", date: "2024-01-13", status: "Unread" },
        ].map((message, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 bg-gradient-to-br from-[#947972] to-[#f1e5e5] rounded-full flex items-center justify-center text-white font-semibold">
                  {message.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold text-gray-800">{message.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      message.status === "Unread" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
                    }`}>
                      {message.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{message.email}</p>
                  <p className="text-gray-800 font-normal mb-2">{message.subject}</p>
                  <p className="text-xs text-gray-500">{message.date}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-[#be4544] hover:text-[#a03d3c] transition-colors p-2 hover:bg-[#faf8f7] rounded-lg" title="View">
                  <FaEye />
                </button>
                <button className="text-red-600 hover:text-red-800 transition-colors p-2 hover:bg-red-50 rounded-lg" title="Delete">
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact_Messages;
