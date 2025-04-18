"use client";

import React from "react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Swiper,
  SwiperSlide,
} from "./CustomSwiper";
import { Box } from "@radix-ui/themes";

interface CarouselProps {
  slides: React.ReactNode[]; // Array of slides (can include any ReactNode)
  autoplay?: boolean; // Enable or disable autoplay
  pagination?: boolean; // Enable or disable pagination
  navigation?: boolean; // Enable or disable navigation
  loop?: boolean; // Enable or disable loop
  className?: string; // Optional additional class names
  slidesPerView?: number;
  slidesOnSm?: number;
  slidesOnMd?: number;
  slidesOnLg?: number;
  slidesOnXl?: number;
  slidesOn2Xl?: number;
  spaceBetween: number;
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoplay = false,
  pagination = false,
  navigation = false,
  loop = false,
  className = "",
  slidesPerView = 1,
  slidesOnSm = 1,
  slidesOnMd = 1,
  slidesOnLg = 1,
  slidesOnXl = 1,
  slidesOn2Xl = 1,
  spaceBetween = 30,
}) => {
  return (
    <Box className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={loop}
        autoplay={
          autoplay ? { delay: 3000, disableOnInteraction: false } : undefined
        }
        pagination={pagination ? { clickable: true } : undefined}
        navigation={navigation}
        className={className}
        breakpoints={{
          640: { slidesPerView: slidesOnSm },
          768: { slidesPerView: slidesOnMd },
          1024: { slidesPerView: slidesOnLg },
          1280: { slidesPerView: slidesOnXl },
          1536: { slidesPerView: slidesOn2Xl },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={`slide-${index}`}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
