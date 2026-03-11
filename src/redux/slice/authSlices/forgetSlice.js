import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchForget = createAsyncThunk(
  "forget/fetch",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/user/forgot-password`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { error: "Failed to send OTP" });
    }
  },
);

export const forgetSlice = createSlice({
  name: "forget",
  initialState: {
    user: "",
    status: "ok",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForget.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchForget.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload;
        state.error = null;
      })

      .addCase(fetchForget.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload?.error || action.payload?.message || "Something went wrong";
      });
  },
});

export default forgetSlice.reducer;
