import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./body.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

const data_img = [
  "/slides/1.jpg",
  "/slides/2.jpg",
  "/slides/3.jpg",
  "/slides/4.jpg",
  "/slides/5.jpg",
  "/slides/6.jpg",
  "/slides/7.jpg",
  "/slides/8.jpg",
];
function Body() {
  return (
    <div>
      <div className="h-[600px] ">
        <Swiper navigation={true} className="mySwiper" loop={true}>
          {data_img.map((item) => (
            <SwiperSlide key={item}>
              <img src={item} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Body;
