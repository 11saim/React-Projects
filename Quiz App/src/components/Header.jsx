import React from "react";
import stopwatch from "../assets/stopwatch.png";

export default function Header() {
  return (
    <div className="flex my-4 flex-col my-6 space-y-6">
      <div className="flex justify-around items-center">
        <p className="text-white font-bold">
          {0} of {10}
        </p>
        <div className="w-30 rounded-[50px] px-3 py-1 bg-[#8538f8] flex justify-between items-center">
          <img className="w-8 h-8" src={stopwatch} alt="Stop-Watch" />
          <p className="text-white text">03:58</p>
        </div>
      </div>
      <div className="progress-bar">
        <div className="w-[90%] h-4 bg-black m-auto rounded-[40px]">
          <div className="w-[50%] h-4 bg-[#3ab77d] rounded-[40px]"></div>
        </div>
      </div>
    </div>
  );
}
