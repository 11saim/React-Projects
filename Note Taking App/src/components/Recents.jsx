import React from "react";
import whiteNoteIcon from "../assets/white-note-icon.png";
import greyNoteIcon from "../assets/grey-note-icon.png";

export default function Recents() {
  return (
    <div className="recents-section py-7 text-[#a3a3a3]">
      <div className="head px-3 py-2">
        <div className="heading">
          <h4>Recents</h4>
        </div>
      </div>
      <div className="notes">
        <div className="note flex p-3 space-x-3 items-center bg-[#312EB5] text-white">
          <div className="note-icon">
            <img src={whiteNoteIcon} alt="note-icon" width={20} height={20} />
          </div>
          <div className="note-title">Reflection on the Month of June</div>
        </div>
        <div className="note flex p-3 space-x-2 items-center">
          <div className="note-icon">
            <img src={greyNoteIcon} alt="note-icon" width={20} height={20} />
          </div>
          <div className="note-title]">Project proposal</div>
        </div>
        <div className="note flex p-3 space-x-2 items-center">
          <div className="note-icon">
            <img src={greyNoteIcon} alt="note-icon" width={20} height={20} />
          </div>
          <div className="note-title">Travel itinerary</div>
        </div>
      </div>
    </div>
  );
}
