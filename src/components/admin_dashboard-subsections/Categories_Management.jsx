import React from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";

const Categories_Management = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-light uppercase tracking-wide text-gray-800 mb-2">Categories Management</h2>
        <p className="text-gray-600 font-light">Manage product categories</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-[#947972] to-[#f1e5e5] text-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Total Categories</p>
              <p className="text-4xl font-light mt-2">8</p>
            </div>
            <BiCategory className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-400 text-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Active</p>
              <p className="text-4xl font-light mt-2">6</p>
            </div>
            <BiCategory className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#be4544] to-[#a03d3c] text-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Inactive</p>
              <p className="text-4xl font-light mt-2">2</p>
            </div>
            <BiCategory className="text-5xl opacity-30" />
          </div>
        </div>
      </div>

      {/* Add Category Button */}
      <div className="mb-6">
        <button className="bg-[#be4544] text-white px-6 py-3 rounded-lg font-semibold uppercase tracking-wide hover:bg-[#a03d3c] transition-all duration-300 flex items-center gap-2">
          <FaPlus /> Add New Category
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Hair Oil", "Face Wash", "Makeup", "Nailpolish", "Shampoo", "Beauty Cream"].map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#947972]/20 to-[#f1e5e5]/40 rounded-full flex items-center justify-center">
                <BiCategory className="text-3xl text-[#be4544]" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                Active
              </span>
            </div>
            <h3 className="text-xl font-normal text-gray-800 mb-2">{category}</h3>
            <p className="text-sm text-gray-600 font-light mb-4">12 products</p>
            <div className="flex gap-2">
              <button className="flex-1 bg-[#faf8f7] text-[#be4544] py-2 rounded-lg font-semibold hover:bg-[#be4544] hover:text-white transition-all flex items-center justify-center gap-2">
                <FaEdit /> Edit
              </button>
              <button className="flex-1 bg-red-50 text-red-600 py-2 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2">
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
