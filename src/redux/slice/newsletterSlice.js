import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCreateNewsletter = createAsyncThunk(
  "newsletter/fetchCreateNewsletter",
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/newsletter`,
        { email },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { error: "Failed to fetch products" },
      );
    }
  },
);

const initialState = {
  subscriptions: [],
  status: "idle",
  error: null,
  message: null,
};

const newsletterSlice = createSlice({
  name: "newsletter",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCreateNewsletter.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCreateNewsletter.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.subscriptions.push(action.payload);
        state.message = action.payload.message || "Subscribed successfully";
      })
      .addCase(fetchCreateNewsletter.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.error || "Failed to create contact";
      });
    // builder
    //   .addCase(fetchGetAllContacts.pending, (state) => {
    //     state.status = "loading";
    //     state.error = null;
    //   })
    //   .addCase(fetchGetAllContacts.fulfilled, (state, action) => {
    //     state.status = "succeeded";
    //     state.contacts = action.payload;
    //   })
    //   .addCase(fetchGetAllContacts.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.error = action.payload?.error || "Failed to fetch contacts";
    //   })
    //   .addCase(deleteContact.fulfilled, (state, action) => {
    //     state.contacts = state.contacts.filter((c) => c._id !== action.payload);
    //   });
  },
});

export const { clearError, clearMessage } = newsletterSlice.actions;
export default newsletterSlice.reducer;
