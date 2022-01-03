import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

function Slide({data}) {
    return (
        <div>
                  <div class="container mx-auto w-[96vw] my-5 m-4 bg-[#ffff] rounded-md shadow-lg">
        <div className="font-bold text-2xl p-4">
          {" "}
          <h1> {data[0]}</h1>
        </div>
        <div class=" mx-4 text-center mt-2 flex p-2">
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
            {data[1].map((item) => (
              <SwiperSlide key={item}>
                <div className="h-[70%]  flex items-center">
                  <img src={item} alt="" className="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
        </div>
    )
}

export default Slide
