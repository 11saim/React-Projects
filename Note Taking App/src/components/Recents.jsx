import React, { useState, useEffect, useContext } from "react";
import whiteNoteIcon from "../assets/white-note-icon.png";
import greyNoteIcon from "../assets/grey-note-icon.png";
import Loader from "./Loader";
import { fetchNotes } from "../utils/api/notes";
import { FolderContext } from "../context/FolderContext";
import { NoteContext } from "../context/NoteContext";

export default function Recents() {
  const [recentNotes, setRecentNotes] = useState(null);
  const { state: folderState, dispatch: folderDispatch } =
    useContext(FolderContext);
  const { state: noteState, dispatch: noteDispatch } = useContext(NoteContext);

  useEffect(() => {
    const getRecentNotes = async () => {
      const data = await fetchNotes("?recent=true");
      if (data.success) {
        setRecentNotes([...data.data.notes]);
      }
    };
    getRecentNotes();
  }, [noteState.notes, folderState.folders]);

  return (
    <div className="recents-section py-4 text-[#a3a3a3]">
      <div className="px-3 py-2">
        <h4>Recents</h4>
      </div>

      {recentNotes ? (
        recentNotes.length > 0 ? (
          <div className="space-y-1 h-auto max-h-38 overflow-auto">
            {recentNotes.map((note) => {
              const isActive = noteState.activeNote === note._id;

              return (
                <div
                  key={note._id}
                  onClick={() => {
                    noteDispatch({
                      type: "SET_ACTIVE_NOTE",
                      payload:
                        noteState.activeNote === note._id ? "" : note._id,
                    });
                    folderDispatch({
                      type: "SET_ACTIVE_FOLDER",
                      payload: note.folder._id,
                    });
                  }}
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
          <p className="text-lg font-semibold text-center">No Notes</p>
        )
      ) : (
        <Loader />
      )}
    </div>
  );
}
