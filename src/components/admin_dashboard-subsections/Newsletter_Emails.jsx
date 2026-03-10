import React from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaTrash, FaDownload } from "react-icons/fa";

const Newsletter_Emails = () => {
  return (
    <div className="animate-fade-in-up">
      <div className="mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
          Newsletter Subscribers
        </h2>
        <p className="text-gray-600">Manage newsletter email list</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Total Subscribers</p>
              <p className="text-4xl font-bold mt-2">1,234</p>
            </div>
            <IoNewspaperOutline className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-400 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up animation-delay-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Active</p>
              <p className="text-4xl font-bold mt-2">1,180</p>
            </div>
            <IoNewspaperOutline className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-400 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up animation-delay-400">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Unsubscribed</p>
              <p className="text-4xl font-bold mt-2">54</p>
            </div>
            <IoNewspaperOutline className="text-5xl opacity-30" />
          </div>
        </div>
      </div>

      {/* Search and Export */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 animate-fade-in-up animation-delay-600">
        <input
          type="text"
          placeholder="Search by email..."
          className="flex-1 px-6 py-4 border-2 border-pink-200 rounded-2xl focus:outline-none focus:border-pink-500 transition-all shadow-sm"
        />
        <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
          <FaDownload /> Export List
        </button>
      </div>

      {/* Subscribers Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-pink-200 animate-fade-in-up animation-delay-800">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-pink-500 to-rose-500 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">Email</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">Subscribed Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">Status</th>
                <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { email: "sarah.johnson@example.com", date: "2024-01-15", status: "Active" },
                { email: "michael.brown@example.com", date: "2024-01-14", status: "Active" },
                { email: "emily.davis@example.com", date: "2024-01-13", status: "Active" },
                { email: "john.smith@example.com", date: "2024-01-12", status: "Unsubscribed" },
              ].map((subscriber, index) => (
                <tr key={index} className="border-b border-pink-100 hover:bg-pink-50 transition-colors">
                  <td className="px-6 py-4 text-gray-700 font-medium">{subscriber.email}</td>
                  <td className="px-6 py-4 text-gray-700">{subscriber.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-4 py-2 rounded-full text-xs font-bold ${
                      subscriber.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                    }`}>
                      {subscriber.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-red-600 hover:text-red-800 transition-colors p-2 hover:bg-red-50 rounded-lg" title="Delete">
                      <FaTrash />
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

export default Newsletter_Emails;
