import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSignup = createAsyncThunk(
  "signup/fetch",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/user/signup`,
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

export const signupSlice = createSlice({
  name: "signup",
  initialState: {
    user: "",
    status: "ok",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSignup.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchSignup.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload;
        state.error = null;
      })

      .addCase(fetchSignup.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload?.message || "Something went wrong";
      });
  },
});

export default signupSlice.reducer;
