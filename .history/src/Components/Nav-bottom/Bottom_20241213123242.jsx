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
    <div className="flex justify-center items-center">
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
        {bot.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <div className="mb-2">
                <img  src={item.image} alt={item.name} className="w-[] h-auto "  />
              </div>
              <div className="text-center">
                <p>{item.name}</p>
                <p>{item.p}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}