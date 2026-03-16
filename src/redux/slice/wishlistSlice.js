import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCreateWishlist = createAsyncThunk(
  "wishlist/create",
  async ({ user, product }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_SERVER_API}/wishlist`, {
        user,
        products: [{ product }],
      });
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { error: "Failed to add to wishlist" });
    }
  }
);

export const fetchAllWishlist = createAsyncThunk(
  "wishlist/all",
  async ({ userId }, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_API}/wishlist/${userId}`);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { error: "Failed to fetch wishlist" });
    }
  }
);

export const fetchRemoveWishlist = createAsyncThunk(
  "wishlist/remove",
  async ({ userId, productId }, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`${import.meta.env.VITE_SERVER_API}/wishlist`, {
        data: { userId, productId },
      });
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { error: "Failed to remove item" });
    }
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCreateWishlist.pending, (state) => { state.status = "loading"; })
      .addCase(fetchCreateWishlist.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.wishlist = action.payload;
      })
      .addCase(fetchCreateWishlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.error;
      })
      .addCase(fetchAllWishlist.pending, (state) => { state.status = "loading"; })
      .addCase(fetchAllWishlist.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.wishlist = action.payload;
      })
      .addCase(fetchAllWishlist.rejected, (state) => {
        state.status = "failed";
        state.wishlist = null;
      })
      .addCase(fetchRemoveWishlist.fulfilled, (state, action) => {
        state.wishlist = action.payload;
      });
  },
});

export default wishlistSlice.reducer;
