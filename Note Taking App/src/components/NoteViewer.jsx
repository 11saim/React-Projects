import React from "react";
import NoteHead from "./NoteHead";
import NoteDetails from "./NoteDetails";
import Tools from "./Tools";
import Content from "./Content";
import noteIcon from "../assets/note.png";

export default function NoteViewer({ activeNote }) {
  return !activeNote ? (
    <div className="space-y-3 flex justify-center items-center flex-col w-full sm:w-[60%] bg-[#181818] text-white p-5 lg:p-10 min-h-screen h-auto">
      <img src={noteIcon} alt="note" width={100} height={100} />
      <p className="text-xl font-semibold">Select a note to view</p>
      <p className="text-[#a3a3a3] max-w-120 text-center">
        Choose a note from a folder to view its contents, or create a new note
        to add to your collection.
      </p>
    </div>
  ) : (
    <div className="NoteViewer w-full sm:w-[60%] bg-[#181818] text-white p-5 lg:p-10 h-auto">
      <div className="h-auto">
        <NoteHead />
        <NoteDetails />
        <Tools />
      </div>
      <Content />
    </div>
  );
}
