import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./body.css";

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
    <div>
      {/* Top most slider */}
      <div className="h-[600px] ">
        <Swiper
          navigation={true}
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
      {/* Next slide*/}
      <div class="container mx-auto m-4 bg-[#ffff]">
        <div className="font-bold ">
          {" "}
          <h1> {data_img_2[0]}</h1>
        </div>
        <div class="  mx-4 text-center mt-10 flex">
          {" "}
          <Swiper
            slidesPerView={5}
            spaceBetween={60}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoHeight={true}
            className="mySwiper "
          >
            {data_img_2[1].map((item) => (
              <SwiperSlide key={item}>
                <div className="h-[70%]">
                  <img src={item} alt="" className="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Body;
