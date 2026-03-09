import React from "react";
import { TbEdit } from "react-icons/tb";

const Update_Products = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-light uppercase tracking-wide text-gray-800 mb-2">Update Products</h2>
        <p className="text-gray-600 font-light">Edit product information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Selection */}
        <div className="lg:col-span-1 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-normal uppercase tracking-wide text-gray-800 mb-4">Select Product</h3>
          <input
            type="text"
            placeholder="Search product..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all mb-4"
          />
          <div className="space-y-2 max-h-[500px] overflow-y-auto">
            {["Hydrating Face Serum", "Nourishing Hair Oil", "Matte Lipstick Set", "Vitamin C Cream"].map((product, index) => (
              <div key={index} className="p-3 border border-gray-200 rounded-lg hover:border-[#be4544] hover:bg-[#faf8f7] cursor-pointer transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#947972]/20 to-[#f1e5e5]/40 rounded"></div>
                  <div>
                    <p className="font-normal text-gray-800 text-sm">{product}</p>
                    <p className="text-xs text-gray-500">Skincare</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Update Form */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-normal uppercase tracking-wide text-gray-800 mb-6">Product Details</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-normal uppercase tracking-wide text-gray-700 mb-2">Product Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all"
                placeholder="Enter product name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-normal uppercase tracking-wide text-gray-700 mb-2">Category</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all">
                  <option>Skincare</option>
                  <option>Hair Care</option>
                  <option>Makeup</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-normal uppercase tracking-wide text-gray-700 mb-2">Price</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all"
                  placeholder="0.00"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-normal uppercase tracking-wide text-gray-700 mb-2">Stock Quantity</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-normal uppercase tracking-wide text-gray-700 mb-2">Discount %</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all"
                  placeholder="0"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-normal uppercase tracking-wide text-gray-700 mb-2">Description</label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#be4544] focus:border-transparent transition-all resize-none"
                placeholder="Enter product description"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-normal uppercase tracking-wide text-gray-700 mb-2">Product Image</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#be4544] transition-all cursor-pointer">
                <TbEdit className="text-5xl text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Click to upload new image</p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#be4544] text-white py-3 rounded-lg font-semibold uppercase tracking-wide hover:bg-[#a03d3c] transition-all duration-300"
            >
              Update Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update_Products;
