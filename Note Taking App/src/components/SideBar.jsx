import React from "react";
import Navbar from "./Navbar";
import AddNote from "./AddNote";
import Recents from "./Recents";
import Folders from "./Folders";
import More from "./More";

export default function Sidebar() {
  return (
    <div className="Sidebar h-50 sm:h-1/2 xl:h-auto w-full xl:w-1/2 bg-[#181818] text-white">
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
  );
}
