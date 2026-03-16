import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCreateCart = createAsyncThunk(
  "cart/create",
  async ({ products, quantity, user, color }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_SERVER_API}/cart`, {
        user,
        products: [{ product: products, quantity, color }],
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { error: "Failed to add to cart" });
    }
  }
);

export const fetchAllCart = createAsyncThunk(
  "cart/all",
  async ({ userId }, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_API}/cart/${userId}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { error: "Failed to fetch cart" });
    }
  }
);

export const fetchUpdateCartItem = createAsyncThunk(
  "cart/update",
  async ({ cartId, productId, quantity }, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${import.meta.env.VITE_SERVER_API}/cart`, {
        cartId,
        productId,
        quantity,
      });
      return res.data.cart;
    } catch (err) {
      return rejectWithValue(err.response?.data || { error: "Failed to update cart" });
    }
  }
);

export const fetchRemoveFromCart = createAsyncThunk(
  "cart/remove",
  async ({ cartId, productId }, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`${import.meta.env.VITE_SERVER_API}/cart`, {
        data: { cartId, productId },
      });
      return res.data.cart;
    } catch (err) {
      return rejectWithValue(err.response?.data || { error: "Failed to remove item" });
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCreateCart.pending, (state) => { state.status = "loading"; })
      .addCase(fetchCreateCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cart = action.payload.cart || action.payload;
      })
      .addCase(fetchCreateCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.error;
      })
      .addCase(fetchAllCart.pending, (state) => { state.status = "loading"; })
      .addCase(fetchAllCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cart = action.payload;
      })
      .addCase(fetchAllCart.rejected, (state) => {
        state.status = "failed";
        state.cart = null;
      })
      .addCase(fetchUpdateCartItem.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(fetchRemoveFromCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      });
  },
});

export default cartSlice.reducer;
