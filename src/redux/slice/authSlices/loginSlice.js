import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLogin = createAsyncThunk(
  "login/fetch",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/user/login`,
        { email, password },
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

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: "",
    status: "ok",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload;
        state.error = null;
      })

      .addCase(fetchLogin.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload?.message || "Something went wrong";
      });
  },
});

export default loginSlice.reducer;
