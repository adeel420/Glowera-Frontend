import React, { useEffect, useState } from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaTrash, FaDownload } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllNewsletters, fetchDeleteNewsletter } from "../../redux/slice/newsletterSlice";

const Newsletter_Emails = () => {
  const dispatch = useDispatch();
  const { subscribers, status } = useSelector((state) => state.newsletter);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchAllNewsletters());
  }, [dispatch]);

  const filtered = subscribers.filter((s) =>
    s.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm("Remove this subscriber?")) {
      dispatch(fetchDeleteNewsletter({ id }));
    }
  };

  const handleExport = () => {
    const csv = "Email,Date\n" + subscribers.map((s) =>
      `${s.email},${new Date(s.createdAt).toLocaleDateString("en-PK")}`
    ).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "newsletter_subscribers.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="animate-fade-in-up">
      <div className="mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
          Newsletter Subscribers
        </h2>
        <p className="text-gray-600">Manage newsletter email list</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">Total Subscribers</p>
              <p className="text-4xl font-bold mt-2">{subscribers.length}</p>
            </div>
            <IoNewspaperOutline className="text-5xl opacity-30" />
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-400 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">This Month</p>
              <p className="text-4xl font-bold mt-2">
                {subscribers.filter((s) => {
                  const d = new Date(s.createdAt);
                  const now = new Date();
                  return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
                }).length}
              </p>
            </div>
            <IoNewspaperOutline className="text-5xl opacity-30" />
          </div>
        </div>
      </div>

      {/* Search and Export */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-6 py-4 border-2 border-pink-200 rounded-2xl focus:outline-none focus:border-pink-500 transition-all shadow-sm"
        />
        <button
          onClick={handleExport}
          className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
        >
          <FaDownload /> Export CSV
        </button>
      </div>

      {/* Loading */}
      {status === "loading" && (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-pink-500 border-t-transparent"></div>
        </div>
      )}

      {/* Table */}
      {status !== "loading" && (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-pink-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-pink-500 to-rose-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">#</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">Subscribed Date</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wide">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-gray-400">No subscribers found</td>
                  </tr>
                ) : (
                  filtered.map((subscriber, index) => (
                    <tr key={subscriber._id} className="border-b border-pink-100 hover:bg-pink-50 transition-colors">
                      <td className="px-6 py-4 text-gray-500 text-sm">{index + 1}</td>
                      <td className="px-6 py-4 text-gray-700 font-medium">{subscriber.email}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">
                        {new Date(subscriber.createdAt).toLocaleDateString("en-PK", { dateStyle: "medium" })}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => handleDelete(subscriber._id)}
                          className="text-red-400 hover:text-red-600 transition-colors p-2 hover:bg-red-50 rounded-lg"
                          title="Delete"
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
    </div>
  );
};

export default Newsletter_Emails;
