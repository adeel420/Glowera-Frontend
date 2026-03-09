import React, { useRef } from "react";
import { featuredCategories } from "../../data/Data";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Featured_Category = () => {
  const scrollRef = useRef(null);

  const scrollAmount = 200;

  const scrollLeft = () => {
    const container = scrollRef.current;
    if (!container) return;

    // If we're at the start, jump to the end
    if (container.scrollLeft <= 0) {
      container.scrollLeft = container.scrollWidth;
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const container = scrollRef.current;
    if (!container) return;

    // If we're at the end, jump back to start
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      container.scrollLeft = 0;
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="py-16 px-6 bg-gradient-to-br from-pink-50 to-rose-50">
      <h1 className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent red-text text-center text-[28px] lg:text-[32px]">
        your choice
      </h1>
      <h1 className="text-center text-3xl lg:text-4xl font-light mt-2 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
        FEATURED CATEGORIES FOR YOU
      </h1>

      <div className="relative max-w-6xl mx-auto mt-12">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white transition-all"
        >
          <IoChevronBack size={20} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto cat scroll-smooth px-10"
        >
          {featuredCategories.map((category) => (
            <div
              key={category.id}
              className="group flex-shrink-0 flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer w-[160px] hover:-translate-y-2 border-2 border-transparent hover:border-pink-300"
            >
              <div className="w-[100px] h-[100px] flex items-center justify-center mb-4 rounded-full bg-gradient-to-br from-pink-100 to-rose-100 group-hover:from-pink-200 group-hover:to-rose-200 transition-all duration-300">
                <img
                  src={category.img}
                  alt={category.title}
                  className="w-[70px] h-[70px] object-contain"
                />
              </div>
              <h2 className="text-center text-sm font-light uppercase tracking-wide text-gray-700 group-hover:text-pink-500 transition-colors duration-300">
                {category.title}
              </h2>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 hover:text-white transition-all"
        >
          <IoChevronForward size={20} />
        </button>
      </div>
    </div>
  );
};

export default Featured_Category;
