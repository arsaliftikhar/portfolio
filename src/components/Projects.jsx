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
  <div className=" border-2 bg-black-50 dark:bg-black-600 border-black-300 rounded-3xl w-full text-center p-8 text-sm sm:text-lg">
   <div className="flex justify-center">
   <Image
      src={imageSrc}
      alt={title}
      height={200}
      width={200}
      className="w-auto rounded-3xl"
    />
   </div>
    <p className="mt-3 text-xl font-semibold text-black-600 dark:text-white">Project 1</p>
    <div className="flex items-center justify-center gap-5 mt-4">
      <Button type="outline" value="Github" className="w-28" />
      <Button type="outline" value="Live Demo" className="w-28" />
    </div>
  </div>
);

const MenuSlider = () => {
  return (
    <div className="pt-10 pb-28" id="projects">
      <div className="text-center mb-10">
        <p className=" text-black-400 dark:text-black-200">Browse My Recent</p>
        <p className="font-bold text-2xl md:text-5xl mt-3 text-black-600 dark:text-white">
          Projects
        </p>
      </div>
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
    </div>
  );
};

export default MenuSlider;
