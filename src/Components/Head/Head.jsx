import React, { useState } from "react";
import icon from "../../APIs/icon";
import { ChevronDown, Facebook, Twitter } from "react-feather";
import {
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaMagnifyingGlass,
  FaTwitter,
  FaUser,
} from "react-icons/fa6";
import "./head.css";
import { FaShoppingBag } from "react-icons/fa";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Head() {
  return (
    <div>
      <div
        id="head"
        className=" flex justify-center items-center gap-[24rem] p-[1rem] text-text "
      >
        <ul id="ul" className="flex gap-[0.5rem] class  ">
          <li className=" cursor-pointer bg-[#f2f2f2] text-[20px] p-[5px] rounded-[5px] hover:bg-primary hover:text-[#fff] transition duration-00 ease-in-out ">
            <FaFacebook />
          </li>
          <li className=" cursor-pointer bg-[#f2f2f2] text-[20px] p-[5px] rounded-[5px] hover:bg-primary hover:text-[#fff] transition duration-00 ease-in-out ">
            <FaTwitter />
          </li>
          <li className=" cursor-pointer bg-[#f2f2f2] text-[20px] p-[5px] rounded-[5px] hover:bg-primary hover:text-[#fff] transition duration-00 ease-in-out ">
            <FaInstagram />
          </li>
          <li className=" cursor-pointer bg-[#f2f2f2] text-[20px] p-[5px] rounded-[5px] hover:bg-primary hover:text-[#fff] transition duration-00 ease-in-out ">
            <FaLinkedin />
          </li>
        </ul>
        <p className="free">Free Shipping This Week Order Over - $55</p>
        <div id="select" className="flex gap-[1rem]">
          <select name="" id="">
            <option value="">EUR €</option>
            <option value="">USD $</option>
          </select>
          <select name="" id="">
            <option value="">ENGLISH</option>
            <option value="">ESPANOL</option>
            <option value="">FRANCAIS</option>
          </select>
        </div>
      </div>
      <div id="head2" className="flex justify-center gap-[6rem] p-[1rem] items-center border border-border mb-6 ">
        <h1 className="font-bold text-[30px] ">ANON</h1>
        <div id="main" className="flex relative y ">
          <input id="input"
            className=" w-[60rem] p-[0.5rem] text-[20px] border-[0.1px] rounded-[10px] border-[#b3b3b352] "
            type="text"
            placeholder="Enter your product name.."
          />
          <div id="magnify" className="absolute max-w-[60rem] right-7 top-4 text-[20px]  text-text cursor-pointer hover:text-primary transition duration-00 ease-in-out ">
            <FaMagnifyingGlass />
          </div>
        </div>
        <div id="icon" className="flex text-text text-[25px] gap-[1rem] ">
          <FaUser />
          <FaHeart />
          <FaShoppingBag />
        </div>
  
        
      </div>
    </div>
  );
}
