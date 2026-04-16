import React, { useContext } from "react";
import { useState, useRef } from "react";
import addIcon from "../assets/plus.png";
import { addNote } from "../utils/api/notes";
import { FolderContext } from "../context/FolderContext";
import { NoteContext } from "../context/NoteContext";
import Modal from "./Modal";

export default function Head() {
  const [isModal, setIsModal] = useState(false);
  const inputRef = useRef(null);
  const { state: folderState } = useContext(FolderContext);
  const { state: noteState, dispatch: noteDispatch } = useContext(NoteContext);

  const handleAddNote = async () => {
    const noteName = inputRef.current.value;
    if (!noteName) return;

    const folderId = folderState.activeFolder;
    const body = {
      title: noteName,
      content: "",
    };

    const data = await addNote(folderId, body);

    if (data.success) {
      noteDispatch({
        type: "SET_NOTES",
        payload: {
          folder: noteState.notes.folder,
          notes: [...noteState.notes.notes, data.data],
        },
      });
    }
  };

  return (
    <>
      <div className="head flex items-center justify-between">
        <div className="heading">
          <p className="text-2xl">{noteState.notes.folder}</p>
        </div>
        {folderState.activeFolder != "Favorite" &&
          folderState.activeFolder != "Trash" &&
          folderState.activeFolder != "Archived" &&
          folderState.activeFolder != "Search" && (
            <div
              onClick={() => setIsModal(!isModal)}
              className="add-note cursor-pointer"
            >
              <img src={addIcon} alt="add-icon" width={25} height={25} />
            </div>
          )}
      </div>
      {isModal && (
        <Modal
          title="Note Title:"
          setIsModal={setIsModal}
          inputRef={inputRef}
          btnText="Save"
          handler={handleAddNote}
        />
      )}
    </>
  );
}
