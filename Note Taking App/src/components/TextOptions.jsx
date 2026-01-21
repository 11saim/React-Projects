import React from "react";
import arrow from "../assets/arrow.png";

export default function TextOptions() {
  return (
    <div className="text-options flex space-x-3">
      <div className="select text-select">
        <div className="selected-option flex space-x-5">
          <p>Paragraph</p>
          <img src={arrow} alt="arrow" width={25} height={25} />
        </div>
        <ul className="options bg-[#1f1f1f] mt-3 hidden">
          <li className="hover:bg-[#312EB5] p-2">Paragraph</li>
          <li className="hover:bg-[#312EB5] p-2">Paragraph</li>
          <li className="hover:bg-[#312EB5] p-2">Paragraph</li>
        </ul>
      </div>
      <div className="select option-select">
        <div className="selected-option flex space-x-5">
          <p>16</p>
          <img src={arrow} alt="arrow" width={25} height={25} />
        </div>
        <ul className="options bg-[#1f1f1f] mt-3 hidden">
          <li className="hover:bg-[#312EB5] p-2">8</li>
          <li className="hover:bg-[#312EB5] p-2">10</li>
          <li className="hover:bg-[#312EB5] p-2">12</li>
          <li className="hover:bg-[#312EB5] p-2">14</li>
          <li className="hover:bg-[#312EB5] p-2">16</li>
          <li className="hover:bg-[#312EB5] p-2">18</li>
          <li className="hover:bg-[#312EB5] p-2">22</li>
          <li className="hover:bg-[#312EB5] p-2">24</li>
        </ul>
      </div>
    </div>
  );
}
