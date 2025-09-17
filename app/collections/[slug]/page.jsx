"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const categories = {
  heart: {
    name: "Hearts",
    image: "/Images/heart.webp",
    description: "Perfect frames to express love, with heart-shaped designs.",
  },
  "family-frames": {
    name: "Family",
    image: "/Images/family.jpeg",
    description: "Cherish family moments with beautiful family photo frames.",
  },
  "modern-frames": {
    name: "Modern",
    image: "/Images/mo1.jpg",
    description: "Minimalist and modern frames to suit contemporary spaces.",
  },
  "collage-frames": {
    name: "Collage",
    image: "/Images/co.jpg",
    description: "Combine multiple memories in one with collage frames.",
  },
  "travel-frames": {
    name: "Travel",
    image: "/Images/travel.jpg",
    description: "Keep your travel memories alive with our travel frames.",
  },
  "quote-frames": {
    name: "Quotes",
    image: "/Images/in.jpg",
    description: "Frames that inspire – showcase your favorite quotes.",
  },
  "wedding-frames": {
    name: "Wedding",
    image: "/Images/S2.jpeg",
    description: "Elegant wedding frames for your big day memories.",
  },
};

export default function CategoryDetailPage() {
  const params = useParams();
  const { slug } = params;

  const category = categories[slug];
  if (!category) {
    return <div className="p-10 text-center text-xl">Category not found</div>;
  }

  // Pick 4 random "You Might Also Like" categories excluding the current one
  const otherCategories = Object.entries(categories)
    .filter(([key]) => key !== slug)
    .sort(() => 0.5 - Math.random()) // shuffle
    .slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto p-10">
      {/* Category Details */}
      <h1 className="text-4xl mt-20 font-bold mb-6">{category.name} Frames</h1>
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-96  object-cover rounded-lg shadow-lg mb-6"
      />
      <p className="text-lg text-gray-700 mb-12">{category.description}</p>

      {/* You Might Also Like */}
      <h2 className="text-2xl font-semibold mb-6">You Might Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {otherCategories.map(([key, item]) => (
          <Link
            key={key}
            href={`/collections/${key}`}
            className="block bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
