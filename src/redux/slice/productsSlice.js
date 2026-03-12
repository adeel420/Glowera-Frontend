import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunks
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/products`,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { error: "Failed to fetch products" },
      );
    }
  },
);

export const fetchProductById = createAsyncThunk(
  "products/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/products/${id}`,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { error: "Failed to fetch product" },
      );
    }
  },
);

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchByCategory",
  async (categoryId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/products/category/${categoryId}`,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { error: "Failed to fetch products" },
      );
    }
  },
);

export const fetchProductsByColor = createAsyncThunk(
  "products/fetchByColor",
  async (colorName, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/products/color/${colorName}`,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { error: "Failed to fetch products" },
      );
    }
  },
);

export const createProduct = createAsyncThunk(
  "products/create",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/products`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { error: "Failed to create product" },
      );
    }
  },
);

export const updateProduct = createAsyncThunk(
  "products/update",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_SERVER_API}/products/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { error: "Failed to update product" },
      );
    }
  },
);

export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_SERVER_API}/products/${id}`,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { error: "Failed to delete product" },
      );
    }
  },
);

const initialState = {
  products: [],
  selectedProduct: null,
  status: "idle",
  error: null,
  message: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch all products
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload.data || action.payload;
        state.message = action.payload.message;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.error || "Failed to fetch products";
      });

    // Fetch product by ID
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedProduct = action.payload.data || action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.error || "Failed to fetch product";
      });

    // Fetch by category
    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload.data || action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.error || "Failed to fetch products";
      });

    // Fetch by color
    builder
      .addCase(fetchProductsByColor.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProductsByColor.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload.data || action.payload;
      })
      .addCase(fetchProductsByColor.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.error || "Failed to fetch products";
      });

    // Create product
    builder
      .addCase(createProduct.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products.push(action.payload.data);
        state.message = action.payload.message;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.error || "Failed to create product";
      });

    // Update product
    builder
      .addCase(updateProduct.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.products.findIndex(
          (p) => p._id === action.payload.data._id,
        );
        if (index !== -1) {
          state.products[index] = action.payload.data;
        }
        state.message = action.payload.message;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.error || "Failed to update product";
      });

    // Delete product
    builder
      .addCase(deleteProduct.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = state.products.filter(
          (p) => p._id !== action.payload.data._id,
        );
        state.message = action.payload.message;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.error || "Failed to delete product";
      });
  },
});

export const { clearError, clearMessage } = productsSlice.actions;
export default productsSlice.reducer;
