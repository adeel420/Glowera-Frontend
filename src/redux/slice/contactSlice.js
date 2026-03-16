import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCreateContact = createAsyncThunk(
  "contact/fetchCreateContact",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/contact`,
        formData,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { error: "Failed to fetch products" },
      );
    }
  },
);

export const fetchGetAllContacts = createAsyncThunk(
  "contact/fetchGetAllContacts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/contact`,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { error: "Failed to fetch contacts" },
      );
    }
  },
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${import.meta.env.VITE_SERVER_API}/contact/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { error: "Failed to delete contact" },
      );
    }
  },
);

const initialState = {
  contacts: [],
  status: "idle",
  error: null,
  message: null,
};

const contactSlice = createSlice({
  name: "contact",
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
    builder.addCase(fetchCreateContact.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder
      .addCase(fetchGetAllContacts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCreateContact.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.contacts.push(action.payload);
        state.message = "Contact created successfully";
      })
      .addCase(fetchGetAllContacts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.contacts = action.payload;
      })
      .addCase(fetchCreateContact.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.error || "Failed to create contact";
      })
      .addCase(fetchGetAllContacts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.error || "Failed to fetch contacts";
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter((c) => c._id !== action.payload);
      });
  },
});

export const { clearError, clearMessage } = contactSlice.actions;
export default contactSlice.reducer;
