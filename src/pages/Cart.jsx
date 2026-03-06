import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Radiant Lipstick",
      price: 25.0,
      quantity: 1,
      img: assets.makupGirl,
    },
    {
      id: 2,
      name: "Hydrating Face Serum",
      price: 45.99,
      quantity: 2,
      img: assets.makupGirl,
    },
    {
      id: 3,
      name: "Vitamin C Cream",
      price: 52.99,
      quantity: 1,
      img: assets.makupGirl,
    },
  ]);
  const navigate = useNavigate();

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <div className="py-12 px-6 bg-[#faf8f7] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="red-text text-[26px] lg:text-[30px] text-[#be4544]">
            your Cart
          </h2>
          <h1 className="text-3xl lg:text-4xl uppercase font-light text-gray-800 mt-2">
            GLOWERA – Shopping Cart
          </h1>
          <p className="font-light text-[15px] mt-3 leading-relaxed text-gray-600">
            You have <b>{cartItems.length} items</b> in your cart. Review your
            products, update quantities, or remove items before checkout.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Table Section */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-[#947972] to-[#f1e5e5]">
                  <tr>
                    <th className="py-4 px-6 text-left text-white font-normal uppercase tracking-wide text-sm">
                      Product
                    </th>
                    <th className="py-4 px-6 text-center text-white font-normal uppercase tracking-wide text-sm">
                      Price
                    </th>
                    <th className="py-4 px-6 text-center text-white font-normal uppercase tracking-wide text-sm">
                      Quantity
                    </th>
                    <th className="py-4 px-6 text-center text-white font-normal uppercase tracking-wide text-sm">
                      Total
                    </th>
                    <th className="py-4 px-6 text-center text-white font-normal uppercase tracking-wide text-sm">
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {cartItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b hover:bg-[#faf8f7] transition-colors"
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-4">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <span className="font-light">{item.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-8 h-8 rounded bg-gray-200 hover:bg-[#be4544] hover:text-white transition-colors"
                          >
                            −
                          </button>
                          <span className="w-12 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-8 h-8 rounded bg-gray-200 hover:bg-[#be4544] hover:text-white transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[#be4544] hover:text-red-700 text-2xl font-bold transition-colors"
                        >
                          ×
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Checkout Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-2xl font-light uppercase tracking-wide text-gray-800 mb-6 border-b pb-4">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span className="font-light">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span className="font-light">Shipping</span>
                  <span className="font-semibold">${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4 flex justify-between text-lg">
                  <span className="font-normal uppercase tracking-wide">
                    Total
                  </span>
                  <span className="font-bold text-[#be4544]">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                className="w-full bg-[#be4544] text-white py-3 rounded-lg font-semibold uppercase tracking-wide hover:bg-[#a03d3c] transition-all duration-300 mb-3 cursor-pointer"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>

              <button
                className="w-full bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold uppercase tracking-wide hover:border-[#be4544] hover:text-[#be4544] transition-all duration-300 cursor-pointer"
                onClick={() => navigate("/shop")}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
