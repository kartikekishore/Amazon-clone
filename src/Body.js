import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./body.css";
import Card from "./components/Card";
import Slide from "./components/Slide";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

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
const data_img_2 = [
  "Best Sellers in Computers & Accessories",
  [
    "/slides2/1.jpg",
    "/slides2/2.jpg",
    "/slides2/3.jpg",
    "/slides2/4.jpg",
    "/slides2/5.jpg",
    "/slides2/6.jpg",
    "/slides2/7.jpg",
    "/slides2/8.jpg",
    "/slides2/9.jpg",
    "/slides2/10.jpg",
    "/slides2/11.jpg",
    "/slides2/12.jpg",
    "/slides2/13.jpg",
    "/slides2/14.jpg",
    "/slides2/15.jpg",
    "/slides2/16.jpg",
    "/slides2/17.jpg",
  ],
];
function Body() {
  return (
    <div id="top_id">
      {/* Top most slider */}
      <div className="h-[600px] gradient">
        <Swiper
          className="mySwiper_top"
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        >
          {data_img.map((item) => (
            <SwiperSlide key={item}>
              <img src={item} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 4- card */}
      <div className="flex px-6 bg-gradient-to-b from-transparent to-white w-full gap-4 absolute top-1/2 z-30">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      {/* Next slide*/}
      <Slide data={data_img_2} />

      {/* Next slide */}
      <Slide data={data_img_2} />

      {/* Another 4-card row */}
      <div className="flex px-6 bg-gradient-to-b from-transparent to-white w-full gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      {/* Next slide*/}
      <Slide data={data_img_2} />
    </div>
  );
}

export default Body;
