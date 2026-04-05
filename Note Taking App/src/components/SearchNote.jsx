import React, { useEffect, useState } from "react";
import searchIcon from "../assets/search-icon.png";
import { fetchNotes } from "../utils/api/notes";

export default function SearchNote({ setNotes, setActiveFolder }) {
  const [searchedNote, setSearchedNote] = useState("");

  useEffect(() => {
    if (!searchedNote) {
      setActiveFolder("");
      setNotes({
        folder: "",
        notes: [],
      });
      return;
    }

    const delay = setTimeout(async () => {
      const data = await fetchNotes(`?search=${searchedNote}`);
      setNotes(data.data);
      setActiveFolder("Search");
    }, 500);

    return () => clearTimeout(delay);
  }, [searchedNote]);

  return (
    <div className="search-input m-auto w-[90%] bg-[#242424] flex justify-start items-center px-3 py-2 space-x-2">
      <img src={searchIcon} alt="plus" width={20} />
      <input
        onChange={(e) => {
          setSearchedNote(e.target.value);
        }}
        value={searchedNote}
        type="text"
        className="outline-0"
        placeholder="Search note"
      />
    </div>
  );
}
