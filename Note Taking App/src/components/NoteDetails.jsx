import React from "react";
import date from "../assets/date.png";
import folder from "../assets/folder-icon.png";

export default function NoteDetails() {
  return (
    <div className="note-details">
      <div className="date">
        <div className="title">
          <img src={date} alt="date" />
          <p>Date</p>
        </div>
        <div className="creation-date">
          <p>1/1/2025</p>
        </div>
      </div>
      <div className="folder">
        <div className="title">
          <img src={folder} alt="folder" />
          <p>Folder</p>
        </div>
        <div className="folder-name">
          <p>Personal</p>
        </div>
      </div>
    </div>
  );
}
