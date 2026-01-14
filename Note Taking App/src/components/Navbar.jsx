import React from "react";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search-icon.png";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="search-bar">
        <img src={searchIcon} alt="search-icon" />
      </div>
    </div>
  );
}
