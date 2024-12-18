import React, { useState } from "react";
import images from "../../APIs/images";
import categories from "../../APIs/categories";
import './nav.css'

import banner1 from '../../assets/media/images/banner-1.jpg'
import banner2 from '../../assets/media/images/banner-2.jpg'
import banner3 from '../../assets/media/images/banner-3.jpg'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./nav.css";


import React from 'react'

function Nav() {
  
 const [menHover, setMenHover] = useState(false);
 const [womenHover, setWomenHover] = useState(false);

 const [secondModal, setSecondModal] = useState(false);
 const handleMenHover = () => {
   setSecondModal(true);
 };
 const closeMenHover = () => {
   setSecondModal(!true);
 };

 const [thirdModal, setThirdModal] = useState(false);
 const handleWomenHover = () => {
   setThirdModal(true);
 };
 const closeWomenHover = () => {
   setThirdModal(!true);
 };

 const [fourthModal, setFourthModal] = useState(false);
 const handleJewelHover = () => {
   setFourthModal(true);
 };
 const closeJewelHover = () => {
   setFourthModal(!true);
 };

 const [fifthModal, setFifthModal] = useState(false);
 const handlePerfumeHover = () => {
   setFifthModal(true);
 };
 const closePerfumeHover = () => {
   setFifthModal(!true);
 };
 const [hover, setHover] = useState(false);
 const [firstModal, setFirstModal] = useState(false);

 const handleHover = () => {
   setFirstModal(true);
 };
 const closeHover = () => {
   setTimeout(() => {
     setFirstModal(!true);
   });
 };

  return (
    <div>
  return (
    <div>
      <div class="banner">

<div class="contain">

  <div class="slider-container has-scrollbar">

    <div class="slider-item">
        <img src={banner1} alt="" />

      {/* <img src="./assets/images/banner-1.jpg" alt="women's latest fashion sale" class="banner-img"> */}

      <div class="banner-content">

        <p class="banner-subtitle">Trending item</p>

        <h2 class="banner-title">Women's latest fashion sale</h2>

        <p class="banner-text">
          starting at &dollar; <b>20</b>.00
        </p>

        <a href="#" class="banner-btn">Shop now</a>

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

        <a href="#" class="banner-btn">Shop now</a>

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

        <a href="#" class="banner-btn">Shop now</a>

      </div>

    </div>

  </div>

</div>

</div>
    </div>
  );
    </div>
  )
}

export default Nav

