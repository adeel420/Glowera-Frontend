import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCreateOrder = createAsyncThunk(
  "order/create",
  async (orderData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_SERVER_API}/orders`, orderData);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { error: "Failed to place order" });
    }
  }
);

export const fetchOrdersByUser = createAsyncThunk(
  "order/getByUser",
  async ({ userId }, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_API}/orders/user/${userId}`);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { error: "Failed to fetch orders" });
    }
  }
);

export const fetchAllOrders = createAsyncThunk(
  "order/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_API}/orders/all`);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { error: "Failed to fetch orders" });
    }
  }
);

export const fetchUpdateOrderStatus = createAsyncThunk(
  "order/updateStatus",
  async ({ orderId, status }, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${import.meta.env.VITE_SERVER_API}/orders/status`, { orderId, status });
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { error: "Failed to update status" });
    }
  }
);

export const fetchDeleteOrder = createAsyncThunk(
  "order/delete",
  async ({ orderId }, { rejectWithValue }) => {
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER_API}/orders`, { data: { orderId } });
      return orderId;
    } catch (err) {
      return rejectWithValue(err.response?.data || { error: "Failed to delete order" });
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCreateOrder.pending, (state) => { state.status = "loading"; })
      .addCase(fetchCreateOrder.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders.unshift(action.payload);
      })
      .addCase(fetchCreateOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.error;
      })
      .addCase(fetchOrdersByUser.pending, (state) => { state.status = "loading"; })
      .addCase(fetchOrdersByUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = action.payload;
      })
      .addCase(fetchOrdersByUser.rejected, (state) => {
        state.status = "failed";
        state.orders = [];
      })
      .addCase(fetchAllOrders.pending, (state) => { state.status = "loading"; })
      .addCase(fetchAllOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = action.payload;
      })
      .addCase(fetchUpdateOrderStatus.fulfilled, (state, action) => {
        const idx = state.orders.findIndex((o) => o._id === action.payload._id);
        if (idx !== -1) state.orders[idx] = action.payload;
      })
      .addCase(fetchDeleteOrder.fulfilled, (state, action) => {
        state.orders = state.orders.filter((o) => o._id !== action.payload);
      });
  },
});

export default orderSlice.reducer;
