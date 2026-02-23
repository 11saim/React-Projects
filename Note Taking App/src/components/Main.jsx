import React from "react";
import Folder from "./Folder";

export default function Main({ activeNote, setActiveNote }) {
  return (
    <div className="main">
      <div className="folders flex flex-col items-center">
        <Folder activeNote={activeNote} setActiveNote={setActiveNote} />
      </div>
    </div>
  );
}
