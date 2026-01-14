import React from "react";
import Navbar from "./Navbar";
import AddNote from "./AddNote";
import Recents from "./Recents";
import Folders from "./Folders";
import More from "./More";

export default function Sidebar() {
  return (
    <div className="Sidebar bg-amber-700">
      <Navbar />
      <AddNote />
      <Recents />
      <Folders />
      <More />
    </div>
  );
}
