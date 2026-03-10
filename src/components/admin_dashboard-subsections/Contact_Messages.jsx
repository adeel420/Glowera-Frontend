import React from "react";
import { GoMail } from "react-icons/go";
import { FaEye, FaTrash } from "react-icons/fa";

const Contact_Messages = () => {
  return (
    <div className="animate-fade-in-up">
      <div className="mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
          Contact Messages
        </h2>
        <p className="text-gray-600">View and manage customer inquiries</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Total Messages</p>
              <p className="text-4xl font-bold mt-2">45</p>
            </div>
            <GoMail className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up animation-delay-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Unread</p>
              <p className="text-4xl font-bold mt-2">8</p>
            </div>
            <GoMail className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-400 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up animation-delay-400">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Replied</p>
              <p className="text-4xl font-bold mt-2">37</p>
            </div>
            <GoMail className="text-5xl opacity-30" />
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6 animate-fade-in-up animation-delay-600">
        <input
          type="text"
          placeholder="Search messages..."
          className="w-full px-6 py-4 border-2 border-pink-200 rounded-2xl focus:outline-none focus:border-pink-500 transition-all shadow-sm"
        />
      </div>

      {/* Messages List */}
      <div className="space-y-4">
        {[
          { name: "Sarah Johnson", email: "sarah@example.com", subject: "Product Inquiry", date: "2024-01-15", status: "Unread" },
          { name: "Michael Brown", email: "michael@example.com", subject: "Order Issue", date: "2024-01-14", status: "Replied" },
          { name: "Emily Davis", email: "emily@example.com", subject: "Shipping Question", date: "2024-01-13", status: "Unread" },
        ].map((message, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border-2 border-pink-200 p-6 hover:shadow-2xl transition-all animate-fade-in-up"
            style={{ animationDelay: `${(index + 8) * 100}ms` }}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {message.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-gray-800 text-lg">{message.name}</h3>
                    <span className={`px-4 py-1 rounded-full text-xs font-bold ${
                      message.status === "Unread" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
                    }`}>
                      {message.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2 flex items-center gap-2">
                    <GoMail className="text-pink-500" />
                    {message.email}
                  </p>
                  <p className="text-gray-800 font-semibold mb-2">{message.subject}</p>
                  <p className="text-xs text-gray-500">{message.date}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-pink-600 hover:text-pink-800 transition-colors p-2 hover:bg-pink-50 rounded-lg" title="View">
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
