import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        autoHeight={true}
      >
        <SwiperSlide><div className="sw">Slide 1</div></SwiperSlide>
        <SwiperSlide><div className="sw">Slide 2</div></SwiperSlide>
        <SwiperSlide><div className="sw">Slide 3</div></SwiperSlide>
      </Swiper>
    </>
  );
}
