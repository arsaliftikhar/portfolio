"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slide = ({ title, imageSrc }) => (
  <div className=" border-2 bg-black-50 dark:bg-black-600 border-black-300 rounded-3xl w-full text-center p-10 text-sm sm:text-lg">
    <div className="flex justify-center">
      <iframe
        className="w-full h-80 rounded-3xl"
        width="200"
        height="200"
        src={`${imageSrc}&modestbranding=1&rel=0`}
        title={title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <p className="mt-3 text-xl font-semibold text-black-600 dark:text-white">
      {title}
    </p>
  </div>
);

const Reviews = () => {
  return (
    <div className="pt-10 pb-28" id="reviews">
      <div className="text-center mb-10">
        <p className=" text-black-400 dark:text-black-200">Watch My Clients</p>
        <p className="font-bold text-2xl md:text-5xl mt-3 text-black-600 dark:text-white">
          Reviews
        </p>
      </div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide">
          <Slide
            title="Paul Kasindorf"
            imageSrc="https://www.youtube.com/embed/eS5gBPRcdkk?si=blp2b1vViaA7ezsU"
          />
        </SwiperSlide> 
        <SwiperSlide className="swiper-slide">
          <Slide
            title="Michael De Lisio"
            imageSrc="https://www.youtube.com/embed/0Qi046FsCiM?si=4O6gep8ZccC_cPwB"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Slide
            title="Martin Strauss"
            imageSrc="https://www.youtube.com/embed/6pVXpI_1X0k?si=X_Jxn0AHYUnXAl1q"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviews;
