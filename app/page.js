"use client";

import products from "../data/product.json";
import ProductCard from "../Components/ProductCard";
import Carousel from "../Components/Carousel";
import categories from "../data/categories.json";
import blogs from "../data/blogs.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../app/globals.css";
import FeaturedProducts from "../Components/FeaturedProducts";
import OfferBanner from "../Components/Offerbanner";
import Testimonials from "../Components/Testimonal";
import Link from "next/link";
import Reveal from "../Components/Reveal";

export default function Home() {
  return (
    <section>
      {/* Carousel */}
      <Reveal>
        <Carousel />
      </Reveal>{" "}
      <div className="max-w-7xl mx-auto py-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Shop by Categories
        </h2>

        {/* Desktop View */}
        <Reveal delay={0.2}>
          <div className="hidden md:flex justify-center gap-8 flex-wrap">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.slug}`}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#728c70] shadow-md group-hover:shadow-lg transition">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="mt-3 text-sm font-bold text-gray-700 group-hover:text-[#728c70]">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </Reveal>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper slidesPerView={2.5} spaceBetween={16}>
            {categories.map((cat) => (
              <SwiperSlide key={cat.id}>
                <a
                  href={`/categories/${cat.slug}`}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gray-200 shadow-md">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="mt-2 text-xs font-medium text-gray-700">
                    {cat.name}
                  </span>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Reveal delay={0.3}>
        {/* Latest Additions */}
        <div className="p-6 max-w-8xl mx-auto ml-10 mr-10 ">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Latest Addition{" "}
          </h2>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.4}>
        <FeaturedProducts />
      </Reveal>{" "}
      <Reveal delay={0.5}>
        <div className="max-w-7xl mx-auto py-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Exciting Offers For You{" "}
          </h2>
          <OfferBanner />
        </div>
      </Reveal>
      <Reveal delay={0.5}>
        <div className="max-w-7xl mx-auto py-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Latest Blogs
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
            {blogs.slice(0, 2).map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">{blog.date}</p>
                  <span
                    className="inline-block px-4 py-2 mt-2 text-sm font-medium text-indigo-600 
                              border border-indigo-500 rounded-full shadow-sm 
                            hover:bg-indigo-50 hover:scale-105 transition duration-300 cursor-pointer"
                  >
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/blog"
              className="inline-block px-6 py-3 bg-[#728c70] 
             text-white font-semibold rounded-full shadow-md 
             hover:scale-105 hover:shadow-lg transition-transform duration-300"
            >
              View All Blogs →
            </Link>
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.7}>
        <Testimonials />
      </Reveal>{" "}
    </section>
  );
}
