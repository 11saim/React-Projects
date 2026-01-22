import React from "react";
import arrow from "../assets/arrow.png";

export default function TextOptions() {
  return (
    <div className="text-options flex space-x-3">
      <div className="select text-select relative">
        <div className="selected-option flex space-x-9">
          <p>Paragraph</p>
          <img src={arrow} alt="arrow" width={25} height={25} />
        </div>
        <ul className="options bg-[#1f1f1f] mt-3 hidden w-32">
          <li className="hover:bg-[#312EB5] p-2">Paragraph</li>
          <li className="hover:bg-[#312EB5] p-2">Quote</li>
          <li className="hover:bg-[#312EB5] p-2">Code block</li>
          <li className="hover:bg-[#312EB5] p-2">Bullet list</li>
          <li className="hover:bg-[#312EB5] p-2">Numbered list</li>
          <li className="hover:bg-[#312EB5] p-2">Checklist</li>
        </ul>
      </div>
      <div className="select option-select relative">
        <div className="selected-option flex space-x-5">
          <p>16</p>
          <img src={arrow} alt="arrow" width={25} height={25} />
        </div>
        <ul className="options bg-[#1f1f1f] mt-3 hidden w-15">
          <li className="hover:bg-[#312EB5] p-2">8</li>
          <li className="hover:bg-[#312EB5] p-2">9</li>
          <li className="hover:bg-[#312EB5] p-2">10</li>
          <li className="hover:bg-[#312EB5] p-2">11</li>
          <li className="hover:bg-[#312EB5] p-2">12</li>
          <li className="hover:bg-[#312EB5] p-2">14</li>
          <li className="hover:bg-[#312EB5] p-2">16</li>
          <li className="hover:bg-[#312EB5] p-2">18</li>
          <li className="hover:bg-[#312EB5] p-2">20</li>
          <li className="hover:bg-[#312EB5] p-2">24</li>
          <li className="hover:bg-[#312EB5] p-2">28</li>
          <li className="hover:bg-[#312EB5] p-2">32</li>
          <li className="hover:bg-[#312EB5] p-2">36</li>
          <li className="hover:bg-[#312EB5] p-2">48</li>
          <li className="hover:bg-[#312EB5] p-2">72</li>
        </ul>
      </div>
    </div>
  );
}
