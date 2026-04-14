import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoginData } from "../redux/slice/authSlices/loginSlice";
import { fetchOrdersByUser } from "../redux/slice/orderSlice";
import axios from "axios";
import { toast } from "react-hot-toast";
import {
  IoBagOutline,
  IoPersonOutline,
  IoLockClosedOutline,
} from "react-icons/io5";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-700",
  processing: "bg-blue-100 text-blue-700",
  shipped: "bg-purple-100 text-purple-700",
  delivered: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
};

const User_Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);
  const { orders, status: orderStatus } = useSelector((state) => state.order);
  const token = localStorage.getItem("token");

  const [activeTab, setActiveTab] = useState("orders");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [pwLoading, setPwLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchLoginData(token));
  }, [dispatch]);

  useEffect(() => {
    if (user?.id) {
      dispatch(fetchOrdersByUser({ userId: user.id }));
    }
  }, [dispatch, user?.id]);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      return toast.error("New passwords do not match");
    }
    if (passwordForm.newPassword.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }
    setPwLoading(true);
    try {
      await axios.put(
        `${import.meta.env.VITE_SERVER_API}/user/change-password`,
        {
          currentPassword: passwordForm.currentPassword,
          newPassword: passwordForm.newPassword,
        },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      toast.success("Password changed successfully!");
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to change password");
    } finally {
      setPwLoading(false);
    }
  };

  return (
    <div className="py-12 px-6 bg-gradient-to-br from-pink-50 via-white to-rose-50 min-h-screen relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <h2 className="red-text text-[32px] lg:text-[36px] bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
            👋 Welcome back
          </h2>
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            {user?.name || "My Dashboard"}
          </h1>
          <p className="text-gray-500 mt-2 text-sm">{user?.email}</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-8 bg-white rounded-2xl p-2 shadow-md border-2 border-pink-100 w-fit mx-auto">
          <button
            onClick={() => {
              setActiveTab("orders");
              setSelectedOrder(null);
            }}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
              activeTab === "orders"
                ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg"
                : "text-gray-500 hover:text-pink-600"
            }`}
          >
            <IoBagOutline size={18} /> My Orders
          </button>
          <button
            onClick={() => {
              setActiveTab("profile");
              setSelectedOrder(null);
            }}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
              activeTab === "profile"
                ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg"
                : "text-gray-500 hover:text-pink-600"
            }`}
          >
            <IoPersonOutline size={18} /> Profile
          </button>
        </div>

        {/* ── ORDERS TAB ── */}
        {activeTab === "orders" && (
          <div className="animate-fade-in-up">
            {orderStatus === "loading" && (
              <div className="flex justify-center items-center h-48">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-pink-500 border-t-transparent"></div>
              </div>
            )}

            {orderStatus !== "loading" && orders.length === 0 && (
              <div className="bg-white rounded-3xl shadow-lg border-2 border-pink-100 p-16 text-center max-w-xl mx-auto">
                <p className="text-6xl mb-4">📦</p>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  No orders yet
                </h3>
                <p className="text-gray-500">
                  Your orders will appear here once you place one.
                </p>
              </div>
            )}

            {orderStatus !== "loading" && orders.length > 0 && (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order._id}
                    className="bg-white rounded-3xl shadow-lg border-2 border-pink-100 p-6 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Order ID</p>
                        <p className="font-bold text-pink-600 text-sm">
                          #{order._id.slice(-8).toUpperCase()}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {new Date(order.createdAt).toLocaleDateString(
                            "en-PK",
                            { dateStyle: "medium" },
                          )}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 flex-wrap">
                        {order.products?.slice(0, 3).map((item, i) => (
                          <img
                            key={i}
                            src={item.product?.images?.[0]}
                            alt={item.product?.title}
                            className="w-12 h-12 object-contain rounded-xl bg-pink-50 p-1 border border-pink-100"
                          />
                        ))}
                        {order.products?.length > 3 && (
                          <span className="text-xs text-gray-400 font-semibold">
                            +{order.products.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="text-right">
                        <p className="font-bold text-lg bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                          Rs {order.totalAmount?.toLocaleString()}
                        </p>
                        <span
                          className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-bold capitalize ${statusColors[order.status] || "bg-gray-100 text-gray-600"}`}
                        >
                          {order.status}
                        </span>
                      </div>

                      <button
                        onClick={() =>
                          setSelectedOrder(
                            selectedOrder?._id === order._id ? null : order,
                          )
                        }
                        className="text-sm font-bold text-pink-600 border-2 border-pink-200 px-4 py-2 rounded-full hover:bg-pink-50 transition-all whitespace-nowrap"
                      >
                        {selectedOrder?._id === order._id
                          ? "Hide Details"
                          : "View Details"}
                      </button>
                    </div>

                    {/* Expanded Detail */}
                    {selectedOrder?._id === order._id && (
                      <div className="mt-6 pt-6 border-t-2 border-pink-100 animate-fade-in-up">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">
                              Delivery Address
                            </p>
                            <p className="text-sm text-gray-700">
                              {order.billing?.address}, {order.billing?.city}
                            </p>
                            {order.billing?.postalCode && (
                              <p className="text-sm text-gray-500">
                                {order.billing.postalCode}
                              </p>
                            )}
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">
                              Payment Method
                            </p>
                            <p className="text-sm text-gray-700">
                              {order.paymentMethod === "cod"
                                ? "Cash on Delivery"
                                : "Online Payment"}
                            </p>
                          </div>
                        </div>

                        <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">
                          Items Ordered
                        </p>
                        <div className="space-y-3">
                          {order.products?.map((item, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-4 p-3 bg-pink-50 rounded-2xl"
                            >
                              <img
                                src={item.product?.images?.[0]}
                                alt={item.product?.title}
                                className="w-14 h-14 object-contain rounded-xl bg-white p-1"
                              />
                              <div className="flex-1">
                                <p className="font-semibold text-gray-800 text-sm">
                                  {item.product?.title}
                                </p>
                                <div className="flex items-center gap-3 mt-1">
                                  <span className="text-xs text-gray-500">
                                    Qty:{" "}
                                    <span className="font-bold text-gray-700">
                                      {item.quantity}
                                    </span>
                                  </span>
                                  {item.color?.name && (
                                    <div className="flex items-center gap-1">
                                      <div
                                        className="w-3.5 h-3.5 rounded-full border border-gray-300"
                                        style={{
                                          backgroundColor: item.color.hexCode,
                                        }}
                                      ></div>
                                      <span className="text-xs text-gray-500">
                                        {item.color.name}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <p className="font-bold text-pink-600 text-sm">
                                Rs{" "}
                                {(
                                  item.product?.exactPrice * item.quantity
                                )?.toLocaleString()}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── PROFILE TAB ── */}
        {activeTab === "profile" && (
          <div className="animate-fade-in-up max-w-xl mx-auto">
            {/* User Info Card */}
            <div className="bg-white rounded-3xl shadow-lg border-2 border-pink-100 p-8 mb-6 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl font-bold">
                  {user?.name?.charAt(0)?.toUpperCase()}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{user?.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{user?.email}</p>
            </div>

            {/* Change Password */}
            <div className="bg-white rounded-3xl shadow-lg border-2 border-pink-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                  <IoLockClosedOutline className="text-white" size={18} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Change Password
                </h3>
              </div>

              <form onSubmit={handlePasswordChange} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    value={passwordForm.currentPassword}
                    onChange={(e) =>
                      setPasswordForm({
                        ...passwordForm,
                        currentPassword: e.target.value,
                      })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="Enter current password"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    value={passwordForm.newPassword}
                    onChange={(e) =>
                      setPasswordForm({
                        ...passwordForm,
                        newPassword: e.target.value,
                      })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="Enter new password"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wide bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={passwordForm.confirmPassword}
                    onChange={(e) =>
                      setPasswordForm({
                        ...passwordForm,
                        confirmPassword: e.target.value,
                      })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="Confirm new password"
                  />
                </div>
                <button
                  type="submit"
                  disabled={pwLoading}
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-full font-bold uppercase tracking-wide hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {pwLoading ? "Changing..." : "Change Password"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default User_Dashboard;
