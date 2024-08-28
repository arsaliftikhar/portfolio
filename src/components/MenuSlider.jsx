"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";
import Button from "@/components/Button";

const Slide = ({ title, imageSrc }) => (
  <div className=" border-2 border-black-300 rounded-3xl w-full text-center p-8 text-sm sm:text-lg">
    <Image
      src={imageSrc}
      alt={title}
      height={200}
      width={200}
      className="w-auto rounded-3xl"
    />
    <p className="mt-3 text-xl font-semibold">Project 1</p>
    <div className="flex items-center justify-center gap-5 mt-4">
      <Button type="outline" value="Github" className="w-28" />
      <Button type="outline" value="Live Demo" className="w-28" />
    </div>
  </div>
);

const MenuSlider = () => {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={false}
      centeredSlides={true}
      initialSlide={3}
      breakpoints={{
        0: {
          slidesPerView: 1, // Show 1 slide on screens <= 640px
        },
        640: {
          slidesPerView: 4, // Show 4 slides on larger screens
        },
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination]}
      className="swiper"
    >
      <SwiperSlide className="swiper-slide">
        <Slide
          title="Combo Chapli Kabab Burger"
          imageSrc="/projects-image/1.png"
        />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <Slide
          title="Combo Chapli Kabab Burger"
          imageSrc="/projects-image/1.png"
        />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <Slide
          title="Combo Chapli Kabab Burger"
          imageSrc="/projects-image/1.png"
        />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <Slide
          title="Combo Chapli Kabab Burger"
          imageSrc="/projects-image/1.png"
        />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <Slide
          title="Combo Chapli Kabab Burger"
          imageSrc="/projects-image/1.png"
        />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <Slide
          title="Combo Chapli Kabab Burger"
          imageSrc="/projects-image/1.png"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MenuSlider;
