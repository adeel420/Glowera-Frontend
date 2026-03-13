import React, { useState, useRef, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { navLinks } from "../data/Data";
import { Link, useNavigate } from "react-router-dom";
import { MdDashboard, MdLogout } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/slice/categoriesSlice";
import { fetchLoginData } from "../redux/slice/authSlices/loginSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const categoryDropdownRef = useRef(null);
  const token = localStorage.getItem("token");
  const { categories } = useSelector((state) => state.categories);
  const { user } = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchLoginData(token));
  }, [dispatch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (
        categoryDropdownRef.current &&
        !categoryDropdownRef.current.contains(event.target)
      ) {
        setIsCategoryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setIsDropdownOpen(false);
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-400 text-white py-3 px-4 text-xs sm:text-sm flex justify-center items-center text-center">
        <p>✨ Free Shipping All Over Pakistan | Shop Now!</p>
      </div>

      {/* Main Header - Desktop */}
      <div className="hidden lg:flex px-4 py-4 items-center justify-between border-b border-pink-200 bg-white shadow-sm">
        {/* Logo */}
        <h1
          className="text-4xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-6xl bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            G
          </span>
          <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            lowera
          </span>
        </h1>

        {/* Search */}
        <form className="flex w-[600px] border-2 border-pink-200 rounded-full p-1 items-center focus-within:border-pink-400 transition-all">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full text-sm outline-0 px-4"
          />
          <button className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 transition-all text-white h-[40px] w-[60px] rounded-full flex items-center justify-center text-xl">
            <IoSearchOutline />
          </button>
        </form>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <span
            className="text-2xl cursor-pointer relative hover:text-pink-500 transition-all"
            onClick={() => navigate("/wishlist")}
          >
            <span className="absolute h-4 w-4 rounded-full right-[-8px] top-[-8px] bg-gradient-to-r from-pink-400 to-rose-400 text-white flex items-center justify-center text-xs font-semibold">
              3
            </span>
            <IoIosHeartEmpty />
          </span>

          {token ? (
            <div className="relative" ref={dropdownRef}>
              <div
                className="cursor-pointer h-[45px] w-[45px] flex items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-rose-100 hover:from-pink-200 hover:to-rose-200 transition-all"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <h3 className="bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 bg-clip-text text-xl text-transparent font-bold">
                  {user?.name
                    ?.split(" ")
                    .map((word) => word[0])
                    .join("")
                    .toUpperCase()}
                </h3>
              </div>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-[200px] bg-white rounded-2xl shadow-2xl border-2 border-pink-200 py-2 z-[9999] animate-fade-in-up">
                  {user?.role === 1 ? (
                    <button
                      type="button"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        navigate("/admin-dashboard");
                        setIsDropdownOpen(false);
                      }}
                      className="w-full px-4 py-3 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white text-left flex items-center gap-3 text-gray-700 font-semibold transition-all cursor-pointer"
                    >
                      <MdDashboard className="text-xl" /> Admin Panel
                    </button>
                  ) : (
                    <button
                      type="button"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        navigate("/dashboard");
                        setIsDropdownOpen(false);
                      }}
                      className="w-full px-4 py-3 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white text-left flex items-center gap-3 text-gray-700 font-semibold transition-all cursor-pointer"
                    >
                      <MdDashboard className="text-xl" /> My Dashboard
                    </button>
                  )}
                  <button
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleLogout();
                    }}
                    className="w-full px-4 py-3 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white text-left flex items-center gap-3 text-gray-700 font-semibold transition-all cursor-pointer"
                  >
                    <MdLogout className="text-xl" /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <span
              className="text-2xl cursor-pointer hover:text-pink-500 transition-all"
              onClick={() => navigate("/login")}
            >
              <FiUser />
            </span>
          )}

          <span
            className="text-2xl cursor-pointer relative hover:text-pink-500 transition-all"
            onClick={() => navigate("/cart")}
          >
            <span className="absolute h-4 w-4 rounded-full right-[-8px] top-[-8px] bg-gradient-to-r from-pink-400 to-rose-400 text-white flex items-center justify-center text-xs font-semibold">
              3
            </span>
            <IoCartOutline />
          </span>
        </div>
      </div>

      {/* Main Header - Mobile */}
      <div className="lg:hidden px-3 py-3 border-b border-pink-200 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <button
            className="text-2xl text-pink-500 hover:text-pink-600 transition-all flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IoClose /> : <RxHamburgerMenu />}
          </button>

          <form className="flex-1 flex border-2 border-pink-200 rounded-full p-1 items-center focus-within:border-pink-400 transition-all">
            <input
              type="text"
              placeholder="Search..."
              className="w-full text-xs outline-0 px-3 bg-transparent"
            />
            <button className="bg-gradient-to-r from-pink-400 to-rose-400 text-white h-[32px] w-[40px] rounded-full flex items-center justify-center text-base flex-shrink-0">
              <IoSearchOutline />
            </button>
          </form>

          <span
            className="text-2xl cursor-pointer relative hover:text-pink-500 transition-all flex-shrink-0"
            onClick={() => navigate("/cart")}
          >
            <span className="absolute h-4 w-4 rounded-full right-[-6px] top-[-6px] bg-gradient-to-r from-pink-400 to-rose-400 text-white flex items-center justify-center text-xs font-semibold">
              3
            </span>
            <IoCartOutline />
          </span>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:block w-full border-b border-pink-200 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="flex justify-center">
          {navLinks.map((link) =>
            link.title === "Category" ? (
              <div
                key={link.id}
                className="relative"
                ref={categoryDropdownRef}
                onMouseEnter={() => setIsCategoryDropdownOpen(true)}
                onMouseLeave={() => setIsCategoryDropdownOpen(false)}
              >
                <button className="px-6 py-3 hover:bg-gradient-to-r hover:from-pink-400 hover:to-rose-400 hover:text-white transition-all text-sm font-medium text-gray-700 flex items-center gap-2">
                  <BiCategory />
                  {link.title}
                  <svg
                    className={`w-4 h-4 transition-transform ${isCategoryDropdownOpen ? "rotate-180" : ""}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isCategoryDropdownOpen && (
                  <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-b-2xl shadow-2xl border-2 border-pink-200 py-2 z-50 animate-fade-in-up">
                    {categories.length > 0 ? (
                      categories.map((category) => (
                        <button
                          key={category._id}
                          onClick={() => {
                            navigate(`/shop?category=${category._id}`);
                            setIsCategoryDropdownOpen(false);
                          }}
                          className="w-full px-4 py-3 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white text-left flex items-center gap-3 text-gray-700 font-semibold transition-all"
                        >
                          {category.image ? (
                            <img
                              src={category.image}
                              alt={category.name}
                              className="w-8 h-8 rounded-lg object-cover"
                            />
                          ) : (
                            <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-400 rounded-lg flex items-center justify-center">
                              <BiCategory className="text-white" />
                            </div>
                          )}
                          {category.name}
                        </button>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-gray-500 text-sm">
                        No categories available
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.id}
                to={link.link}
                className="px-6 py-3 hover:bg-gradient-to-r hover:from-pink-400 hover:to-rose-400 hover:text-white transition-all text-sm font-medium text-gray-700"
              >
                {link.title}
              </Link>
            ),
          )}
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">
              <span className="text-3xl bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                G
              </span>
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                lowera
              </span>
            </h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl text-gray-600 hover:text-pink-500"
            >
              <IoClose />
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.link}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-pink-400 hover:to-rose-400 hover:text-white transition-all text-gray-700 font-medium"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-pink-200">
            <div className="flex items-center gap-6">
              <span
                className="text-2xl cursor-pointer relative hover:text-pink-500 transition-all"
                onClick={() => {
                  navigate("/wishlist");
                  setIsMenuOpen(false);
                }}
              >
                <span className="absolute h-4 w-4 rounded-full right-[-8px] top-[-8px] bg-gradient-to-r from-pink-400 to-rose-400 text-white flex items-center justify-center text-xs font-semibold">
                  3
                </span>
                <IoIosHeartEmpty />
              </span>
              {token ? (
                <div className="relative" ref={dropdownRef}>
                  <div
                    className="cursor-pointer h-[35px] w-[35px] flex items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-rose-100"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <h3 className="bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 bg-clip-text text-sm text-transparent font-bold">
                      {user?.name
                        ?.split(" ")
                        .map((word) => word[0])
                        .join("")
                        .toUpperCase()}
                    </h3>
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute left-0 bottom-full mb-2 w-[200px] bg-white rounded-2xl shadow-2xl border-2 border-pink-200 py-2 z-50 animate-fade-in-up">
                      {user?.role === 1 ? (
                        <button
                          type="button"
                          onClick={() => {
                            navigate("/admin-dashboard");
                            setIsDropdownOpen(false);
                            setIsMenuOpen(false);
                          }}
                          className="w-full px-4 py-3 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white text-left flex items-center gap-3 text-gray-700 font-semibold transition-all cursor-pointer"
                        >
                          <MdDashboard className="text-xl" /> Admin Panel
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            navigate("/dashboard");
                            setIsDropdownOpen(false);
                            setIsMenuOpen(false);
                          }}
                          className="w-full px-4 py-3 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white text-left flex items-center gap-3 text-gray-700 font-semibold transition-all cursor-pointer"
                        >
                          <MdDashboard className="text-xl" /> My Dashboard
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          handleLogout();
                          setIsMenuOpen(false);
                        }}
                        className="w-full px-4 py-3 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white text-left flex items-center gap-3 text-gray-700 font-semibold transition-all cursor-pointer"
                      >
                        <MdLogout className="text-xl" /> Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <span
                  className="text-2xl cursor-pointer hover:text-pink-500 transition-all"
                  onClick={() => {
                    navigate("/login");
                    setIsMenuOpen(false);
                  }}
                >
                  <FiUser />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Header;
