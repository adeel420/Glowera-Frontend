import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCreateNewsletter = createAsyncThunk(
  "newsletter/create",
  async ({ email }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_SERVER_API}/newsletter`, { email });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { error: "Failed to subscribe" });
    }
  }
);

export const fetchAllNewsletters = createAsyncThunk(
  "newsletter/all",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_API}/newsletter`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { error: "Failed to fetch subscribers" });
    }
  }
);

export const fetchDeleteNewsletter = createAsyncThunk(
  "newsletter/delete",
  async ({ id }, { rejectWithValue }) => {
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER_API}/newsletter`, { data: { id } });
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data || { error: "Failed to delete subscriber" });
    }
  }
);

const newsletterSlice = createSlice({
  name: "newsletter",
  initialState: {
    subscribers: [],
    status: "idle",
    error: null,
    message: null,
  },
  reducers: {
    clearMessage: (state) => { state.message = null; },
    clearError: (state) => { state.error = null; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCreateNewsletter.pending, (state) => { state.status = "loading"; state.error = null; })
      .addCase(fetchCreateNewsletter.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message = action.payload.message || "Subscribed successfully";
      })
      .addCase(fetchCreateNewsletter.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.error || "Failed to subscribe";
      })
      .addCase(fetchAllNewsletters.pending, (state) => { state.status = "loading"; })
      .addCase(fetchAllNewsletters.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.subscribers = action.payload;
      })
      .addCase(fetchAllNewsletters.rejected, (state) => { state.status = "failed"; })
      .addCase(fetchDeleteNewsletter.fulfilled, (state, action) => {
        state.subscribers = state.subscribers.filter((s) => s._id !== action.payload);
      });
  },
});

export const { clearMessage, clearError } = newsletterSlice.actions;
export default newsletterSlice.reducer;
