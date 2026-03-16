import React, { useState } from "react";
import { navLinks } from "../data/Data";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateNewsletter } from "../redux/slice/newsletterSlice";
import toast from "react-hot-toast";
import Loader from "./loader/Loader";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { status } = useSelector((state) => state.newsletter);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(fetchCreateNewsletter({ email }));
    if (fetchCreateNewsletter.fulfilled.match(result)) {
      toast.success("Subscribed successfully");
      setEmail("");
    } else {
      toast.error(result.payload?.error || "Failed to subscribe");
    }
  };
  return (
    <footer className="relative bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 overflow-hidden">
      {status === "loading" && <Loader />}
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-300/30 to-rose-300/30 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-rose-300/30 to-pink-300/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-4xl bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                G
              </span>
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                LOWERA
              </span>
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              Premium beauty and skincare products for your natural glow.
              Discover the perfect blend of luxury and care.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaTwitter, FaPinterest].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300"
                  >
                    <Icon className="text-sm" />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up animation-delay-200">
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.link}
                    className="text-gray-700 hover:text-pink-600 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 group-hover:w-4 transition-all duration-300"></span>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="animate-fade-in-up animation-delay-400">
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Customer Service
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              {[
                "Track Order",
                "Returns & Exchanges",
                "Shipping Info",
                "FAQs",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-pink-600 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 group-hover:w-4 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up animation-delay-600">
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Get In Touch
            </h3>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 text-white flex items-center justify-center flex-shrink-0">
                  <MdEmail />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p>info@glowera.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 text-white flex items-center justify-center flex-shrink-0">
                  <MdPhone />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 text-white flex items-center justify-center flex-shrink-0">
                  <MdLocationOn />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Address</p>
                  <p>123 Beauty Street, NY 10001</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t-2 border-pink-200 pt-8 mb-8 animate-fade-in-up animation-delay-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-700 text-sm mb-6">
              Get exclusive offers and beauty tips delivered to your inbox!
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border-2 border-pink-200 focus:border-pink-500 focus:outline-none transition-all"
              />
              <button className="px-8 py-3 rounded-full cursor-pointer bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-pink-200 pt-6 text-center animate-fade-in-up animation-delay-1000">
          <p className="text-gray-700 text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Glowera
            </span>
            . All rights reserved. Made with ❤️ for beauty lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
