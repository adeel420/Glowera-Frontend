import { configureStore } from "@reduxjs/toolkit";
import signupSliceReducer from "./slice/authSlices/signupSlice";
import verifySliceReducer from "./slice/authSlices/verifySlice";
import loginSliceReducer from "./slice/authSlices/loginSlice";
import forgetSliceReducer from "./slice/authSlices/forgetSlice";
import resetSliceReducer from "./slice/authSlices/resetSlice";
import categoriesSliceReducer from "./slice/categoriesSlice";
import productsSliceReducer from "./slice/productsSlice";

export const store = configureStore({
  reducer: {
    signup: signupSliceReducer,
    verify: verifySliceReducer,
    login: loginSliceReducer,
    forget: forgetSliceReducer,
    reset: resetSliceReducer,
    categories: categoriesSliceReducer,
    products: productsSliceReducer,
  },
});
