import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, updateProduct } from "../../redux/slice/productsSlice";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

const ProductModal = ({ isOpen, onClose, product, categories }) => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.products);
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
    images: [],
  });
  const [colorInput, setColorInput] = useState({ name: "", hexCode: "#000000" });
  const [imageFiles, setImageFiles] = useState([]);

  useEffect(() => {
    if (product) {
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
        images: product.images || [],
      });
    } else {
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
        images: [],
      });
    }
    setColorInput({ name: "", hexCode: "#000000" });
    setImageFiles([]);
  }, [product, isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    setImageFiles(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.subtitle || !formData.description || !formData.exactPrice || !formData.category || formData.stock === "") {
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
      if (product) {
        result = await dispatch(
          updateProduct({ id: product._id, formData: submitData })
        );
      } else {
        result = await dispatch(createProduct(submitData));
      }

      if (
        createProduct.fulfilled.match(result) ||
        updateProduct.fulfilled.match(result)
      ) {
        toast.success(
          product ? "Product updated successfully" : "Product created successfully"
        );
        onClose();
      } else {
        toast.error(result.payload?.error || "Failed to save product");
      }
    } catch (error) {
      toast.error("Error saving product");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-gradient-to-r from-pink-500 to-rose-500 text-white p-6 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-bold uppercase tracking-wide">
            {product ? "Edit Product" : "Add New Product"}
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Title & Subtitle */}
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

          {/* Description */}
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

          {/* Pricing */}
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

          {/* Category & Stock */}
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

          {/* Colors */}
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
                placeholder="Color name (e.g., Red, Blue)"
                className="flex-1 px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
              />
              <input
                type="color"
                value={colorInput.hexCode}
                onChange={(e) =>
                  setColorInput((prev) => ({ ...prev, hexCode: e.target.value }))
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
                  <span className="text-sm font-semibold text-gray-700">{color.name}</span>
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

          {/* Images */}
          <div>
            <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
              Product Images
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
            />
            {imageFiles.length > 0 && (
              <p className="text-sm text-pink-600 font-semibold mt-2">
                ✓ {imageFiles.length} file(s) selected
              </p>
            )}
            {formData.images.length > 0 && !imageFiles.length && (
              <p className="text-sm text-green-600 font-semibold mt-2">
                ✓ {formData.images.length} existing image(s)
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-6 border-t-2 border-pink-200">
            <button
              type="submit"
              disabled={status === "loading"}
              className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-xl font-bold uppercase tracking-wide hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading"
                ? "Saving..."
                : product
                  ? "Update Product"
                  : "Create Product"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-800 py-4 rounded-xl font-bold uppercase tracking-wide hover:bg-gray-300 transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
