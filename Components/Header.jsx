"use client";
import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import SearchDrawer from "./SearchDrawer";
import CartDrawer from "./CartDrawer";
import Link from "next/link";

const submenuItems = [
  { name: "Hearts", href: "/collections/heart", image: "/Images/heart.webp" },
  {
    name: "Family",
    href: "/collections/family-frames",
    image: "/Images/family.jpeg",
  },
  {
    name: "Modern",
    href: "/collections/modern-frames",
    image: "/Images/mo1.jpg",
  },
  {
    name: "Collage",
    href: "/collections/collage-frames",
    image: "/Images/co.jpg",
  },
  {
    name: "Travel",
    href: "/collections/travel-frames",
    image: "/Images/travel.jpg",
  },
  {
    name: "Quotes",
    href: "/collections/quote-frames",
    image: "/Images/in.jpg",
  },
  {
    name: "Wedding",
    href: "/collections/wedding-frames",
    image: "/Images/S2.jpeg",
  },
];

export default function Header() {
  const [active, setActive] = useState(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/category", submenu: submenuItems },
    { name: "Blog", href: "/blog" },
    // { name: "Cart", href: "/cart" },
    // { name: "Wishlist", href: "/wishlist" },
  ];

  return (
    <header className="bg-[#728c70] text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 border-2 border-white rounded"></div>
            <span className="text-2xl font-bold">FrameNest</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex font-bold text-2xl space-x-8 relative">
          {navLinks.map((link, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
            >
              <a
                href={link.href}
                className={`relative font-medium ${
                  active === index ? "text-yellow-300" : "text-white"
                }`}
              >
                {link.name}
                {active === index && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-yellow-300"></span>
                )}
              </a>

              {/* Submenu */}
              {link.submenu && active === index && (
                <div className="fixed left-0 top-[55px] w-screen bg-white text-black shadow-lg py-8 z-50">
                  <div className="max-w-7xl mx-auto flex justify-center gap-20 px-10">
                    {link.submenu.map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        className={`flex flex-col items-center opacity-0 animate-lightFadeIn`}
                        style={{ animationDelay: `${i * 0.12}s` }}
                      >
                        <div className="w-28 h-28 rounded-lg overflow-hidden shadow-md mb-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-medium text-sm">{item.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex text-2xl items-center space-x-4">
          <SearchDrawer />
          <a href="/wishlist">
            <FiHeart className="text-xl hover:text-yellow-300" />
          </a>
          <CartDrawer />
        </div>
      </div>
    </header>
  );
}
