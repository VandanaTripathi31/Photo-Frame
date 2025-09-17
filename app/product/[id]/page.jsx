"use client";

import products from "../../../data/product.json";
import { useCart } from "../../../Context/CartContext";

export default function ProductDetail({ params }) {
  const { id } = params;
  const product = products.find((p) => p.id.toString() === id);

  const { addToCart, setOpen } = useCart();

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left side - Product Images */}
      <div className="mt-20">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover rounded-xl shadow-md"
        />
        {product.images && (
          <div className="flex gap-4 mt-4">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="thumbnail"
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border hover:scale-105 transition"
              />
            ))}
          </div>
        )}
      </div>

      {/* Right side - Product Details */}
      <div className="w-full mt-14 p-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>

        {/* Rating */}
        <div className="flex items-center mt-2 text-yellow-500">
          ★★★★☆{" "}
          <span className="ml-2 text-sm text-gray-600">(4.7 | 7 reviews)</span>
        </div>

        {/* Price Section */}
        <div className="mt-4 flex items-center space-x-3">
          <span className="text-2xl font-semibold text-[#3f543f]">
            ₹ {product.price}
          </span>
          <s className="text-gray-500">₹ {product.oldPrice}</s>
          <span className="bg-red-100 text-red-600 text-sm font-semibold px-2 py-1 rounded-full">
            Save 58%
          </span>
        </div>

        {/* Festive Sale Banner */}
        <div className="mt-3 flex items-center box-border border-dashed justify-between">
          <span className="text-green-700 font-bold">Festive Sale Live</span>
          <button className="md:hidden p-2 rounded-full hover:bg-gray-100">
            <img src="/share-icon.png" alt="share" className="w-6 h-6" />
          </button>
        </div>

        {/* Buttons */}
        <div className="mt-6 space-y-3">
          <button
            onClick={() => {
              addToCart(product);
              setOpen(true); // open drawer after adding
            }}
            className="w-full py-3 bg-[#a19f81] text-white font-semibold rounded-md 
                 shadow hover:bg-[#8d8b6c] transition duration-200"
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              addToCart(product);
              setOpen(true); // also open drawer
            }}
            className="w-full py-3 bg-[#3f543f] text-white font-semibold rounded-md 
                 shadow hover:bg-[#2e3d2e] transition duration-200"
          >
            Buy It Now
          </button>
        </div>

        {/* Features Section */}
        <div className="mt-8">
          <h3 className="font-semibold text-gray-800">Features & Details</h3>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 text-sm">
            <li>High Definition Textured Surface modern printing</li>
            <li>Total Coverage Area: 48" W x 24" H</li>
            <li>Vibrant HD Colors with detailed finish</li>
            <li>Made by Local Artisans of India</li>
          </ul>
        </div>

        {/* Shipping & Returns Section */}
        <div className="mt-8 bg-white py-4 ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <img src="/Images/f1.png" alt="Free Delivery" className="w-16 h-16 mb-2" />
              <p className="text-sm font-semibold text-gray-700">Free Delivery</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/Images/f2.png" alt="Friendly Return Policy" className="w-16 h-16 mb-2" />
              <p className="text-sm font-semibold text-gray-700">Friendly Return Policy</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/Images/f3.png" alt="100% Secure Payment" className="w-16 h-16 mb-2" />
              <p className="text-sm font-semibold text-gray-700">100% Secure Payment</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/Images/f4.png" alt="24/7 Support" className="w-16 h-16 mb-2" />
              <p className="text-sm font-semibold text-gray-700">24/7 Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
