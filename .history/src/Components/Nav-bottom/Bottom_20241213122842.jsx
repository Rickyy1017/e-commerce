import React from "react";
import bot from "../../APIs/bot.js";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Bottom() {
  return (
    <div className="border-2 border-primary w-[100%]">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="]">
          {bot.map((index, item) => (
            <div key={index} className="  ">
              <div className=" ">
                <img src={index.image} alt="" />
                
              </div>
              <div>
                <p>{index.name}</p>
                <p>{index.p}</p>
              </div>
            </div>
          ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
