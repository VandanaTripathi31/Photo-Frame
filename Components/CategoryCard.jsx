"use client";

export default function CategoryCard({ category }) {
  return (
    <a
      href={`/category/${category.slug}`}
      className="relative block group rounded-lg overflow-hidden shadow hover:shadow-lg transition"
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
        <span className="text-white text-lg font-semibold">{category.name}</span>
      </div>
    </a>
  );
}
