import React from "react";
import plus from "../assets/plus.png";

export default function AddNote() {
  return (
    <div className="m-auto w-[90%] bg-[#242424] flex justify-center items-center px-3 py-2 space-x-1">
      <img src={plus} alt="plus" width={20} />
      <button className="add-note">New Note</button>
    </div>
  );
}
