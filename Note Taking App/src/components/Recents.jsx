import React from "react";
import whiteNoteIcon from "../assets/white-note-icon.png";
import greyNoteIcon from "../assets/grey-note-icon.png";
import { useState } from "react";

export default function Recents() {
  const [activeNote, setActiveNote] = useState("");

  const notes = [
    "Reflection on the Month of June",
    "Project proposal",
    "Travel itinerary",
  ];

  return (
    <div className="recents-section py-4 text-[#a3a3a3]">
      <div className="px-3 py-2">
        <h4>Recents</h4>
      </div>

      <div className="space-y-1">
        {notes.map((note) => {
          const isActive = activeNote === note;

          return (
            <div
              key={note}
              onClick={() =>
                setActiveNote((prev) => (note === prev ? "" : note))
              }
              className={`flex items-center space-x-3 p-3 cursor-pointer transition-colors duration-200
                ${isActive ? "bg-[#312EB5] text-white" : "hover:bg-[#232323]"}`}
            >
              <img
                src={isActive ? whiteNoteIcon : greyNoteIcon}
                alt="note-icon"
                width={20}
                height={20}
              />
              <span className="line-clamp-1">{note}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
