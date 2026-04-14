import React, { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { FaEye, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllOrders, fetchUpdateOrderStatus, fetchDeleteOrder } from "../../redux/slice/orderSlice";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  processing: "bg-blue-100 text-blue-800",
  shipped: "bg-purple-100 text-purple-800",
  delivered: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

const Orders = () => {
  const dispatch = useDispatch();
  const { orders, status } = useSelector((state) => state.order);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    dispatch(fetchAllOrders());
  }, [dispatch]);

  const filtered = orders.filter((o) => {
    const matchSearch =
      o._id.toLowerCase().includes(search.toLowerCase()) ||
      `${o.billing?.firstName} ${o.billing?.lastName}`.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "all" || o.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const counts = {
    total: orders.length,
    pending: orders.filter((o) => o.status === "pending").length,
    processing: orders.filter((o) => o.status === "processing").length,
    delivered: orders.filter((o) => o.status === "delivered").length,
  };

  const handleStatusChange = (orderId, newStatus) => {
    dispatch(fetchUpdateOrderStatus({ orderId, status: newStatus }));
  };

  const handleDelete = (orderId) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      dispatch(fetchDeleteOrder({ orderId }));
      if (selectedOrder?._id === orderId) setSelectedOrder(null);
    }
  };

  return (
    <div className="animate-fade-in-up">
      <div className="mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
          Orders Management
        </h2>
        <p className="text-gray-600">Track and manage customer orders</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total Orders", value: counts.total, color: "from-pink-500 to-rose-500" },
          { label: "Pending", value: counts.pending, color: "from-yellow-500 to-yellow-400" },
          { label: "Processing", value: counts.processing, color: "from-blue-500 to-blue-400" },
          { label: "Delivered", value: counts.delivered, color: "from-green-500 to-green-400" },
        ].map((stat, i) => (
          <div key={i} className={`bg-gradient-to-br ${stat.color} text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm uppercase tracking-wide">{stat.label}</p>
                <p className="text-4xl font-bold mt-2">{stat.value}</p>
              </div>
              <BsCart3 className="text-5xl opacity-30" />
            </div>
          </div>
        ))}
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by order ID or customer name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-6 py-4 border-2 border-pink-200 rounded-2xl focus:outline-none focus:border-pink-500 transition-all shadow-sm"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-6 py-4 border-2 border-pink-200 rounded-2xl focus:outline-none focus:border-pink-500 transition-all shadow-sm"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {/* Loading */}
      {status === "loading" && (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-pink-500 border-t-transparent"></div>
        </div>
      )}

      {/* Orders Table */}
      {status !== "loading" && (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-pink-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-pink-500 to-rose-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">Order ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">Customer</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">Total</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">Payment</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">Status</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wide">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-gray-400">No orders found</td>
                  </tr>
                ) : (
                  filtered.map((order) => (
                    <tr key={order._id} className="border-b border-pink-100 hover:bg-pink-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-pink-600 text-xs">#{order._id.slice(-8).toUpperCase()}</td>
                      <td className="px-6 py-4 text-gray-700 font-medium">
                        {order.billing?.firstName} {order.billing?.lastName}
                        <p className="text-xs text-gray-400">{order.billing?.phone}</p>
                      </td>
                      <td className="px-6 py-4 text-gray-700 text-sm">
                        {new Date(order.createdAt).toLocaleDateString("en-PK", { dateStyle: "medium" })}
                      </td>
                      <td className="px-6 py-4 font-bold text-gray-800">Rs {order.totalAmount?.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${order.paymentMethod === "cod" ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"}`}>
                          {order.paymentMethod === "cod" ? "COD" : "Online"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={order.status}
                          onChange={(e) => handleStatusChange(order._id, e.target.value)}
                          className={`px-3 py-1.5 rounded-full text-xs font-bold border-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-400 ${statusColors[order.status]}`}
                        >
                          {["pending", "processing", "shipped", "delivered", "cancelled"].map((s) => (
                            <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-6 py-4 text-center flex items-center justify-center gap-2">
                        <button
                          onClick={() => setSelectedOrder(selectedOrder?._id === order._id ? null : order)}
                          className="text-pink-600 hover:text-pink-800 transition-colors p-2 hover:bg-pink-50 rounded-lg"
                          title="View Details"
                        >
                          <FaEye />
                        </button>
                        <button
                          onClick={() => handleDelete(order._id)}
                          className="text-red-400 hover:text-red-600 transition-colors p-2 hover:bg-red-50 rounded-lg"
                          title="Delete Order"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Order Detail Panel */}
      {selectedOrder && (
        <div className="mt-8 bg-white rounded-2xl shadow-lg border-2 border-pink-200 p-8 animate-fade-in-up">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Order Details — #{selectedOrder._id.slice(-8).toUpperCase()}
            </h3>
            <button onClick={() => setSelectedOrder(null)} className="text-gray-400 hover:text-gray-600 text-2xl font-bold">✕</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Billing Info */}
            <div>
              <h4 className="font-bold text-gray-700 uppercase tracking-wide text-sm mb-3">Billing Info</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-semibold">Name:</span> {selectedOrder.billing?.firstName} {selectedOrder.billing?.lastName}</p>
                <p><span className="font-semibold">Email:</span> {selectedOrder.billing?.email}</p>
                <p><span className="font-semibold">Phone:</span> {selectedOrder.billing?.phone}</p>
                <p><span className="font-semibold">Address:</span> {selectedOrder.billing?.address}, {selectedOrder.billing?.city}</p>
                {selectedOrder.billing?.postalCode && <p><span className="font-semibold">Postal Code:</span> {selectedOrder.billing?.postalCode}</p>}
              </div>
            </div>

            {/* Order Info */}
            <div>
              <h4 className="font-bold text-gray-700 uppercase tracking-wide text-sm mb-3">Order Info</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-semibold">Payment:</span> {selectedOrder.paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"}</p>
                <p><span className="font-semibold">Total:</span> Rs {selectedOrder.totalAmount?.toLocaleString()}</p>
                <p><span className="font-semibold">Date:</span> {new Date(selectedOrder.createdAt).toLocaleDateString("en-PK", { dateStyle: "long" })}</p>
                {selectedOrder.paymentProof && (
                  <div>
                    <span className="font-semibold">Payment Proof:</span>
                    <a href={selectedOrder.paymentProof} target="_blank" rel="noreferrer" className="ml-2 text-pink-600 underline">View</a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="mt-6">
            <h4 className="font-bold text-gray-700 uppercase tracking-wide text-sm mb-3">Products Ordered</h4>
            <div className="space-y-3">
              {selectedOrder.products?.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-pink-50 rounded-xl">
                  <img
                    src={item.product?.images?.[0]}
                    alt={item.product?.title}
                    className="w-14 h-14 object-contain rounded-lg bg-white p-1"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-sm">{item.product?.title}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-gray-500">Qty: <span className="font-bold text-gray-700">{item.quantity}</span></span>
                      {item.color?.name && (
                        <div className="flex items-center gap-1">
                          <div
                            className="w-3.5 h-3.5 rounded-full border border-gray-300"
                            style={{ backgroundColor: item.color.hexCode }}
                          ></div>
                          <span className="text-xs text-gray-500">{item.color.name}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="font-bold text-pink-600 text-sm">Rs {(item.product?.exactPrice * item.quantity)?.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
