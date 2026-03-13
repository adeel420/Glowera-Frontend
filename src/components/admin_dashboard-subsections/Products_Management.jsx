import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProducts,
  deleteProduct,
} from "../../redux/slice/productsSlice";
import { FaEdit, FaTrash, FaPlus, FaBox, FaTimes } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import toast from "react-hot-toast";

import axios from "axios";
import { fetchCategories } from "../../redux/slice/categoriesSlice";

const Products_Management = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    exactPrice: "",
    discountPrice: "",
    discountPercentage: "",
    category: "",
    stock: "",
    colors: [],
  });
  const [colorInput, setColorInput] = useState({
    name: "",
    hexCode: "#000000",
  });
  const [imageFiles, setImageFiles] = useState([]);

  useEffect(() => {
    dispatch(fetchAllProducts());
    fetchCategories();
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleAddProduct = () => {
    setShowAddForm(!showAddForm);
    setShowEditForm(false);
    setFormData({
      title: "",
      subtitle: "",
      description: "",
      exactPrice: "",
      discountPrice: "",
      discountPercentage: "",
      category: "",
      stock: "",
      colors: [],
    });
    setColorInput({ name: "", hexCode: "#000000" });
    setImageFiles([]);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setFormData({
      title: product.title || "",
      subtitle: product.subtitle || "",
      description: product.description || "",
      exactPrice: product.exactPrice || "",
      discountPrice: product.discountPrice || "",
      discountPercentage: product.discountPercentage || "",
      category: product.category?._id || "",
      stock: product.stock || "",
      colors: product.colors || [],
    });
    setShowEditForm(true);
    setShowAddForm(false);
    setColorInput({ name: "", hexCode: "#000000" });
    setImageFiles([]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updated = { ...prev, [name]: value };

      const exact = parseFloat(updated.exactPrice);
      const discount = parseFloat(updated.discountPrice);

      if (exact && discount) {
        updated.discountPercentage = (
          ((exact - discount) / exact) *
          100
        ).toFixed(2);
      }

      return updated;
    });
  };

  const handleAddColor = () => {
    if (colorInput.name && colorInput.hexCode) {
      setFormData((prev) => ({
        ...prev,
        colors: [...prev.colors, colorInput],
      }));
      setColorInput({ name: "", hexCode: "#000000" });
    }
  };

  const handleRemoveColor = (index) => {
    setFormData((prev) => ({
      ...prev,
      colors: prev.colors.filter((_, i) => i !== index),
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 3) {
      toast.error("Maximum 3 images allowed");
      e.target.value = null;
      return;
    }
    setImageFiles(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.subtitle ||
      !formData.description ||
      !formData.exactPrice ||
      !formData.category ||
      formData.stock === ""
    ) {
      return toast.error("Please fill all required fields");
    }

    const submitData = new FormData();
    submitData.append("title", formData.title);
    submitData.append("subtitle", formData.subtitle);
    submitData.append("description", formData.description);
    submitData.append("exactPrice", formData.exactPrice);
    submitData.append("discountPrice", formData.discountPrice || 0);
    submitData.append("discountPercentage", formData.discountPercentage || 0);
    submitData.append("category", formData.category);
    submitData.append("stock", formData.stock);
    submitData.append("colors", JSON.stringify(formData.colors));

    imageFiles.forEach((file) => {
      submitData.append("images", file);
    });

    try {
      let result;
      if (selectedProduct) {
        const { updateProduct } =
          await import("../../redux/slice/productsSlice");
        result = await dispatch(
          updateProduct({ id: selectedProduct._id, formData: submitData }),
        );
      } else {
        const { createProduct } =
          await import("../../redux/slice/productsSlice");
        result = await dispatch(createProduct(submitData));
      }

      if (result.type.includes("fulfilled")) {
        toast.success(
          selectedProduct
            ? "Product updated successfully"
            : "Product created successfully",
        );
        setShowAddForm(false);
        setShowEditForm(false);
        setSelectedProduct(null);
        setFormData({
          title: "",
          subtitle: "",
          description: "",
          exactPrice: "",
          discountPrice: "",
          discountPercentage: "",
          category: "",
          stock: "",
          colors: [],
        });
        setImageFiles([]);
        dispatch(fetchAllProducts());
      } else {
        toast.error(result.payload?.error || "Failed to save product");
      }
    } catch (error) {
      toast.error("Error saving product");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const result = await dispatch(deleteProduct(id));
      if (deleteProduct.fulfilled.match(result)) {
        toast.success("Product deleted successfully");
      } else {
        toast.error(result.payload?.error || "Failed to delete product");
      }
    }
  };

  const filteredProducts = products.filter((product) =>
    product.title?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const inStockCount = products.filter((p) => p.stock > 10).length;
  const lowStockCount = products.filter(
    (p) => p.stock > 0 && p.stock <= 10,
  ).length;
  const outOfStockCount = products.filter((p) => p.stock === 0).length;

  return (
    <div className="animate-fade-in-up">
      <div className="mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
          Products Management
        </h2>
        <p className="text-gray-600">Manage all products in your store</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">
                Total Products
              </p>
              <p className="text-4xl font-bold mt-2">{products.length}</p>
            </div>
            <FaBox className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-400 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up animation-delay-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">
                In Stock
              </p>
              <p className="text-4xl font-bold mt-2">{inStockCount}</p>
            </div>
            <MdProductionQuantityLimits className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up animation-delay-400">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">
                Low Stock
              </p>
              <p className="text-4xl font-bold mt-2">{lowStockCount}</p>
            </div>
            <MdProductionQuantityLimits className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-500 to-red-400 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up animation-delay-600">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">
                Out of Stock
              </p>
              <p className="text-4xl font-bold mt-2">{outOfStockCount}</p>
            </div>
            <MdProductionQuantityLimits className="text-5xl opacity-30" />
          </div>
        </div>
      </div>

      {/* Search and Add Button */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 animate-fade-in-up animation-delay-800">
        <input
          type="text"
          placeholder="Search products by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-6 py-4 border-2 border-pink-200 rounded-2xl focus:outline-none focus:border-pink-500 transition-all shadow-sm"
        />
        <button
          onClick={handleAddProduct}
          className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-3 cursor-pointer whitespace-nowrap"
        >
          <FaPlus /> Add Product
        </button>
      </div>

      {/* Add Product Form */}
      {showAddForm && !showEditForm && (
        <div className="bg-white rounded-2xl shadow-lg border-2 border-pink-200 p-6 mb-8 animate-fade-in-up">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  Product Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                  placeholder="Enter product title"
                />
              </div>
              <div>
                <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  Subtitle *
                </label>
                <input
                  type="text"
                  name="subtitle"
                  value={formData.subtitle}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                  placeholder="Enter product subtitle"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                placeholder="Enter product description"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  Exact Price *
                </label>
                <input
                  type="number"
                  name="exactPrice"
                  value={formData.exactPrice}
                  onChange={handleInputChange}
                  required
                  step="0.01"
                  className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  Discount Price
                </label>
                <input
                  type="number"
                  name="discountPrice"
                  value={formData.discountPrice}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  Discount %
                </label>
                <input
                  type="number"
                  name="discountPercentage"
                  value={formData.discountPercentage}
                  onChange={handleInputChange}
                  readOnly
                  className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                  placeholder="0"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                >
                  <option value="">Select Category</option>
                  {categories?.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  Stock *
                </label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                  placeholder="0"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                Product Colors
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={colorInput.name}
                  onChange={(e) =>
                    setColorInput((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Color name"
                  className="flex-1 px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                />
                <input
                  type="color"
                  value={colorInput.hexCode}
                  onChange={(e) =>
                    setColorInput((prev) => ({
                      ...prev,
                      hexCode: e.target.value,
                    }))
                  }
                  className="w-14 h-12 border-2 border-pink-200 rounded-xl cursor-pointer"
                />
                <button
                  type="button"
                  onClick={handleAddColor}
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-bold hover:shadow-lg transition-all"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.colors.map((color, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-pink-50 border-2 border-pink-200 px-4 py-2 rounded-xl"
                  >
                    <div
                      className="w-6 h-6 rounded-lg border-2 border-pink-300 shadow-sm"
                      style={{ backgroundColor: color.hexCode }}
                    />
                    <span className="text-sm font-semibold text-gray-700">
                      {color.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemoveColor(index)}
                      className="text-red-600 hover:text-red-800 ml-2"
                    >
                      <FaTimes size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                Product Images (Max 3)
              </label>
              <input
                id="add-product-images"
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
              />
              <p className="text-xs text-gray-500 mt-1">
                Hold Ctrl/Cmd to select multiple images (max 3)
              </p>
              {imageFiles.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm text-pink-600 font-semibold mb-3">
                    ✓ {imageFiles.length} image(s) selected
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {imageFiles.map((file, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-32 object-cover rounded-xl border-2 border-pink-300 shadow-md"
                        />
                        <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-lg">
                          {index + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Adding...
                  </>
                ) : (
                  "Add Product"
                )}
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                disabled={status === "loading"}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Edit Product Form */}
      {showEditForm && (
        <div className="bg-white rounded-2xl shadow-lg border-2 border-pink-200 p-6 mb-8 animate-fade-in-up">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Edit Product
            </h3>
            <button
              onClick={() => {
                setShowEditForm(false);
                setSelectedProduct(null);
              }}
              className="text-gray-600 hover:text-pink-600 transition-all"
            >
              <FaTimes size={24} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  Product Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                  placeholder="Enter product title"
                />
              </div>
              <div>
                <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  Subtitle *
                </label>
                <input
                  type="text"
                  name="subtitle"
                  value={formData.subtitle}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                  placeholder="Enter product subtitle"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                placeholder="Enter product description"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  Exact Price *
                </label>
                <input
                  type="number"
                  name="exactPrice"
                  value={formData.exactPrice}
                  onChange={handleInputChange}
                  required
                  step="0.01"
                  className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  Discount Price
                </label>
                <input
                  type="number"
                  name="discountPrice"
                  value={formData.discountPrice}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  Discount %
                </label>
                <input
                  type="number"
                  name="discountPercentage"
                  value={formData.discountPercentage}
                  onChange={handleInputChange}
                  step="0.01"
                  className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                  placeholder="0"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                >
                  <option value="">Select Category</option>
                  {categories?.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  Stock *
                </label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                  placeholder="0"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                Product Colors
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={colorInput.name}
                  onChange={(e) =>
                    setColorInput((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Color name"
                  className="flex-1 px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                />
                <input
                  type="color"
                  value={colorInput.hexCode}
                  onChange={(e) =>
                    setColorInput((prev) => ({
                      ...prev,
                      hexCode: e.target.value,
                    }))
                  }
                  className="w-14 h-12 border-2 border-pink-200 rounded-xl cursor-pointer"
                />
                <button
                  type="button"
                  onClick={handleAddColor}
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-bold hover:shadow-lg transition-all"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.colors.map((color, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-pink-50 border-2 border-pink-200 px-4 py-2 rounded-xl"
                  >
                    <div
                      className="w-6 h-6 rounded-lg border-2 border-pink-300 shadow-sm"
                      style={{ backgroundColor: color.hexCode }}
                    />
                    <span className="text-sm font-semibold text-gray-700">
                      {color.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemoveColor(index)}
                      className="text-red-600 hover:text-red-800 ml-2"
                    >
                      <FaTimes size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                Product Images (Max 3)
              </label>
              <input
                id="edit-product-images"
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
              />
              <p className="text-xs text-gray-500 mt-1">
                Hold Ctrl/Cmd to select multiple images (max 3)
              </p>
              {imageFiles.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm text-pink-600 font-semibold mb-3">
                    ✓ {imageFiles.length} new image(s) selected
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {imageFiles.map((file, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-32 object-cover rounded-xl border-2 border-pink-300 shadow-md"
                        />
                        <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-lg">
                          {index + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {selectedProduct?.images?.length > 0 && !imageFiles.length && (
                <div className="mt-4">
                  <p className="text-sm text-green-600 font-semibold mb-3">
                    ✓ {selectedProduct.images.length} existing image(s)
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {selectedProduct.images.map((img, index) => (
                      <div key={index} className="relative">
                        <img
                          src={img}
                          alt={`Existing ${index + 1}`}
                          className="w-full h-32 object-cover rounded-xl border-2 border-green-300 shadow-md"
                        />
                        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-lg">
                          {index + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Updating...
                  </>
                ) : (
                  "Update Product"
                )}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowEditForm(false);
                  setSelectedProduct(null);
                }}
                disabled={status === "loading"}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Products Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-pink-200 animate-fade-in-up animation-delay-1000">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-pink-500 to-rose-500 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Product
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Price
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Stock
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wide">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {status === "loading" ? (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    <p className="font-semibold">Loading products...</p>
                  </td>
                </tr>
              ) : filteredProducts.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    <p className="font-semibold">No products found</p>
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr
                    key={product._id}
                    className="border-b border-pink-100 hover:bg-pink-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {product.images && product.images[0] ? (
                          <img
                            src={product.images[0]}
                            alt={product.title}
                            className="w-14 h-14 object-cover rounded-xl shadow-md"
                          />
                        ) : (
                          <div className="w-14 h-14 bg-gradient-to-br from-pink-200 to-rose-200 rounded-xl flex items-center justify-center">
                            <FaBox className="text-pink-500 text-xl" />
                          </div>
                        )}
                        <div>
                          <p className="font-semibold text-gray-800">
                            {product.title}
                          </p>
                          <p className="text-xs text-gray-500">
                            {product.subtitle}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-pink-100 text-pink-700">
                        {product.category?.name || "N/A"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-800">
                          ${product.exactPrice}
                        </span>
                        {product.discountPrice && (
                          <span className="text-xs text-gray-500 line-through">
                            ${product.discountPrice}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-4 py-2 rounded-full text-xs font-bold ${
                          product.stock > 10
                            ? "bg-green-100 text-green-800"
                            : product.stock > 0
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {product.stock > 0
                          ? `${product.stock} in stock`
                          : "Out of Stock"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleEditProduct(product)}
                          className="text-pink-600 hover:text-pink-800 transition-colors p-2 hover:bg-pink-50 rounded-lg font-semibold cursor-pointer"
                          title="Edit Product"
                        >
                          <FaEdit size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="text-red-600 hover:text-red-800 transition-colors p-2 hover:bg-red-50 rounded-lg font-semibold cursor-pointer"
                          title="Delete Product"
                        >
                          <FaTrash size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products_Management;
