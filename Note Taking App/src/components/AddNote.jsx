import React from "react";
import searchIcon from "../assets/search-icon.png";

export default function AddNote() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="search-input m-auto w-[90%] bg-[#242424] flex justify-start items-center px-3 py-2 space-x-2"
    >
      <img src={searchIcon} alt="plus" width={20} />
      <input type="text" className="outline-0" placeholder="Search note" />
    </form>
  );
}
