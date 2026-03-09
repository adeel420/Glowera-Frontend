import React from "react";
import { FaEdit, FaTrash, FaPlus, FaEye } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";

const Products_Management = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-light uppercase tracking-wide text-gray-800 mb-2">Products Management</h2>
        <p className="text-gray-600 font-light">Manage all products</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-[#947972] to-[#f1e5e5] text-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Total Products</p>
              <p className="text-4xl font-light mt-2">48</p>
            </div>
            <MdProductionQuantityLimits className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-400 text-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">In Stock</p>
              <p className="text-4xl font-light mt-2">42</p>
            </div>
            <MdProductionQuantityLimits className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 text-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Low Stock</p>
              <p className="text-4xl font-light mt-2">4</p>
            </div>
            <MdProductionQuantityLimits className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#be4544] to-[#a03d3c] text-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Out of Stock</p>
              <p className="text-4xl font-light mt-2">2</p>
            </div>
            <MdProductionQuantityLimits className="text-5xl opacity-30" />
          </div>
        </div>
      </div>

      {/* Search and Add */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all"
        />
        <button className="bg-[#be4544] text-white px-6 py-3 rounded-lg font-semibold uppercase tracking-wide hover:bg-[#a03d3c] transition-all duration-300 flex items-center justify-center gap-2">
          <FaPlus /> Add Product
        </button>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-[#947972] to-[#f1e5e5] text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-normal uppercase tracking-wide">Product</th>
                <th className="px-6 py-4 text-left text-sm font-normal uppercase tracking-wide">Category</th>
                <th className="px-6 py-4 text-left text-sm font-normal uppercase tracking-wide">Price</th>
                <th className="px-6 py-4 text-left text-sm font-normal uppercase tracking-wide">Stock</th>
                <th className="px-6 py-4 text-center text-sm font-normal uppercase tracking-wide">Actions</th>
              </tr>
            </thead>
            <tbody>
              {["Hydrating Face Serum", "Nourishing Hair Oil", "Matte Lipstick Set"].map((product, index) => (
                <tr key={index} className="border-b hover:bg-[#faf8f7] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#947972]/20 to-[#f1e5e5]/40 rounded-lg"></div>
                      <span className="font-normal text-gray-800">{product}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">Skincare</td>
                  <td className="px-6 py-4 text-gray-700 font-semibold">$45.99</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      In Stock (24)
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="text-blue-600 hover:text-blue-800 transition-colors p-2 hover:bg-blue-50 rounded-lg" title="View">
                        <FaEye />
                      </button>
                      <button className="text-[#be4544] hover:text-[#a03d3c] transition-colors p-2 hover:bg-[#faf8f7] rounded-lg" title="Edit">
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
