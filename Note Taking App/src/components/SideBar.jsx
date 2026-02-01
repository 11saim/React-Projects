import React from "react";
import Navbar from "./Navbar";
import AddNote from "./AddNote";
import Recents from "./Recents";
import Folders from "./Folders";
import More from "./More";
import Menu from "../assets/menu.png";

export default function Sidebar() {
  return (
    <>
      <div className="Sidebar hidden z-50 sm:block max-h-screen sm:h-1/2 overflow-auto xl:h-auto w-full xl:w-1/2 bg-[#181818] text-white sm:max-h-full">
        <div className="h-[30%] xl:h-auto ">
          <Navbar />
          <AddNote />
        </div>
        <div className="h-[70%] xl:h-auto overflow-auto xl:overflow-visible">
          <Recents />
          <Folders />
          <More />
        </div>
      </div>
      <div className="cursor-pointer fixed sm:hidden bg-amber-700 bottom-5 left-5 p-2 rounded-4xl">
        <img src={Menu} alt="Menu" width={25} height={25} />
      </div>
    </>
  );
}
