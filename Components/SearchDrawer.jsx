"use client";

import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import products from "../data/product.json"; // 👈 your product data

export default function SearchDrawer() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const categories = [
    { id: 1, name: "Wooden Frames", image: "/Images/wooden.jpg", slug: "wood" },
    { id: 2, name: "Metal Frames", image: "/images/metal.jpg", slug: "metal" },
    {
      id: 3,
      name: "Modern Frames",
      image: "/images/modern.jpg",
      slug: "modern",
    },
    {
      id: 4,
      name: "Antique Frames",
      image: "/images/antique.jpg",
      slug: "antique",
    },
    {
      id: 5,
      name: "Collage Frames",
      image: "/images/collage.jpeg",
      slug: "collage",
    },
    {
      id: 6,
      name: "Customized Frames",
      image: "/images/customized.jpg",
      slug: "customized",
    },
    {
      id: 7,
      name: "Cartoon Frames",
      image: "/images/cartoon.jpg",
      slug: "cartoon",
    },
  ];

  const recommended = [
    {
      name: "Glass-Mounted Absoulte photoframe",
      price: 499,
      image: "/Images/S1.jpeg",
    },
    { name: "Our Special Day", price: 699, image: "/Images/S2.jpeg" },
    { name: "Three Canvas Collage Set", price: 599, image: "/Images/S5.jpeg" },
    { name: "Solo Reflections Photo", price: 999, image: "/Images/S6.jpeg" },
    { name: "Love Canvas Print", price: 759, image: "/Images/S3.jpeg" },
    { name: "Oval Golden Frame", price: 1009, image: "/Images/S4.jpeg" },
  ];

  // filter products based on query
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Search Button (Navbar) */}
      <button onClick={() => setOpen(true)} className="text-xl">
        <FiSearch />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 mr-0 h-full w-[400px] bg-white text-black shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header with Search */}
        <div className="flex items-center justify-between p-4 border-b border-[#ddd]">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Type to search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 w-full px-5 py-3 pr-14 border border-[#ddd] rounded-full text-[1.18rem] bg-white outline-none shadow-md focus:shadow-lg"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#728c70] p-2 rounded-full">
              <FiSearch className="text-white" />
            </button>
          </div>
          <button onClick={() => setOpen(false)} className="ml-3 text-2xl">
            <FiX />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 h-[calc(100vh-80px)] max-h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden overscroll-contain bg-white relative">
          {/* 🔎 If searching, show results */}
          {query.length > 0 ? (
            <div className="p-4">
              <h3 className="font-semibold mb-4">Search Results</h3>
              {filteredProducts.length > 0 ? (
                <div className="space-y-4">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-4 border p-3 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div>
                        <h4 className="font-medium">{product.name}</h4>
                        <p className="text-gray-600 font-bold">
                          ₹{product.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No results found.</p>
              )}
            </div>
          ) : (
            <>
              {/* Popular Choices */}
              <div className="p-4">
                <h3 className="font-semibold mb-4">Popular Choices</h3>
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((cat, i) => (
                    <div
                      key={i}
                      className="flex items-center bg-white rounded-2xl shadow-md px-3 py-2 min-w-[120px] gap-2 cursor-pointer hover:shadow-lg transition-shadow"
                    >
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#ddd]  object-cover"
                      />
                      <span className="text-[20px]">{cat.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended For You */}
              <div className="p-4">
                <h3 className="font-semibold mb-4">Recommended For You</h3>
                <div className="grid grid-cols-2 gap-4">
                  {recommended.map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="border border-gray-200 rounded-xl bg-white shadow-md hover:shadow-lg transition flex flex-col"
                    >
                      <div className="relative w-full pt-[100%] overflow-hidden rounded-t-xl">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3 flex flex-col justify-between flex-grow">
                        <h4 className="text-sm font-medium mb-1 text-black">
                          {item.name}
                        </h4>
                        <span className="text-base font-bold text-gray-700">
                          ₹{item.price}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
