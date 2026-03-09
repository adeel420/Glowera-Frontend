import React from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaTrash, FaDownload } from "react-icons/fa";

const Newsletter_Emails = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-light uppercase tracking-wide text-gray-800 mb-2">Newsletter Subscribers</h2>
        <p className="text-gray-600 font-light">Manage newsletter email list</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-[#947972] to-[#f1e5e5] text-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Total Subscribers</p>
              <p className="text-4xl font-light mt-2">1,234</p>
            </div>
            <IoNewspaperOutline className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-400 text-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Active</p>
              <p className="text-4xl font-light mt-2">1,180</p>
            </div>
            <IoNewspaperOutline className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#be4544] to-[#a03d3c] text-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Unsubscribed</p>
              <p className="text-4xl font-light mt-2">54</p>
            </div>
            <IoNewspaperOutline className="text-5xl opacity-30" />
          </div>
        </div>
      </div>

      {/* Search and Export */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by email..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all"
        />
        <button className="bg-[#be4544] text-white px-6 py-3 rounded-lg font-semibold uppercase tracking-wide hover:bg-[#a03d3c] transition-all duration-300 flex items-center justify-center gap-2">
          <FaDownload /> Export List
        </button>
      </div>

      {/* Subscribers Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-[#947972] to-[#f1e5e5] text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-normal uppercase tracking-wide">Email</th>
                <th className="px-6 py-4 text-left text-sm font-normal uppercase tracking-wide">Subscribed Date</th>
                <th className="px-6 py-4 text-left text-sm font-normal uppercase tracking-wide">Status</th>
                <th className="px-6 py-4 text-center text-sm font-normal uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { email: "sarah.johnson@example.com", date: "2024-01-15", status: "Active" },
                { email: "michael.brown@example.com", date: "2024-01-14", status: "Active" },
                { email: "emily.davis@example.com", date: "2024-01-13", status: "Active" },
                { email: "john.smith@example.com", date: "2024-01-12", status: "Unsubscribed" },
              ].map((subscriber, index) => (
                <tr key={index} className="border-b hover:bg-[#faf8f7] transition-colors">
                  <td className="px-6 py-4 text-gray-700">{subscriber.email}</td>
                  <td className="px-6 py-4 text-gray-700">{subscriber.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
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
