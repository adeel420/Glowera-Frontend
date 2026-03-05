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
    <div className="py-16 px-6 bg-[#faf8f7]">
      <h1 className="text-[#be4544] red-text text-center text-[28px] lg:text-[32px]">
        your choice
      </h1>
      <h1 className="text-center text-3xl lg:text-4xl font-light mt-2 text-gray-800">
        FEATURED CATEGORIES FOR YOU
      </h1>

      <div className="relative max-w-6xl mx-auto mt-12">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-100"
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
              className="group flex-shrink-0 flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer w-[160px] hover:-translate-y-2"
            >
              <div className="w-[100px] h-[100px] flex items-center justify-center mb-4 rounded-full bg-gradient-to-br from-[#947972]/10 to-[#f1e5e5]/30 group-hover:from-[#947972]/20 group-hover:to-[#f1e5e5]/50 transition-all duration-300">
                <img
                  src={category.img}
                  alt={category.title}
                  className="w-[70px] h-[70px] object-contain"
                />
              </div>
              <h2 className="text-center text-sm font-light uppercase tracking-wide text-gray-700 group-hover:text-[#be4544] transition-colors duration-300">
                {category.title}
              </h2>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-100"
        >
          <IoChevronForward size={20} />
        </button>
      </div>
    </div>
  );
};

export default Featured_Category;
