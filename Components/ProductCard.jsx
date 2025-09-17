import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="bg-white rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl p-4 flex flex-col"
    >
      {/* Image with hover zoom */}
      <div className="w-full h-48 rounded-md overflow-hidden mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>

      {/* Title & Price */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {product.name}
      </h3>
      <p className="text-[#728c70] font-bold">₹ {product.price}</p>
    </Link>
  );
}
