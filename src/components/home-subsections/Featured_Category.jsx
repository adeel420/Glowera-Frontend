import React, { useEffect } from "react";
import { featuredCategories } from "../../data/Data";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/slice/categoriesSlice";

const Featured_Category = () => {
  const { status, categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <div className="py-20 px-6 bg-gradient-to-br from-pink-50 via-white to-rose-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="red-text text-[32px] lg:text-[36px] bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
            🌸 Your Choice
          </h1>
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            FEATURED CATEGORIES
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Explore our premium collection
          </p>
        </div>

        {/* Infinite Marquee Scroll */}
        <div className="relative overflow-hidden py-8">
          <div className="flex animate-scroll hover:pause-animation">
            {/* First set of categories */}
            {categories.map((category) => (
              <div
                key={category._id}
                className="group flex-shrink-0 flex flex-col items-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer w-[180px] hover:-translate-y-3 border-2 border-transparent hover:border-pink-300 mx-3"
              >
                <div className="relative w-[110px] h-[110px] flex items-center justify-center mb-5 rounded-full bg-gradient-to-br from-pink-100 to-rose-100 group-hover:from-pink-200 group-hover:to-rose-200 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-[75px] h-[75px] object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
                <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-gray-700 group-hover:text-pink-600 transition-colors duration-300">
                  {category.name}
                </h2>
                <div className="mt-3 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {categories.map((category) => (
              <div
                key={category._id}
                className="group flex-shrink-0 flex flex-col items-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer w-[180px] hover:-translate-y-3 border-2 border-transparent hover:border-pink-300 mx-3"
              >
                <div className="relative w-[110px] h-[110px] flex items-center justify-center mb-5 rounded-full bg-gradient-to-br from-pink-100 to-rose-100 group-hover:from-pink-200 group-hover:to-rose-200 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-[75px] h-[75px] object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
                <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-gray-700 group-hover:text-pink-600 transition-colors duration-300">
                  {category.name}
                </h2>
                <div className="mt-3 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured_Category;
