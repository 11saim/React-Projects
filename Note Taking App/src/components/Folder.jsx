import React from "react";

export default function Folder() {
  return (
    <div className="folder bg-[#232323] m-3 w-full p-5 space-y-3">
      <div className="title">My Goals for the Next Year</div>
      <div className="details flex items-center text-[13px] space-x-3">
        <div className="date text-[#7b7b7b]">31/12/2022</div>
        <div className="subtitle text-[#a7a7a7]">
          As the year comes to a ...
        </div>
      </div>
    </div>
  );
}
