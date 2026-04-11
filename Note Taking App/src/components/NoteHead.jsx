import React, { useEffect, useRef, useState, useContext } from "react";
import closedOptions from "../assets/closed-options.png";
import favoriteIcon from "../assets/favorite-icon.png";
import archivedIcon from "../assets/archived-icon.png";
import trashIcon from "../assets/trash-icon.png";
import { updateNote } from "../utils/api/notes";
import { NoteContext } from "../context/NoteContext";

export default function NoteHead({ title }) {
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
      const shouldRemove =
        ["active", "trash", "archived"].includes(body.status) ||
        body.isFavourite;

      if (shouldRemove) {
        noteDispatch({ type: "REMOVE_NOTE", payload: noteId });

        if (noteState.activeNote === noteId) {
          noteDispatch({
            type: "SET_ACTIVE_NOTE",
            payload: "",
          });
        }
      } else {
        noteDispatch({
          type: "UPDATE_NOTE",
          payload: { id: noteId, data: data.data },
        });
      }
    }
  };

  const performAction = async (body) => {
    const noteId = noteState.activeNote;

    const data = await updateNote(noteId, body);

    handleNoteUpdate(data, body, noteId);

    setIsModel(false);

    noteDispatch({
      type: "SET_ACTIVE_NOTE",
      payload: "",
    });
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
                onClick={() => performAction({ isFavourite: true })}
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
                onClick={() => performAction({ status: "archived" })}
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
                onClick={() => performAction({ status: "trash" })}
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
