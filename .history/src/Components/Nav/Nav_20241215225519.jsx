import React, { useState } from "react";
import images from "../../APIs/images";
import categories from "../../APIs/categories";
import "./nav.css";

import banner1 from "../../assets/media/images/banner-1.jpg";
import banner2 from "../../assets/media/images/banner-2.jpg";
import banner3 from "../../assets/media/images/banner-3.jpg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./nav.css";
export default function Nav() {
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
      <div>
        <ul className="flex items-center justify-center gap-[4rem] p-[rem] font-[500] text-[17px] mb-6 ">
          <li className="  hover:border-b-primary border-transparent border-b-4 border-[#fff]  pb-[1rem] cursor-pointer transition duration-500 ease-in-out hover:text-primary   ">
            HOME
          </li>
          <div className="group">
            <li
              className=" hover:border-b-primary border-transparent border-b-4 border-[#fff] pb-[1rem] cursor-pointer  transition duration-500 ease-in-out hover:text-primary   "
              // onMouseEnter={handleHover}
              // onMouseLeave={closeHover}
            >
              CATEGORIES
            </li>
          </div>
          <li
            className="  hover:border-b-primary border-transparent border-b-4 border-[#fff] pb-[1rem] cursor-pointer transition duration-500 ease-in-out hover:text-primary   "
            // onMouseEnter={handleMenHover}
            // onMouseLeave={closeMenHover}
          >
            MEN'S
          </li>
          <li
            className="  hover:border-b-primary border-transparent border-b-4 border-[#fff] pb-[1rem] cursor-pointer transition duration-500 ease-in-out hover:text-primary   "
            // onMouseEnter={handleWomenHover}
            // onMouseLeave={closeWomenHover}
          >
            WOMEN'S
          </li>
          <li
            className="  hover:border-b-primary border-transparent border-b-4 border-[#fff] pb-[1rem] cursor-pointer transition duration-500 ease-in-out hover:text-primary   "
            // onMouseEnter={handleJewelHover}
            // onMouseLeave={closeJewelHover}
          >
            JEWEELRY
          </li>
          <li
            className="  hover:border-b-primary border-transparent border-b-4 border-[#fff] pb-[1rem] cursor-pointer transition duration-500 ease-in-out hover:text-primary   "
            // onMouseEnter={handlePerfumeHover}
            // onMouseLeave={closePerfumeHover}
          >
            PERFUME
          </li>
          <li className="  hover:border-b-primary border-transparent border-b-4 border-[#fff] pb-[1rem] cursor-pointer transition duration-500 ease-in-out hover:text-primary   ">
            BLOG
          </li>
          <li className="  hover:border-b-primary border-transparent border-b-4 border-[#fff] pb-[1rem] cursor-pointer  transition duration-500 ease-in-out hover:text-primary   ">
            HOT OFFERS
          </li>
        </ul>
        <div >
          <div className=" absolute z-10 top-[25 %] h-[100%] right-[16.5%] w-[67%]  ">
            <div className="justify-center flex gap-[3rem] p-[1rem] border-2 border-border bg-[#fff] rounded-[10px]  group-hover:flex ">
              {categories.map((index) => (
                <div key={index.id}>
                  <h1 className=" font-[500] text-[20px] border-b border-border py-[1rem] ">
                    {" "}
                    {index.name}{" "}
                  </h1>
                  <div className=" text-text flex flex-col py-[2rem] gap-[10px] text-[20px] ">
                    <h1 className=" cursor-pointer hover:text-primary ">
                      {" "}
                      {index.name2}{" "}
                    </h1>
                    <h1 className=" cursor-pointer hover:text-primary ">
                      {" "}
                      {index.name3}{" "}
                    </h1>
                    <h1 className=" cursor-pointer hover:text-primary ">
                      {" "}
                      {index.name4}{" "}
                    </h1>
                    <h1 className=" cursor-pointer hover:text-primary ">
                      {" "}
                      {index.name5}{" "}
                    </h1>
                    <h1 className=" cursor-pointer hover:text-primary ">
                      {" "}
                      {index.name6}{" "}
                    </h1>
                  </div>
                  <div className=" w-[300px] ">
                    <img className="rounded-[10px]" src={index.image} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" absolute z-10 top-[17.7%] h-[100%] left-[38.5%] w-[12%]  ">
            <div className=" bg-[#fff]  p-[1.5rem] flex flex-col gap-[10px] border-2 border-border rounded-[10px] ">
              <h1 className=" text-[20px] text-text hover:text-primary ">
                Shirt
              </h1>
              <h1 className=" text-[20px] text-text hover:text-primary ">
                Short & Jeans
              </h1>
              <h1 className=" text-[20px] text-text hover:text-primary ">
                Safety Shoes
              </h1>
              <h1 className=" text-[20px] text-text hover:text-primary ">
                Wallets
              </h1>
            </div>
          </div>
          <div className=" absolute z-10 top-[17.7%] h-[100%] left-[44%] w-[12%] ">
            <div className=" bg-[#fff]  p-[1.5rem] flex flex-col gap-[10px] border-2 border-border rounded-[10px] ">
              <h1 className=" text-[20px] text-text hover:text-primary ">
                Dress & Frock
              </h1>
              <h1 className=" text-[20px] text-text hover:text-primary ">
                Earrings
              </h1>
              <h1 className=" text-[20px] text-text hover:text-primary ">
                Necklace
              </h1>
              <h1 className=" text-[20px] text-text hover:text-primary ">
                Makeup Kit
              </h1>
            </div>
          </div>
          <div className=" absolute z-10 top-[17.7%] h-[100%] left-[51%] w-[12%] ">
            <div className=" bg-[#fff]  p-[1.5rem] flex flex-col gap-[10px] border-2 border-border rounded-[10px] ">
              <h1 className=" text-[20px] text-text hover:text-primary ">
                Earring
              </h1>
              <h1 className=" text-[20px] text-text hover:text-primary ">
                Couple Rings
              </h1>
              <h1 className=" text-[20px] text-text hover:text-primary ">
                Necklace
              </h1>
              <h1 className=" text-[20px] text-text hover:text-primary ">
                Bracelet
              </h1>
            </div>
          </div>
          <div className=" absolute z-10 top-[17.7%] h-[100%] left-[57%] w-[12%] ">
            <div className=" bg-[#fff]  p-[1.5rem] flex flex-col gap-[10px] border-2 border-border rounded-[10px] ">
              <h1 className=" text-[20px] text-text hover:text-primary ">
                Clothes Perfume
              </h1>
              <h1 className=" text-[20px] text-text hover:text-primary ">
                Deodorant
              </h1>
              <h1 className=" text-[20px] text-text hover:text-primary ">
                Flower Fragrance
              </h1>
              <h1 className=" text-[20px] text-text hover:text-primary ">
                Air Freshner
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
