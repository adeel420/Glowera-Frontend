import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <div className="bg-gradient-to-r from-[#947972] to-[#f1e5e5] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="red-text text-[28px] lg:text-[32px] text-white mb-2">
          stay connected
        </h2>
        <h1 className="text-3xl lg:text-4xl font-light text-white mb-4">
          SUBSCRIBE TO OUR NEWSLETTER
        </h1>
        <p className="text-white/90 font-light text-[15px] lg:text-[16px] mb-8 max-w-2xl mx-auto">
          Get the latest updates on new products and upcoming sales
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-6 py-3 rounded-lg bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-white text-[#947972] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 uppercase tracking-wide"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
