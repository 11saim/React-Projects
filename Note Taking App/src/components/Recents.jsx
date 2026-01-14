import React from "react";
import noteIcon from "../assets/note-icon.png";

export default function Recents() {
  return (
    <div className="recents-section">
      <div className="head">
        <div className="heading">
          <h4>Recents</h4>
        </div>
      </div>
      <div className="notes">
        <div className="note">
          <div className="note-icon">
            <img src={noteIcon} alt="note-icon" />
          </div>
          <div className="note-title">Reflection on the Month of June</div>
        </div>
        <div className="note">
          <div className="note-icon">
            <img src={noteIcon} alt="note-icon" />
          </div>
          <div className="note-title">Project proposal</div>
        </div>
        <div className="note">
          <div className="note-icon">
            <img src={noteIcon} alt="note-icon" />
          </div>
          <div className="note-title">Travel itinerary</div>
        </div>
      </div>
    </div>
  );
}
