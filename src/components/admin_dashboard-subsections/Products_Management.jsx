import React from "react";
import { FaEdit, FaTrash, FaPlus, FaEye } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";

const Products_Management = () => {
  return (
    <div className="animate-fade-in-up">
      <div className="mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
          Products Management
        </h2>
        <p className="text-gray-600">Manage all products</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Total Products</p>
              <p className="text-4xl font-bold mt-2">48</p>
            </div>
            <MdProductionQuantityLimits className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-400 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up animation-delay-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">In Stock</p>
              <p className="text-4xl font-bold mt-2">42</p>
            </div>
            <MdProductionQuantityLimits className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up animation-delay-400">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Low Stock</p>
              <p className="text-4xl font-bold mt-2">4</p>
            </div>
            <MdProductionQuantityLimits className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-500 to-red-400 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up animation-delay-600">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Out of Stock</p>
              <p className="text-4xl font-bold mt-2">2</p>
            </div>
            <MdProductionQuantityLimits className="text-5xl opacity-30" />
          </div>
        </div>
      </div>

      {/* Search and Add */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 animate-fade-in-up animation-delay-800">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 px-6 py-4 border-2 border-pink-200 rounded-2xl focus:outline-none focus:border-pink-500 transition-all shadow-sm"
        />
        <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
          <FaPlus /> Add Product
        </button>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-pink-200 animate-fade-in-up animation-delay-1000">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-pink-500 to-rose-500 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">Product</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">Price</th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">Stock</th>
                <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody>
              {["Hydrating Face Serum", "Nourishing Hair Oil", "Matte Lipstick Set"].map((product, index) => (
                <tr key={index} className="border-b border-pink-100 hover:bg-pink-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-gradient-to-br from-pink-200 to-rose-200 rounded-xl shadow-md"></div>
                      <span className="font-semibold text-gray-800">{product}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 font-medium">Skincare</td>
                  <td className="px-6 py-4 text-gray-800 font-bold">$45.99</td>
                  <td className="px-6 py-4">
                    <span className="px-4 py-2 rounded-full text-xs font-bold bg-green-100 text-green-800">
                      In Stock (24)
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="text-blue-600 hover:text-blue-800 transition-colors p-2 hover:bg-blue-50 rounded-lg" title="View">
                        <FaEye />
                      </button>
                      <button className="text-pink-600 hover:text-pink-800 transition-colors p-2 hover:bg-pink-50 rounded-lg" title="Edit">
                        <FaEdit />
                      </button>
                      <button className="text-red-600 hover:text-red-800 transition-colors p-2 hover:bg-red-50 rounded-lg" title="Delete">
                        <FaTrash />
                      </button>
                    </div>
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

export default Products_Management;
