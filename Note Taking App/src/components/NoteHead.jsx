import React from "react";
import closedOptions from "../assets/closed-options.png";

export default function NoteHead() {
  return (
    <div className="note-head flex justify-between items-end">
      <div className="note-title">
        <p className="text-4xl">Reflection on the Month of June</p>
      </div>
      <div className="options">
        <img src={closedOptions} alt="closed-options" width={40} height={40} />
      </div>
    </div>
  );
}
