"use client";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Personalized Wooden Photo Frame",
    price: 699,
    image: "Images/wooden1.jpg",
  },
  {
    id: 2,
    name: "Customized LED Photo Frame",
    price: 1199,
    image: "/Images/LED.webp",
  },
  {
    id: 3,
    name: "Heart Shape Collage Frame",
    price: 899,
    image: "/Images/heart1.webp",
  },
  {
    id: 4,
    name: "Crystal Photo Lamp",
    price: 1499,
    image: "/Images/cry.jpg",
  },
  {
    id: 5,
    name: "Magnetic Polaroid Fridge Photos (Set of 12)",
    price: 499,
    image: "/Images/mag.webp",
  },
  {
    id: 6,
    name: "Rotating LED Cube Photo Frame",
    price: 1299,
    image: "/Images/rot.jpg",
  },
  {
    id: 7,
    name: "Couple Anniversary Frame",
    price: 799,
    image: "/Images/ann.jpg",
  },
  {
    id: 8,
    name: "Engraved Wooden Plaque",
    price: 999,
    image: "/Images/en.webp",
  },
];

function ProductCard({ product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2 duration-300 p-4 flex flex-col relative overflow-hidden"
    >
      {/* Image */}
      <div className="w-full h-48 rounded-md overflow-hidden mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Title & Price */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#728c70] transition">
        {product.name}
      </h3>
      <p className="text-[#728c70] font-bold">₹ {product.price}</p>

      {/* Hover Overlay */}
      <div className="absolute inset-0  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {/* <span className="text-white font-semibold text-lg">View Details →</span> */}
      </div>
    </Link>
  );
}

export default function FeaturedProducts() {
  // Pick 4 featured products
  const featured = products.slice(0, 8);

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Hot Selling Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
