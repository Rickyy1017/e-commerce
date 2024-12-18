import React from 'react'
import bot from "../../APIs/bot.js";


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Bottom() {
  return (
    <div>
      {   bot.map((index) => (
          <Swiper key={index} className=''
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <div>
              <img src={index.image} alt="" />
            </div>
          </SwiperSlide>
          
        </Swiper>
        ) )
      }
      
    </div>
  )
}
