import { configureStore } from "@reduxjs/toolkit";
import signupSliceReducer from "./slice/authSlices/signupSlice";
import verifySliceReducer from "./slice/authSlices/verifySlice";
import loginSliceReducer from "./slice/authSlices/loginSlice";
import forgetSliceReducer from "./slice/authSlices/forgetSlice";
import resetSliceReducer from "./slice/authSlices/resetSlice";
import categoriesSliceReducer from "./slice/categoriesSlice";
import productsSliceReducer from "./slice/productsSlice";
import contactSliceReducer from "./slice/contactSlice";
import newsletterSliceReducer from "./slice/newsletterSlice";
import accountSliceReducer from "./slice/accountSlice";
import wishlistSliceReducer from "./slice/wishlistSlice";
import cartSliceReducer from "./slice/cartSlice";
import orderSliceReducer from "./slice/orderSlice";

export const store = configureStore({
  reducer: {
    signup: signupSliceReducer,
    verify: verifySliceReducer,
    login: loginSliceReducer,
    forget: forgetSliceReducer,
    reset: resetSliceReducer,
    categories: categoriesSliceReducer,
    products: productsSliceReducer,
    contact: contactSliceReducer,
    newsletter: newsletterSliceReducer,
    account: accountSliceReducer,
    wishlist: wishlistSliceReducer,
    cart: cartSliceReducer,
    order: orderSliceReducer,
    wishlist: wishlistSliceReducer,
  },
});
