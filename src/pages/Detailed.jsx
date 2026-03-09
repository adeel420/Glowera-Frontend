import React, { useState } from "react";
import { assets } from "../assets/assets";

const Detailed = () => {
  const [selectedImage, setSelectedImage] = useState(assets.heroImg);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const images = [assets.heroImg, assets.heroImg, assets.heroImg, assets.heroImg];

  const reviews = [
    { id: 1, name: "Sarah Johnson", rating: 5, date: "2 days ago", comment: "Absolutely love this product! It made my skin feel so smooth and radiant." },
    { id: 2, name: "Emily Davis", rating: 4, date: "1 week ago", comment: "Great quality and fast delivery. Highly recommend!" },
    { id: 3, name: "Michael Brown", rating: 5, date: "2 weeks ago", comment: "Best purchase ever! Will definitely buy again." },
  ];

  return (
    <div className="bg-[#faf8f7] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-lg shadow-sm p-8">
          {/* Images */}
          <div>
            <div className="bg-gradient-to-br from-[#947972]/10 to-[#f1e5e5]/30 rounded-lg p-8 mb-4">
              <img src={selectedImage} className="w-full h-[400px] object-contain" alt="Product" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  className={`h-[100px] w-full object-cover rounded-lg cursor-pointer border-2 transition-all ${
                    selectedImage === img ? "border-[#be4544]" : "border-gray-200 hover:border-gray-400"
                  }`}
                  alt={`Thumbnail ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-light text-gray-800 mb-2">Hydrating Face Serum</h1>
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">Skincare</p>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-600">(24 reviews)</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-semibold text-[#be4544]">$45.99</span>
              <span className="text-xl text-gray-400 line-through">$59.99</span>
              <span className="bg-[#be4544] text-white text-sm px-3 py-1 rounded-full">-23%</span>
            </div>

            <p className="text-gray-600 font-light leading-relaxed mb-6">
              Experience the ultimate hydration with our premium face serum. Formulated with natural ingredients to nourish and rejuvenate your skin, leaving it soft, smooth, and glowing.
            </p>

            <div className="border-t border-b border-gray-200 py-6 mb-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-sm uppercase tracking-wide text-gray-700 w-24">Quantity:</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded bg-gray-200 hover:bg-[#be4544] hover:text-white transition-colors font-semibold"
                  >
                    −
                  </button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded bg-gray-200 hover:bg-[#be4544] hover:text-white transition-colors font-semibold"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm uppercase tracking-wide text-gray-700 w-24">Stock:</span>
                <span className="text-green-600 font-semibold">In Stock</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-[#be4544] text-white py-3 rounded-lg font-semibold uppercase tracking-wide hover:bg-[#a03d3c] transition-all duration-300">
                Add to Cart
              </button>
              <button className="w-12 h-12 border-2 border-gray-300 rounded-lg hover:border-[#be4544] hover:text-[#be4544] transition-all">
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("description")}
              className={`flex-1 py-4 px-6 font-semibold uppercase tracking-wide transition-all ${
                activeTab === "description"
                  ? "bg-[#be4544] text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`flex-1 py-4 px-6 font-semibold uppercase tracking-wide transition-all ${
                activeTab === "reviews"
                  ? "bg-[#be4544] text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Reviews (24)
            </button>
          </div>

          <div className="p-8">
            {activeTab === "description" ? (
              <div className="space-y-4">
                <h3 className="text-2xl font-light text-gray-800 mb-4">Product Description</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Our Hydrating Face Serum is specially formulated to provide deep hydration and nourishment to your skin. 
                  Enriched with natural ingredients like hyaluronic acid, vitamin C, and botanical extracts, this serum 
                  penetrates deep into the skin layers to restore moisture and improve skin texture.
                </p>
                <h4 className="text-lg font-normal text-gray-800 mt-6 mb-3">Key Benefits:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600 font-light">
                  <li>Deep hydration for all skin types</li>
                  <li>Reduces fine lines and wrinkles</li>
                  <li>Brightens and evens skin tone</li>
                  <li>Non-greasy, fast-absorbing formula</li>
                  <li>Suitable for daily use</li>
                </ul>
                <h4 className="text-lg font-normal text-gray-800 mt-6 mb-3">How to Use:</h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  Apply 2-3 drops to clean, dry skin. Gently massage in circular motions until fully absorbed. 
                  Use morning and evening for best results. Follow with your favorite moisturizer.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <h3 className="text-2xl font-light text-gray-800 mb-6">Customer Reviews</h3>
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-800">{review.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className={`w-4 h-4 ${
                                i < review.rating ? "fill-current" : "fill-gray-300"
                              }`} viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 font-light leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailed;
