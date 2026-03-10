import { configureStore } from "@reduxjs/toolkit";
import signupSliceReducer from "./slice/authSlices/signupSlice";
import verifySliceReducer from "./slice/authSlices/verifySlice";
import loginSliceReducer from "./slice/authSlices/loginSlice";

export const store = configureStore({
  reducer: {
    signup: signupSliceReducer,
    verify: verifySliceReducer,
    login: loginSliceReducer,
  },
});
