import React from "react";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search-icon.png";
import whiteSearchIcon from "../assets/white-search-icon.png";

export default function Navbar({ isSearching, setIsSearching }) {
  return (
    <div className="Navbar p-5 flex justify-between items-center">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div onClick={() => setIsSearching(!isSearching)} className="search-bar">
        <img
          src={isSearching ? whiteSearchIcon : searchIcon}
          alt="search-icon"
          width={25}
        />
      </div>
    </div>
  );
}
