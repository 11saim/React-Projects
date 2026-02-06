import React from "react";
import plus from "../assets/plus.png";
import searchIcon from "../assets/search-icon.png";

export default function AddNote({ isSearching, setIsSearching }) {
  return isSearching ? (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsSearching(!isSearching);
      }}
      className="search-input m-auto w-[90%] bg-[#242424] flex justify-start items-center px-3 py-2 space-x-2"
    >
      <img src={searchIcon} alt="plus" width={20} />
      <input type="text" className="outline-0" placeholder="Search note" />
    </form>
  ) : (
    <div className="m-auto w-[90%] bg-[#242424] flex justify-center items-center px-3 py-2 space-x-1">
      <img src={plus} alt="plus" width={20} />
      <button className="add-note">New Note</button>
    </div>
  );
}
