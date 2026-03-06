import React, { useState } from "react";
import Online_Payment from "../components/checkout-subsections/Online_Payment";
import Cash_On_Delivery from "../components/checkout-subsections/Cash_On_Delivery";

const Checkout = () => {
  const [selectedMethod, setSelectedMethod] = useState("online");
  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="red-text text-[26px] lg:text-[30px] text-[#be4544]">
            checkout
          </h2>
          <h1 className="text-3xl lg:text-4xl font-light text-gray-800 mt-2">
            CHOOSE PAYMENT METHOD
          </h1>
        </div>

        {/* Online payment section */}
        <div className="flex items-center gap-6">
          <div
            className="text-center p-6 bg-[#faf8f7] w-[50%] rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedMethod("online")}
          >
            <div
              className={`w-20 h-20  rounded-full flex items-center justify-center mx-auto mb-4 ${selectedMethod === "online" ? "bg-[#be4543] " : "bg-gradient-to-br from-[#947972] to-[#f1e5e5]"}`}
            >
              {selectedMethod === "online" && (
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <h3
              className={`text-lg uppercase tracking-wide mb-2 ${
                selectedMethod === "online"
                  ? "text-[#be4543] font-bold "
                  : "text-gray-800 font-normal "
              } `}
            >
              Online Payment Method
            </h3>
          </div>

          {/* Cash on delivery method */}
          <div
            className="text-center p-6 bg-[#faf8f7] rounded-lg w-[50%] hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedMethod("cod")}
          >
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${selectedMethod === "cod" ? "bg-[#be4543] " : "bg-gradient-to-br from-[#947972] to-[#f1e5e5]"}`}
            >
              {selectedMethod === "cod" && (
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <h3
              className={`text-lg uppercase tracking-wide mb-2 ${
                selectedMethod === "cod"
                  ? "text-[#be4543] font-bold "
                  : "text-gray-800 font-normal "
              } `}
            >
              Cash on delivery
            </h3>
          </div>
        </div>
      </div>

      {/* Checkout Methods Content */}
      <div className="">
        {selectedMethod === "online" && <Online_Payment />}
        {selectedMethod === "cod" && <Cash_On_Delivery />}
      </div>
    </div>
  );
};

export default Checkout;
