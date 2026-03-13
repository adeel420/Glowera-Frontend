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

export const fetchLoginData = createAsyncThunk(
  "login/fetchData",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/user/login-data`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/user/all`,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const updateUserRole = createAsyncThunk(
  "users/updateRole",
  async ({ userId, role }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_SERVER_API}/user/update-role/${userId}`,
        { role },
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
    users: [],
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
    builder
      .addCase(fetchLoginData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLoginData.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload;
        state.error = null;
      })
      .addCase(fetchLoginData.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload?.message || "Something went wrong";
      });
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.users = action.payload;
      state.error = null;
    });
    builder
      .addCase(updateUserRole.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserRole.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const updatedUser = action.payload.user;
        const index = state.users.findIndex((u) => u._id === updatedUser._id);
        if (index !== -1) {
          state.users[index] = updatedUser;
        }
        state.error = null;
      })
      .addCase(updateUserRole.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload?.error || "Failed to update role";
      });
  },
});

export default loginSlice.reducer;
