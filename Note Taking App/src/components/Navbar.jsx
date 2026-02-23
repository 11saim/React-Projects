import React from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="Navbar p-5 flex justify-between items-center">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}
