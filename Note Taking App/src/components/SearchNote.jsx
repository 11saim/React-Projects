import React, { useEffect, useContext } from "react";
import searchIcon from "../assets/search-icon.png";
import { fetchNotes } from "../utils/api/notes";
import { FolderContext } from "../context/FolderContext";
import { NoteContext } from "../context/NoteContext";

export default function SearchNote() {
  const {
    state: { activeFolder, searchedNote },
    dispatch: folderDispatch,
  } = useContext(FolderContext);
  const { dispatch: noteDispatch } = useContext(NoteContext);

  useEffect(() => {
    if (!searchedNote) {
      if (activeFolder === "Search") {
        folderDispatch({ type: "SET_ACTIVE_FOLDER", payload: "" });
        noteDispatch({ type: "SET_NOTES", payload: { folder: "", notes: [] } });
        noteDispatch({ type: "SET_ACTIVE_NOTE", payload: "" });
      }
      return;
    }

    const delay = setTimeout(async () => {
      const data = await fetchNotes(`?search=${searchedNote}`);
      folderDispatch({ type: "SET_ACTIVE_FOLDER", payload: "Search" });
      noteDispatch({ type: "SET_NOTES", payload: data.data });
      noteDispatch({ type: "SET_ACTIVE_NOTE", payload: "" });
    }, 500);

    return () => clearTimeout(delay);
  }, [searchedNote, activeFolder, folderDispatch, noteDispatch]);

  return (
    <div className="search-input m-auto w-[90%] bg-[#242424] flex justify-start items-center px-3 py-2 space-x-2">
      <img src={searchIcon} alt="plus" width={20} />
      <input
        onChange={(e) => {
          folderDispatch({ type: "SET_SEARCHED_NOTE", payload: e.target.value });
        }}
        value={searchedNote}
        type="text"
        className="outline-0"
        placeholder="Search note"
      />
    </div>
  );
}
