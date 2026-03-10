import React, { useState } from "react";
import { Link } from "react-router-dom";

const Forget_Password = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="linear w-full min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Animated Background with Multiple Moving Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-10 w-64 h-64 bg-rose-400 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob animation-delay-1000"></div>
        <div className="absolute bottom-40 right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md border-2 border-pink-100 animate-fade-in-up">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold animate-slide-in-down">
            <span className="text-6xl bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              G
            </span>
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              LOWERA
            </span>
          </h1>
          <h2 className="red-text text-[28px] bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mt-3 animate-fade-in animation-delay-200">
            🌸 forgot your password?
          </h2>
          <p className="text-gray-600 text-sm font-light mt-2 animate-fade-in animation-delay-400">
            Enter your email address and we'll send you an OTP to reset your
            password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
              Email Address
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
              placeholder="john@example.com"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-full font-bold uppercase tracking-wide hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Confirm
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Already know the password?{" "}
            <Link
              to="/signin"
              className="text-pink-600 font-bold hover:text-pink-700 hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>

        {/* Decorative Elements with Animation */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full opacity-40 animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 -right-2 w-16 h-16 bg-gradient-to-br from-pink-300 to-rose-300 rounded-full opacity-50 animate-bounce-slow"></div>
      </div>
    </div>
  );
};

export default Forget_Password;
