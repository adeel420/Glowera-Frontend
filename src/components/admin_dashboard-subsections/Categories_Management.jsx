import React from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";

const Categories_Management = () => {
  return (
    <div className="animate-fade-in-up">
      <div className="mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
          Categories Management
        </h2>
        <p className="text-gray-600">Manage product categories</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Total Categories</p>
              <p className="text-4xl font-bold mt-2">8</p>
            </div>
            <BiCategory className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-400 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up animation-delay-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Active</p>
              <p className="text-4xl font-bold mt-2">6</p>
            </div>
            <BiCategory className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-400 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up animation-delay-400">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Inactive</p>
              <p className="text-4xl font-bold mt-2">2</p>
            </div>
            <BiCategory className="text-5xl opacity-30" />
          </div>
        </div>
      </div>

      {/* Add Category Button */}
      <div className="mb-6 animate-fade-in-up animation-delay-600">
        <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-3">
          <FaPlus /> Add New Category
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Hair Oil", "Face Wash", "Makeup", "Nailpolish", "Shampoo", "Beauty Cream"].map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border-2 border-pink-200 p-6 hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up"
            style={{ animationDelay: `${(index + 8) * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg">
                <BiCategory className="text-3xl text-white" />
              </div>
              <span className="px-4 py-2 rounded-full text-xs font-bold bg-green-100 text-green-800">
                Active
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{category}</h3>
            <p className="text-sm text-gray-600 mb-4">12 products</p>
            <div className="flex gap-2">
              <button className="flex-1 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-600 py-3 rounded-xl font-bold hover:from-pink-500 hover:to-rose-500 hover:text-white transition-all flex items-center justify-center gap-2">
                <FaEdit /> Edit
              </button>
              <button className="flex-1 bg-red-50 text-red-600 py-3 rounded-xl font-bold hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2">
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories_Management;
