import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchReset = createAsyncThunk(
  "reset/fetch",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_SERVER_API}/user/reset-password`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { error: "Reset failed" });
    }
  },
);

export const resetSlice = createSlice({
  name: "reset",
  initialState: {
    user: "",
    status: "ok",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReset.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchReset.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload;
        state.error = null;
      })

      .addCase(fetchReset.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload?.error || action.payload?.message || "Something went wrong";
      });
  },
});

export default resetSlice.reducer;
