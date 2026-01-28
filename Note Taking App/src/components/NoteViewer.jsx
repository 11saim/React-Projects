import React from "react";
import NoteHead from "./NoteHead";
import NoteDetails from "./NoteDetails";
import Tools from "./Tools";
import Content from "./Content";

export default function NoteViewer() {
  return (
    <div className="NoteViewer w-[60%] bg-[#181818] text-white p-10 h-auto">
      <div className="h-[35%] xl:h-auto">
        <NoteHead />
        <NoteDetails />
        <Tools />
      </div>
      <Content />
    </div>
  );
}
