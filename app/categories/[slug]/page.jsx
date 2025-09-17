"use client";

import { useParams } from "next/navigation";
import categories from "../../../data/categories.json";

export default function CategoryPage() {
  const { slug } = useParams();

  // Find the category by slug
  const category = categories.find((cat) => cat.slug === slug);

  if (!category) {
    return <h2 className="text-center text-xl mt-10">Category Not Found</h2>;
  }

  return (
    <div className="max-w-6xl mx-auto  py-10 px-4">
      <h1 className="text-3xl mt-20 font-bold text-gray-800 mb-6">
        {category.name}
      </h1>
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-72 object-cover rounded-xl shadow-md mb-6"
      />
      <p className="text-gray-600 text-lg">
        Explore our exclusive collection of <b>{category.name}</b>. Find frames
        that perfectly match your style and decor!
      </p>
    </div>
  );
}
