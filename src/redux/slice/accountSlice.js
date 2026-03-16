import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAccountSettings = createAsyncThunk(
  "account/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_API}/account`);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { error: "Failed to fetch settings" });
    }
  }
);

export const saveAccountSettings = createAsyncThunk(
  "account/save",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_SERVER_API}/account`, formData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { error: "Failed to save settings" });
    }
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState: {
    settings: null,
    status: "idle",
    saveStatus: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccountSettings.pending, (state) => { state.status = "loading"; })
      .addCase(fetchAccountSettings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.settings = action.payload;
      })
      .addCase(fetchAccountSettings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.error;
      })
      .addCase(saveAccountSettings.pending, (state) => { state.saveStatus = "loading"; })
      .addCase(saveAccountSettings.fulfilled, (state, action) => {
        state.saveStatus = "succeeded";
        state.settings = action.payload.data;
      })
      .addCase(saveAccountSettings.rejected, (state, action) => {
        state.saveStatus = "failed";
        state.error = action.payload?.error;
      });
  },
});

export default accountSlice.reducer;
