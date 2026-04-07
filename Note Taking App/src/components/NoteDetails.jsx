import React from "react";
import dateIcon from "../assets/date.png";
import folderIcon from "../assets/close-folder-icon.png";
import { getDate } from "../utils/getDate";

export default function NoteDetails({ date, folder }) {
  return (
    <div className="note-details">
      <div className="date flex pt-7 pb-4 border-b-2 border-b-[#2f2f2f] space-x-30 md:space-x-32">
        <div className="title flex space-x-7">
          <img src={dateIcon} alt="date" width={25} height={25} />
          <p className="text-[#a3a3a3]">Date</p>
        </div>
        <div className="creation-date">
          <p className="underline">{date ? getDate(date) : "Loading..."}</p>
        </div>
      </div>
      <div className="folder flex pt-4 pb-7 space-x-28 md:space-x-30">
        <div className="title flex space-x-7">
          <img src={folderIcon} alt="folder" width={25} height={25} />
          <p className="text-[#a3a3a3]">Folder</p>
        </div>
        <div className="folder-name">
          <p className="underline">{folder ? folder.name : "Loading..."}</p>
        </div>
      </div>
    </div>
  );
}
