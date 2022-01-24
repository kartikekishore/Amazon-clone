import React, { useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";




// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "@mui/material";

import "./body.css";
import Card from "./components/Card";
import Slide from "./components/Slide";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 1,
      borderColor: color,
    }}
  />
);

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
const data_img_3 = [
  "Explore everyday essentials",
  [
    "/slides3/1.jpg",
    "/slides3/2.jpg",
    "/slides3/3.jpg",
    "/slides3/4.jpg",
    "/slides3/5.jpg",
    "/slides3/6.jpg",
    "/slides3/7.jpg",
    "/slides3/8.jpg",
    "/slides3/9.jpg",
    "/slides3/10.jpg",
    "/slides3/11.jpg",
    "/slides3/12.jpg",
    "/slides3/13.jpg",
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
      <Slide data={data_img_3} />

      {/* Another 4-card row */}
      <div className="flex px-6 bg-gradient-to-b from-transparent to-white w-full gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      {/* Next slide*/}
      <Slide data={data_img_2} />

      {/* Sign In part */}

      <div className="flex place-content-center my-4  ">
        {/* <Button variant="contained" color="warning">Sign In</Button> */}
        <Button
          style={{
            borderRadius: 5,
            backgroundColor: "#f1a644", //f1a644
            padding: "9px 32px",
            fontSize: "9px",
          }}
          className="text-black"
          variant="contained"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Body;
