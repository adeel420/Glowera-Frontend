import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Page_Not_Found from "./pages/Page_Not_Found";
import Detailed from "./pages/Detailed";
import Admin_Dashboard from "./pages/Admin_Dashboard";
import { Toaster } from "react-hot-toast";
import Verify_Email from "./pages/Verify_Email";
import Forget_Password from "./pages/Forget_Password";
import Reset_Password from "./pages/Reset_Password";
import Loader from "./components/loader/Loader";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const hidePaths = [
    "/login",
    "/signup",
    "/admin-dashboard",
    "/verify-email",
    "/forget-password",
    "/reset-password",
  ];
  const hideHeaderFooter = hidePaths.includes(location.pathname);
  return (
    <>
      {loading && <Loader />}
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-email" element={<Verify_Email />} />
        <Route path="/forget-password" element={<Forget_Password />} />
        <Route path="/reset-password" element={<Reset_Password />} />
        <Route path="/detail" element={<Detailed />} />
        <Route path="/admin-dashboard" element={<Admin_Dashboard />} />
        <Route path="/*" element={<Page_Not_Found />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
      <Toaster />
    </>
  );
}

export default App;
