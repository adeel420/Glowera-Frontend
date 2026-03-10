import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchverify = createAsyncThunk(
  "verify/fetch",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/user/verify-email`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const verifySlice = createSlice({
  name: "verify",
  initialState: {
    user: "",
    status: "ok",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchverify.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchverify.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload;
        state.error = null;
      })

      .addCase(fetchverify.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload?.message || "Something went wrong";
      });
  },
});

export default verifySlice.reducer;
