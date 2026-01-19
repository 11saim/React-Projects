import React from "react";
import date from "../assets/date.png";
import folder from "../assets/close-folder-icon.png";

export default function NoteDetails() {
  return (
    <div className="note-details">
      <div className="date flex pt-7 pb-4 border-b-2 border-b-[#2f2f2f]">
        <div className="title w-1/5 flex space-x-7">
          <img src={date} alt="date" width={25} height={25} />
          <p className="text-[#a3a3a3]">Date</p>
        </div>
        <div className="creation-date">
          <p className="underline">1/1/2025</p>
        </div>
      </div>
      <div className="folder flex pt-4 pb-7">
        <div className="title w-1/5 flex space-x-7">
          <img src={folder} alt="folder" width={25} height={25} />
          <p className="text-[#a3a3a3]">Folder</p>
        </div>
        <div className="folder-name">
          <p className="underline">Personal</p>
        </div>
      </div>
    </div>
  );
}
