import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaTimes } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, deleteCategory, updateCategory } from "../../redux/slice/categoriesSlice";
import toast from "react-hot-toast";

const Categories_Management = () => {
  const dispatch = useDispatch();
  const { categories, status, error } = useSelector((state) => state.categories);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ name: "", image: null });

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!formData.name) {
      return toast.error("Category name is required");
    }

    const data = new FormData();
    data.append("name", formData.name);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_API}/category`,
        {
          method: "POST",
          body: data,
        }
      );
      if (response.ok) {
        toast.success("Category added successfully");
        setFormData({ name: "", image: null });
        setShowAddForm(false);
        dispatch(fetchCategories());
      } else {
        toast.error("Failed to add category");
      }
    } catch (err) {
      toast.error("Error adding category");
    }
  };

  const handleEditCategory = (category) => {
    setEditingId(category._id);
    setFormData({ name: category.name, image: null });
    setShowEditForm(true);
    setShowAddForm(false);
  };

  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    if (!formData.name) {
      return toast.error("Category name is required");
    }

    const data = new FormData();
    data.append("name", formData.name);
    if (formData.image) {
      data.append("image", formData.image);
    }

    const result = await dispatch(updateCategory({ id: editingId, formData: data }));
    if (result.type === updateCategory.fulfilled.type) {
      toast.success("Category updated successfully");
      setFormData({ name: "", image: null });
      setShowEditForm(false);
      setEditingId(null);
    } else {
      toast.error(result.payload?.error || "Failed to update category");
    }
  };

  const handleDeleteCategory = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      dispatch(deleteCategory(id)).then((result) => {
        if (result.type === deleteCategory.fulfilled.type) {
          toast.success("Category deleted successfully");
        } else {
          toast.error(result.payload?.error || "Failed to delete category");
        }
      });
    }
  };

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
              <p className="text-4xl font-bold mt-2">{categories.length}</p>
            </div>
            <BiCategory className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-400 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up animation-delay-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Active</p>
              <p className="text-4xl font-bold mt-2">{categories.length}</p>
            </div>
            <BiCategory className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-400 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up animation-delay-400">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Inactive</p>
              <p className="text-4xl font-bold mt-2">0</p>
            </div>
            <BiCategory className="text-5xl opacity-30" />
          </div>
        </div>
      </div>

      {/* Add Category Button */}
      <div className="mb-6 animate-fade-in-up animation-delay-600">
        <button
          onClick={() => {
            setShowAddForm(!showAddForm);
            setShowEditForm(false);
            setFormData({ name: "", image: null });
          }}
          className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-3"
        >
          <FaPlus /> Add New Category
        </button>
      </div>

      {/* Add Category Form */}
      {showAddForm && !showEditForm && (
        <div className="bg-white rounded-2xl shadow-lg border-2 border-pink-200 p-6 mb-8 animate-fade-in-up">
          <form onSubmit={handleAddCategory} className="space-y-4">
            <div>
              <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                Category Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                placeholder="Enter category name"
              />
            </div>
            <div>
              <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                Category Image
              </label>
              <input
                type="file"
                onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                accept="image/*"
              />
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all"
              >
                Add Category
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300 transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Edit Category Form */}
      {showEditForm && (
        <div className="bg-white rounded-2xl shadow-lg border-2 border-pink-200 p-6 mb-8 animate-fade-in-up">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Edit Category
            </h3>
            <button
              onClick={() => {
                setShowEditForm(false);
                setEditingId(null);
                setFormData({ name: "", image: null });
              }}
              className="text-gray-600 hover:text-pink-600 transition-all"
            >
              <FaTimes size={24} />
            </button>
          </div>
          <form onSubmit={handleUpdateCategory} className="space-y-4">
            <div>
              <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                Category Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                placeholder="Enter category name"
              />
            </div>
            <div>
              <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                Category Image (Optional)
              </label>
              <input
                type="file"
                onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 transition-all"
                accept="image/*"
              />
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all"
              >
                Update Category
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowEditForm(false);
                  setEditingId(null);
                  setFormData({ name: "", image: null });
                }}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300 transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Categories Grid */}
      {status === "loading" ? (
        <div className="text-center py-12">
          <p className="text-gray-600 font-semibold">Loading categories...</p>
        </div>
      ) : categories.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 font-semibold">No categories found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={category._id}
              className="bg-white rounded-2xl shadow-lg border-2 border-pink-200 p-6 hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up"
              style={{ animationDelay: `${(index + 8) * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                {category.image && (
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-16 h-16 rounded-2xl object-cover shadow-md"
                  />
                )}
                {!category.image && (
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <BiCategory className="text-3xl text-white" />
                  </div>
                )}
                <span className="px-4 py-2 rounded-full text-xs font-bold bg-green-100 text-green-800">
                  Active
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
              <p className="text-sm text-gray-600 mb-4">ID: {category._id}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditCategory(category)}
                  className="flex-1 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-600 py-3 rounded-xl font-bold hover:from-pink-500 hover:to-rose-500 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <FaEdit /> Edit
                </button>
                <button
                  onClick={() => handleDeleteCategory(category._id)}
                  className="flex-1 bg-red-50 text-red-600 py-3 rounded-xl font-bold hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories_Management;
