import React from "react";
import { TbEdit } from "react-icons/tb";

const Update_Products = () => {
  return (
    <div className="animate-fade-in-up">
      <div className="mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
          Update Products
        </h2>
        <p className="text-gray-600">Edit product information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Selection */}
        <div className="lg:col-span-1 bg-white rounded-2xl shadow-lg border-2 border-pink-200 p-6 animate-fade-in-up animation-delay-200">
          <h3 className="text-lg font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
            Select Product
          </h3>
          <input
            type="text"
            placeholder="Search product..."
            className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all mb-4"
          />
          <div className="space-y-2 max-h-[500px] overflow-y-auto">
            {["Hydrating Face Serum", "Nourishing Hair Oil", "Matte Lipstick Set", "Vitamin C Cream"].map((product, index) => (
              <div
                key={index}
                className="p-3 border-2 border-pink-100 rounded-xl hover:border-pink-500 hover:bg-pink-50 cursor-pointer transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-200 to-rose-200 rounded-lg"></div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{product}</p>
                    <p className="text-xs text-gray-500">Skincare</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Update Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border-2 border-pink-200 p-6 animate-fade-in-up animation-delay-400">
          <h3 className="text-lg font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-6">
            Product Details
          </h3>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                Product Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                placeholder="Enter product name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  Category
                </label>
                <select className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all">
                  <option>Skincare</option>
                  <option>Hair Care</option>
                  <option>Makeup</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  Price
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                  placeholder="0.00"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  Discount %
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                  placeholder="0"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                Description
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all resize-none"
                placeholder="Enter product description"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                Product Image
              </label>
              <div className="border-2 border-dashed border-pink-300 rounded-2xl p-8 text-center hover:border-pink-500 transition-all cursor-pointer bg-gradient-to-br from-pink-50 to-rose-50">
                <TbEdit className="text-5xl text-pink-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600 font-semibold">Click to upload new image</p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-2xl font-bold uppercase tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300"
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
