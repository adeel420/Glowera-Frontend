import React, { useEffect, useState } from "react";
import { GoMail } from "react-icons/go";
import { FaEye, FaTrash, FaPhone, FaTimes } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGetAllContacts,
  deleteContact,
} from "../../redux/slice/contactSlice";

const Contact_Messages = () => {
  const { contacts, status } = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    dispatch(fetchGetAllContacts());
  }, [dispatch]);

  const filtered = contacts.filter((c) => {
    const q = search.toLowerCase();
    return (
      c.firstName?.toLowerCase().includes(q) ||
      c.lastName?.toLowerCase().includes(q) ||
      c.email?.toLowerCase().includes(q) ||
      c.phone?.includes(q) ||
      c.message?.toLowerCase().includes(q)
    );
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      dispatch(deleteContact(id));
    }
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-PK", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="animate-fade-in-up">
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-1">
          Contact Messages
        </h2>
        <p className="text-gray-500 text-sm">
          View and manage customer inquiries
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-2xl p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-xs uppercase tracking-wide">
                Total Messages
              </p>
              <p className="text-4xl font-bold mt-1">{contacts.length}</p>
            </div>
            <GoMail className="text-5xl opacity-30" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-400 text-white rounded-2xl p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-xs uppercase tracking-wide">
                Today
              </p>
              <p className="text-4xl font-bold mt-1">
                {
                  contacts.filter(
                    (c) =>
                      new Date(c.createdAt).toDateString() ===
                      new Date().toDateString(),
                  ).length
                }
              </p>
            </div>
            <GoMail className="text-5xl opacity-30" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-400 text-white rounded-2xl p-5 shadow-lg sm:col-span-2 md:col-span-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-xs uppercase tracking-wide">
                This Month
              </p>
              <p className="text-4xl font-bold mt-1">
                {
                  contacts.filter((c) => {
                    const d = new Date(c.createdAt);
                    const now = new Date();
                    return (
                      d.getMonth() === now.getMonth() &&
                      d.getFullYear() === now.getFullYear()
                    );
                  }).length
                }
              </p>
            </div>
            <GoMail className="text-5xl opacity-30" />
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400 text-xl" />
        <input
          type="text"
          placeholder="Search by name, email, phone or message..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border-2 border-pink-200 rounded-2xl focus:outline-none focus:border-pink-500 transition-all text-sm"
        />
      </div>

      {/* Messages List */}
      {status === "loading" ? (
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-pink-500 border-t-transparent"></div>
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-white rounded-2xl border-2 border-pink-200 p-12 text-center">
          <GoMail className="text-6xl text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 font-semibold">No messages found</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((msg, index) => (
            <div
              key={msg._id}
              className="bg-white rounded-2xl shadow border-2 border-pink-100 hover:border-pink-300 hover:shadow-lg transition-all p-4 md:p-5"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  {/* Avatar */}
                  <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow">
                    {msg.firstName?.charAt(0).toUpperCase()}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-800 text-base truncate">
                      {msg.firstName} {msg.lastName}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <GoMail className="text-pink-400" /> {msg.email}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <FaPhone className="text-pink-400 text-[10px]" />{" "}
                        {msg.phone}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                      {msg.message}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {formatDate(msg.createdAt)}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
                  <button
                    onClick={() => setSelectedMessage(msg)}
                    className="p-2 text-pink-500 hover:bg-pink-50 cursor-pointer rounded-lg transition-all"
                    title="View"
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() => handleDelete(msg._id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg cursor-pointer transition-all"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg border-2 border-pink-200 animate-fade-in-up">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-5 rounded-t-2xl flex items-center justify-between">
              <h3 className="text-white font-bold text-lg">Message Details</h3>
              <button
                onClick={() => setSelectedMessage(null)}
                className="text-white hover:bg-white/20 p-1.5 rounded-lg cursor-pointer transition-all"
              >
                <FaTimes />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              {/* Avatar + Name */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  {selectedMessage.firstName?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">
                    {selectedMessage.firstName} {selectedMessage.lastName}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {formatDate(selectedMessage.createdAt)}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="bg-pink-50 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-3">
                  <GoMail className="text-pink-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    {selectedMessage.email}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-pink-500 flex-shrink-0 text-xs" />
                  <span className="text-sm text-gray-700">
                    {selectedMessage.phone}
                  </span>
                </div>
              </div>

              {/* Message */}
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Message
                </p>
                <div className="bg-gray-50 border border-pink-100 rounded-xl p-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {selectedMessage.message}
                  </p>
                </div>
              </div>

              {/* Reply Button */}
              <a
                href={`mailto:${selectedMessage.email}?subject=Re: Your message to Glowera`}
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl font-bold hover:shadow-lg cursor-pointer transition-all"
              >
                <GoMail className="text-lg" /> Reply via Email
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact_Messages;
