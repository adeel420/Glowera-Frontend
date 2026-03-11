import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "categories/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/category`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { error: "Failed to fetch categories" });
    }
  },
);

export const deleteCategory = createAsyncThunk(
  "categories/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_SERVER_API}/category/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      return { id, data: response.data };
    } catch (error) {
      return rejectWithValue(error.response?.data || { error: "Failed to delete category" });
    }
  },
);

export const updateCategory = createAsyncThunk(
  "categories/update",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_SERVER_API}/category/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { error: "Failed to update category" });
    }
  },
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.categories = action.payload;
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload?.error || "Failed to fetch categories";
      })
      .addCase(deleteCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.categories = state.categories.filter(
          (cat) => cat._id !== action.payload.id
        );
        state.error = null;
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload?.error || "Failed to delete category";
      })
      .addCase(updateCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const index = state.categories.findIndex(
          (cat) => cat._id === action.payload._id
        );
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
        state.error = null;
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload?.error || "Failed to update category";
      });
  },
});

export default categoriesSlice.reducer;
