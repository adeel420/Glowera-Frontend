import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Loader from "./components/loader/Loader";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Page_Not_Found = lazy(() => import("./pages/Page_Not_Found"));
const Detailed = lazy(() => import("./pages/Detailed"));
const Admin_Dashboard = lazy(() => import("./pages/Admin_Dashboard"));
const CategoryProducts = lazy(() => import("./pages/CategoryProducts"));
const Verify_Email = lazy(() => import("./pages/Verify_Email"));
const Forget_Password = lazy(() => import("./pages/Forget_Password"));
const Reset_Password = lazy(() => import("./pages/Reset_Password"));

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
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
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/category/:id" element={<CategoryProducts />} />
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
          <Route path="/detail/:id" element={<Detailed />} />
          <Route path="/admin-dashboard" element={<Admin_Dashboard />} />
          <Route path="/*" element={<Page_Not_Found />} />
        </Routes>
      </Suspense>
      {!hideHeaderFooter && <Footer />}
      <Toaster />
    </>
  );
}

export default App;
