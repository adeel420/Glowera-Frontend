import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateOrder } from "../../redux/slice/orderSlice";
import { fetchClearCart } from "../../redux/slice/cartSlice";
import { toast } from "react-hot-toast";
import axios from "axios";

const Online_Payment = ({ bankDetails }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.login);
  const { status } = useSelector((state) => state.order);

  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", address: "", city: "", postalCode: "",
  });

  const products = cart?.products || [];
  const subtotal = products.reduce((sum, item) => sum + (item.product?.exactPrice || 0) * item.quantity, 0);
  const shipping = subtotal > 0 ? 200 : 0;
  const total = subtotal + shipping;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const uploadToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    const res = await axios.post(
      `${import.meta.env.VITE_SERVER_API}/orders/upload-payment-proof`,
      data
    );
    return res.data.url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user?.id) return toast.error("Please login first");
    if (!cart?._id) return toast.error("Your cart is empty");
    if (!file) return toast.error("Please upload payment proof");

    setUploading(true);
    let paymentProofUrl = "";
    try {
      paymentProofUrl = await uploadToCloudinary(file);
    } catch {
      setUploading(false);
      return toast.error("Failed to upload payment proof");
    }
    setUploading(false);

    const orderProducts = products.map((item) => ({
      product: item.product._id,
      quantity: item.quantity,
      color: item.color,
    }));

    const result = await dispatch(
      fetchCreateOrder({
        user: user.id,
        products: orderProducts,
        billing: form,
        paymentMethod: "online",
        paymentProof: paymentProofUrl,
        totalAmount: total,
      })
    );

    if (fetchCreateOrder.fulfilled.match(result)) {
      await dispatch(fetchClearCart({ userId: user.id }));
      toast.success("Order placed successfully! Check your email.");
      navigate("/");
    } else {
      toast.error(result.payload?.error || "Failed to place order");
    }
  };

  return (
    <div className="px-6 py-16">
      {/* Bank Details */}
      <div className="max-w-7xl mx-auto mb-12 animate-fade-in-up">
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Bank Account Details
          </h1>
          <p className="font-light text-[16px] mt-4 leading-relaxed text-gray-600">
            Please transfer the payment to the following bank account and upload the proof below.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl mx-auto border-t-4 border-pink-500 animate-fade-in-up animation-delay-200">
          <div className="space-y-4">
            {bankDetails?.BankName && (
              <div className="flex items-center justify-between py-3 border-b-2 border-pink-100">
                <span className="text-gray-600 font-bold uppercase tracking-wide text-sm">Bank Name</span>
                <span className="text-gray-800 font-bold text-lg">{bankDetails.BankName}</span>
              </div>
            )}
            {bankDetails?.AccountTitle && (
              <div className="flex items-center justify-between py-3 border-b-2 border-pink-100">
                <span className="text-gray-600 font-bold uppercase tracking-wide text-sm">Account Title</span>
                <span className="text-gray-800 font-bold text-lg">{bankDetails.AccountTitle}</span>
              </div>
            )}
            {bankDetails?.AccountNo && (
              <div className="flex items-center justify-between py-3 border-b-2 border-pink-100">
                <span className="text-gray-600 font-bold uppercase tracking-wide text-sm">Account Number</span>
                <span className="text-gray-800 font-bold text-lg font-mono">{bankDetails.AccountNo}</span>
              </div>
            )}
            {bankDetails?.iban && (
              <div className="flex items-center justify-between py-3">
                <span className="text-gray-600 font-bold uppercase tracking-wide text-sm">IBAN</span>
                <span className="text-gray-800 font-bold text-lg font-mono">{bankDetails.iban}</span>
              </div>
            )}
          </div>
          <div className="mt-6 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl">
            <p className="text-sm text-gray-700 text-center font-medium">
              💡 After making the payment, please upload the transaction receipt below to complete your order.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Form */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-pink-100 animate-fade-in-up animation-delay-400">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Billing Details
          </h1>
          <p className="font-light text-[16px] mt-3 leading-relaxed text-gray-600">
            Fill out the form below to complete your order
          </p>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">First Name</label>
                <input name="firstName" value={form.firstName} onChange={handleChange} required type="text" className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">Last Name</label>
                <input name="lastName" value={form.lastName} onChange={handleChange} required type="text" className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="Doe" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">Email Address</label>
              <input name="email" value={form.email} onChange={handleChange} required type="email" className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="john@example.com" />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">Phone Number</label>
              <input name="phone" value={form.phone} onChange={handleChange} required type="tel" className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="+92 300 1234567" />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">Complete Address</label>
              <input name="address" value={form.address} onChange={handleChange} required type="text" className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="House no. 1, Street no. 1, City" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">City</label>
                <input name="city" value={form.city} onChange={handleChange} required type="text" className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="Lahore" />
              </div>
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">Postal Code</label>
                <input name="postalCode" value={form.postalCode} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="54000" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                Upload Payment Proof
              </label>
              <label htmlFor="paymentProof" className="h-[150px] flex flex-col items-center justify-center border-2 border-dashed border-pink-300 rounded-2xl cursor-pointer text-gray-500 hover:text-pink-600 hover:border-pink-500 hover:bg-pink-50 transition-all duration-300">
                <span className="text-5xl font-light leading-none">📤</span>
                <span className="text-sm mt-2 font-medium">Click to upload screenshot</span>
              </label>
              <input id="paymentProof" type="file" accept="image/*,.pdf" className="hidden" onChange={(e) => setFile(e.target.files[0])} />
            </div>

            {file && (
              <div className="mt-4 p-4 bg-pink-50 rounded-2xl animate-fade-in">
                <p className="text-sm text-gray-700 font-medium mb-2">Selected: {file.name}</p>
                <img src={URL.createObjectURL(file)} alt="Preview" className="mt-2 max-h-32 rounded-xl border-2 border-pink-200" />
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading" || uploading}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-full font-bold uppercase tracking-wide hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {uploading ? "Uploading Proof..." : status === "loading" ? "Placing Order..." : "Place Order"}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:sticky lg:top-4">
          <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-pink-100 animate-fade-in-up animation-delay-600">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-6 pb-4 border-b-2 border-pink-200">
              Order Summary
            </h2>

            <div className="space-y-3 mb-6 max-h-60 overflow-y-auto">
              {products.map((item) => (
                <div key={item._id} className="flex items-center gap-3">
                  <img src={item.product?.images?.[0]} alt={item.product?.title} className="w-12 h-12 object-contain rounded-xl bg-pink-50 p-1" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800 line-clamp-1">{item.product?.title}</p>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-bold text-pink-600">Rs {(item.product?.exactPrice * item.quantity).toLocaleString()}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-6 border-t-2 border-pink-100 pt-4">
              <div className="flex justify-between text-gray-700">
                <span className="font-light">Subtotal</span>
                <span className="font-bold">Rs {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span className="font-light">Shipping</span>
                <span className="font-bold">Rs {shipping}</span>
              </div>
              <div className="border-t-2 border-pink-200 pt-4 flex justify-between text-xl">
                <span className="font-bold uppercase tracking-wide">Total</span>
                <span className="font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Rs {total.toLocaleString()}
                </span>
              </div>
            </div>

            <button
              className="w-full bg-white border-2 border-pink-300 text-pink-600 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-pink-50 transition-all duration-300"
              onClick={() => navigate("/shop")}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Online_Payment;
