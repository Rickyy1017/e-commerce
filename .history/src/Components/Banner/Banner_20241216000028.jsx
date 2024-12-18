import React from "react";
import banner1 from "../../assets/media/images/banner-1.jpg";
import banner2 from "../../assets/media/images/banner-2.jpg";
import banner3 from "../../assets/media/images/banner-3.jpg";

import "./banner.css";

function Banner() {
  return (
    <div class="">






      <div class="contain] ">
        <div class="slider-container has-scrollbar">
          <div class="slider-item justify-center flex items-center">
            <img src={banner1} alt="" />

            {/* <img src="./assets/images/banner-1.jpg" alt="women's latest fashion sale" class="banner-img"> */}

            <div class="banner-content  bg-[transparent]">
              <p class="banner-subtitle">Trending item</p>

              <h2 class="banner-title">Women's latest fashion sale</h2>

              <p class="banner-text">
                starting at &dollar; <b>20</b>.00
              </p>

              <a href="#" class="banner-btn">
                Shop now
              </a>
            </div>
          </div>

          <div class="slider-item">
            <img src={banner2} alt="" />

            {/* <img src="./assets/images/banner-2.jpg" alt="modern sunglasses" class="banner-img"> */}

            <div class="banner-content">
              <p class="banner-subtitle">Trending accessories</p>

              <h2 class="banner-title">Modern sunglasses</h2>

              <p class="banner-text">
                starting at &dollar; <b>15</b>.00
              </p>

              <a href="#" class="banner-btn">
                Shop now
              </a>
            </div>
          </div>

          <div class="slider-item">
            <img src={banner3} alt="" />
            {/* <img src="./assets/images/banner-3.jpg" alt="new fashion summer sale" class="banner-img"> */}

            <div class="banner-content">
              <p class="banner-subtitle">Sale Offer</p>

              <h2 class="banner-title">New fashion summer sale</h2>

              <p class="banner-text">
                starting at &dollar; <b>29</b>.99
              </p>

              <a href="#" class="banner-btn">
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
