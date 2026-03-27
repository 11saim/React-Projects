import React, { useState, useEffect } from "react";
import whiteNoteIcon from "../assets/white-note-icon.png";
import greyNoteIcon from "../assets/grey-note-icon.png";
import Loader from "./Loader";

export default function Recents({
  activeNote,
  setActiveNote,
  activeFolder,
  setActiveFolder,
  notes,
}) {
  const [recentNotes, setRecentNotes] = useState(null);
  useEffect(() => {
    const fetchRecentNotes = async () => {
      const response = await fetch(
        `http://localhost:3000/api/notes/?recent=true`,
      );
      const data = await response.json();
      if (data.success) {
        setRecentNotes([...data.data.notes]);
      }
    };
    fetchRecentNotes();
  }, [notes]);

  return (
    <div className="recents-section py-4 text-[#a3a3a3]">
      <div className="px-3 py-2">
        <h4>Recents</h4>
      </div>

      {recentNotes ? (
        <div className="space-y-1 h-38 overflow-auto">
          {recentNotes.map((note) => {
            const isActive = activeNote === note;

            return (
              <div
                key={note._id}
                onClick={() =>
                  setActiveNote((prev) => (note._id === prev ? "" : note._id))
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
                <span className="line-clamp-1">{note.title}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
