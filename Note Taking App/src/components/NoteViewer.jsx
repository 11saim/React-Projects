import React from "react";
import NoteTitle from "./NoteTitle";
import NoteDetails from "./NoteDetails";
import Tools from "./Tools";
import Content from "./Content";

export default function NoteViewer() {
  return (
    <div className="NoteViewer w-[60%] bg-[#181818] text-white">
      <NoteTitle />
      <NoteDetails />
      <Tools />
      <Content />
    </div>
  );
}
