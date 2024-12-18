import React from "react";
import bot from "../../APIs/bot.js";
import './bottom.css'



export default function Bottom() {
  return (
    <div className="flex justify-center items-center  ">
      {bot.map((item, index) => (
        <div
          key={index}
          className="flex gap-8 items-center border border-primary"
        >
          <div className="mb-2 bg-[#ededed] px-3 py-1 border-2 border-[#7472727a] rounded-md ">
            <img
              src={item.image}
              alt={item.name}
              className="w-[40px] h-auto "
            />
          </div>
          <div className="text-center flex ">
            <div className="flex">
              <p>{item.name}</p>
              <span> {item.span} </span>
            </div>
            <p>{item.p}</p>
          </div>
        </div>
      ))}
    </div>
  );
}  
