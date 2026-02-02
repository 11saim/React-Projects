import React, { useState } from "react";
import arrow from "../assets/arrow.png";

export default function TextOptions() {
  const [isTextSelect, setIsTextSelect] = useState(false);
  const [isOptionSelect, setIsOptionSelect] = useState(false);
  return (
    <div className="text-options flex space-x-7 lg:space-x-3">
      <div className="select text-select relative">
        <div
          onClick={() => setIsTextSelect(!isTextSelect)}
          className="selected-option flex space-x-4 lg:space-x-9 cursor-pointer"
        >
          <p>Paragraph</p>
          <img src={arrow} alt="arrow" width={25} height={25} />
        </div>
        {isTextSelect && (
          <ul className="options bg-[#1f1f1f] mt-3 absolute w-32">
            <li className="hover:bg-[#312EB5] p-2 cursor-pointer">Paragraph</li>
            <li className="hover:bg-[#312EB5] p-2 cursor-pointer">Quote</li>
            <li className="hover:bg-[#312EB5] p-2 cursor-pointer">
              Code block
            </li>
            <li className="hover:bg-[#312EB5] p-2 cursor-pointer">
              Bullet list
            </li>
            <li className="hover:bg-[#312EB5] p-2 cursor-pointer">
              Numbered list
            </li>
            <li className="hover:bg-[#312EB5] p-2 cursor-pointer">Checklist</li>
          </ul>
        )}
      </div>
      <div className="select option-select relative">
        <div
          onClick={() => setIsOptionSelect(!isOptionSelect)}
          className="selected-option flex space-x-5 cursor-pointer"
        >
          <p>16</p>
          <img src={arrow} alt="arrow" width={25} height={25} />
        </div>
        {isOptionSelect && (
          <ul className="options bg-[#1f1f1f] mt-3 absolute w-15">
            <li className="hover:bg-[#312EB5] p-2 cursor-pointer">8</li>
            <li className="hover:bg-[#312EB5] p-2 cursor-pointer">9</li>
            <li className="hover:bg-[#312EB5] p-2 cursor-pointer">10</li>
            <li className="hover:bg-[#312EB5] p-2 cursor-pointer">11</li>
            <li className="hover:bg-[#312EB5] p-2 cursor-pointer">12</li>
            <li className="hover:bg-[#312EB5] p-2 cursor-pointer">14</li>
            <li className="hover:bg-[#312EB5] p-2 cursor-pointer">16</li>
            <li className="hover:bg-[#312EB5] p-2 cursor-pointer">18</li>
            <li className="hover:bg-[#312EB5] p-2 cursor-pointer">20</li>
            <li className="hover:bg-[#312EB5] p-2 cursor-pointer">24</li>
            <li className="hover:bg-[#312EB5] p-2 cursor-pointer">28</li>
            <li className="hover:bg-[#312EB5] p-2 cursor-pointer">32</li>
            <li className="hover:bg-[#312EB5] p-2 cursor-pointer">36</li>
            <li className="hover:bg-[#312EB5] p-2 cursor-pointer">48</li>
            <li className="hover:bg-[#312EB5] p-2 cursor-pointer">72</li>
          </ul>
        )}
      </div>
    </div>
  );
}
