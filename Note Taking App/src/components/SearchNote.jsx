import React, { useEffect, useState } from "react";
import searchIcon from "../assets/search-icon.png";

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

    const fetchNotes = async (URL) => {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data.data)
      setNotes(data.data);
      setActiveFolder("Search");
    };

    const delay = setTimeout(() => {
      fetchNotes(`http://localhost:3000/api/notes/?search=${searchedNote}`);
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
