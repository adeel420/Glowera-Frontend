import { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaEdit,
  FaEnvelope,
  FaTimesCircle,
  FaTrash,
  FaUser,
  FaTimes,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllUsers,
  updateUserRole,
} from "../../redux/slice/authSlices/loginSlice";
import toast from "react-hot-toast";

const User_Management = () => {
  const { users } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedRole, setSelectedRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const verifiedUsers =
    users?.filter((user) => user?.isVerified === true).length || 0;

  const unverifiedUsers =
    users?.filter((user) => user?.isVerified === false).length || 0;

  const adminUsers = users?.filter((user) => user?.role === 1).length || 0;

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const handleOpenModal = (user) => {
    setSelectedUser(user);
    setSelectedRole(user.role === 1 ? "admin" : "user");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
    setSelectedRole("");
  };

  const handleUpdateRole = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const roleValue = selectedRole === "admin" ? 1 : 0;

    const result = await dispatch(
      updateUserRole({ userId: selectedUser._id, role: roleValue }),
    );

    setIsSubmitting(false);

    if (updateUserRole.fulfilled.match(result)) {
      toast.success(
        `Role updated to ${selectedRole === "admin" ? "Admin" : "User"} successfully!`,
      );
      handleCloseModal();
      dispatch(fetchAllUsers());
    } else {
      toast.error(result.payload?.error || "Failed to update role");
    }
  };

  const filteredUsers = users?.filter(
    (user) =>
      user?.name?.toLowerCase().includes(search.toLowerCase()) ||
      user?.email?.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className="animate-fade-in-up">
      <div className="mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
          User Management
        </h2>
        <p className="text-gray-600">Manage all registered users</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">
                Total Users
              </p>
              <p className="text-4xl font-bold mt-2">{users?.length}</p>
            </div>
            <FaUser className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-400 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up animation-delay-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">
                Verified
              </p>
              <p className="text-4xl font-bold mt-2">{verifiedUsers}</p>
            </div>
            <FaCheckCircle className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-yellow-400 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up animation-delay-400">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">
                Unverified
              </p>
              <p className="text-4xl font-bold mt-2">{unverifiedUsers}</p>
            </div>
            <FaTimesCircle className="text-5xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-400 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all animate-fade-in-up animation-delay-600">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm uppercase tracking-wide">
                Admins
              </p>
              <p className="text-4xl font-bold mt-2">{adminUsers}</p>
            </div>
            <FaUser className="text-5xl opacity-30" />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6 animate-fade-in-up animation-delay-800">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-6 py-4 border-2 border-pink-200 rounded-2xl focus:outline-none focus:border-pink-500 transition-all shadow-sm"
        />
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-pink-200 animate-fade-in-up animation-delay-1000">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-pink-500 to-rose-500 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wide">
                  Role
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wide">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr className="border-b border-pink-100 hover:bg-pink-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white h-12 w-12 rounded-xl flex items-center justify-center font-bold shadow-md">
                          {user?.name
                            ?.split(" ")
                            .map((word) => word[0])
                            .join("")
                            .toUpperCase()}
                        </div>
                        <span className="font-semibold text-gray-800">
                          {user?.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        <FaEnvelope className="text-pink-500" />
                        {user?.email}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-4 py-2 rounded-full text-xs font-bold bg-green-100 text-green-800">
                        {user?.isVerified ? "Verified" : "Unverified"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-pink-100 to-rose-100 text-pink-600">
                          {user?.role === 1 ? "Admin" : "User"}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleOpenModal(user)}
                        className="text-pink-500 hover:text-pink-700 transition-colors p-2 hover:bg-pink-50 rounded-lg cursor-pointer"
                        title="Edit Role"
                      >
                        <FaEdit />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-8 text-gray-500">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Role Update Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl animate-fade-in-up">
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-6 flex items-center justify-between rounded-t-2xl">
              <h3 className="text-2xl font-bold uppercase tracking-wide">
                Update User Role
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-white hover:bg-white/20 p-2 rounded-lg cursor-pointer transition-colors"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <form onSubmit={handleUpdateRole} className="p-6 space-y-6">
              {/* User Info */}
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-4 border-2 border-pink-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white h-12 w-12 rounded-xl flex items-center justify-center font-bold shadow-md">
                    {selectedUser?.name
                      ?.split(" ")
                      .map((word) => word[0])
                      .join("")
                      .toUpperCase()}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">
                      {selectedUser?.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {selectedUser?.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Role Selection */}
              <div>
                <label className="block text-sm font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-3">
                  Select Role *
                </label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 border-2 border-pink-200 rounded-xl cursor-pointer hover:bg-pink-50 transition-all">
                    <input
                      type="radio"
                      name="role"
                      value="user"
                      checked={selectedRole === "user"}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      className="w-5 h-5 text-pink-500 focus:ring-pink-500"
                    />
                    <div className="flex-1">
                      <p className="font-bold text-gray-800">User</p>
                      <p className="text-xs text-gray-600">
                        Regular user with limited access
                      </p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-4 border-2 border-pink-200 rounded-xl cursor-pointer hover:bg-pink-50 transition-all">
                    <input
                      type="radio"
                      name="role"
                      value="admin"
                      checked={selectedRole === "admin"}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      className="w-5 h-5 text-pink-500 focus:ring-pink-500"
                    />
                    <div className="flex-1">
                      <p className="font-bold text-gray-800">Admin</p>
                      <p className="text-xs text-gray-600">
                        Full access to admin panel
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Updating...
                    </>
                  ) : (
                    "Update Role"
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  disabled={isSubmitting}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300 transition-all disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default User_Management;
