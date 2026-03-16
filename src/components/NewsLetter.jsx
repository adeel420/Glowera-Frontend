import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCreateNewsletter } from "../redux/slice/newsletterSlice";
import { toast } from "react-hot-toast";
import Loader from "./loader/Loader";

const NewsLetter = () => {
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
    <div className="bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 py-16 px-6">
      {status === "loading" && <Loader />}
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

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-6 py-3 rounded-full bg-white/95 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white shadow-lg"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-white text-pink-500 font-semibold rounded-full hover:bg-pink-50 transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-xl cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
