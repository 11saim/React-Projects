import React from "react";
import Navbar from "./Navbar";
import AddNote from "./AddNote";
import Recents from "./Recents";
import Folders from "./Folders";
import More from "./More";

export default function Sidebar() {
  return (
    <div className="Sidebar h-1/2 xl:h-auto w-full xl:w-1/2 bg-[#181818] text-white">
      <Navbar />
      <AddNote />
      <div className="h-1/2 xl:h-auto overflow-auto xl:overflow-visible">
        <Recents />
        <Folders />
        <More />
      </div>
    </div>
  );
}
