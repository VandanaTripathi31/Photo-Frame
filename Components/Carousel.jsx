"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function Carousel() {
  const images = [
    "/images/banner1.jpeg",
    "/images/banner2.jpeg",
    "/images/banner0.jpg",
    "/images/banner4.jpg",
    "/images/banner5.jpeg",
  ];

  return (
    <div className="w-full ">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        // autoplay={false}
        loop={true}
        className="w-full h-[550px] "
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[550px] relative">
              <Image
                src={src}
                alt={`Banner ${index + 1}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
