import React, { useEffect, useRef, useState, useContext } from "react";
import closedOptions from "../assets/closed-options.png";
import favoriteIcon from "../assets/favorite-icon.png";
import archivedIcon from "../assets/archived-icon.png";
import trashIcon from "../assets/trash-icon.png";
import { updateNote } from "../utils/api/notes";
import { FolderContext } from "../context/FolderContext";
import { NoteContext } from "../context/NoteContext";

export default function NoteHead({
  title,
  activeNote,
  setActiveNote,
  folder,
  notes,
  setNotes,
}) {
  const [isModel, setIsModel] = useState(false);
  const optionsRef = useRef(null);
  const { state: noteState, dispatch: noteDispatch } = useContext(NoteContext);

  useEffect(() => {
    function handleClickOutside(event) {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setIsModel(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModel]);

  const handleNoteUpdate = (data, body, noteId) => {
    if (data.success) {
      if (
        body.status === "active" ||
        body.status === "trash" ||
        body.status === "archived" ||
        body.isFavourite === true
      ) {
        // setNotes({
        //   folder,
        //   notes: notes.filter((note) => note._id != noteId),
        // });
        noteDispatch({
          type: "REMOVE_NOTE",
          payload: noteId,
        });
        if (noteState.activeNote === noteId) {
          // setActiveNote(false);
          noteDispatch({
            type: "SET_ACTIVE_NOTE",
            payload: "",
          });
        }
      } else {
        // setNotes({
        //   folder,
        //   notes: notes.map((note) => (note._id === noteId ? data.data : note)),
        // });
        noteDispatch({
          type: "UPDATE_NOTE",
          payload: { id: noteId, data: data.data },
        });
      }
    }
  };

  return (
    <div className="note-head flex justify-between items-center">
      <div className="note-title flex items-center pb-2 gap-2">
        <p className="flex-1 text-lg sm:text-xl lg:text-3xl leading-normal truncate">
          {title}
        </p>
      </div>

      <div ref={optionsRef} className="options">
        <img
          onClick={() => setIsModel(!isModel)}
          src={closedOptions}
          alt="closed-options"
          width={40}
          height={40}
          className="cursor-pointer"
        />

        {isModel && (
          <div className="options-modal z-50 bg-[#333333] p-4 rounded-md absolute top-25 right-10 w-48 space-y-5">
            <div className="top-options space-y-4 border-b-2 border-b-[#3d3d3d]">
              <div
                className="add-to-favorite flex space-x-2 cursor-pointer"
                onClick={() => {
                  updateNote(noteState.activeNote, { isFavourite: true });
                  setIsModel(false);
                  // setActiveNote("");
                  noteDispatch({
                    type: "SET_ACTIVE_NOTE",
                    payload: "",
                  });
                }}
              >
                <img
                  src={favoriteIcon}
                  alt="favorite-icon"
                  width={25}
                  height={25}
                />
                <p>Add to Favorites</p>
              </div>
              <div
                className="archived flex space-x-2 mb-2 cursor-pointer"
                onClick={() => {
                  const nodeId = noteState.activeNote;
                  const body = { status: "archived" };
                  const data = updateNote(nodeId, body);
                  handleNoteUpdate(data, body, nodeId);
                  setIsModel(false);
                }}
              >
                <img
                  src={archivedIcon}
                  alt="archived-icon"
                  width={25}
                  height={25}
                />
                <p>Archived</p>
              </div>
            </div>
            <div className="bottom-options">
              <div
                className="delete flex space-x-2 cursor-pointer"
                onClick={() => {
                  const noteId = noteState.activeNote;
                  const body = { status: "trash" };
                  const data = updateNote(noteId, body);
                  handleNoteUpdate(data, body, noteId);
                  setIsModel(false);
                }}
              >
                <img src={trashIcon} alt="trash-icon" width={25} height={25} />
                <p>Delete</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
