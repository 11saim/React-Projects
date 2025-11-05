import React from "react";
import stopwatch from "../assets/stopwatch.png";

export default function Timer() {
  return (
    <div className="w-30 rounded-[50px] px-3 py-1 bg-[#8538f8] flex justify-between items-center">
      <img className="w-8 h-8" src={stopwatch} alt="Stop-Watch" />
      <p className="text-white text">03:58</p>
    </div>
  );
}
