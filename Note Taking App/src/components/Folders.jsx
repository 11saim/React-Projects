import React from "react";
import openFolderIcon from "../assets/open-folder-icon.png";
import closeFolderIcon from "../assets/close-folder-icon.png";
import addFolderIcon from "../assets/add-folder-icon.png";

export default function Folders() {
  return (
    <div className="folders-section py-3 text-[#a3a3a3]">
      <div className="head flex justify-between px-3 py-2">
        <div className="heading">
          <h4>Folders</h4>
        </div>
        <div className="icon">
          <img src={addFolderIcon} alt="add-folder" />
        </div>
      </div>
      <div className="folders">
        <div className="folder flex p-3 space-x-3 items-center bg-[#1f1f1f] text-white">
          <div className="folder-icon">
            <img
              src={openFolderIcon}
              alt="folder-icon"
              width={20}
              height={20}
            />
          </div>
          <div className="folder-title">Personal</div>
        </div>
        <div className="folder flex p-3 space-x-3 items-center">
          <div className="folder-icon">
            <img
              src={closeFolderIcon}
              alt="folder-icon"
              width={20}
              height={20}
            />
          </div>
          <div className="folder-title">Work</div>
        </div>
        <div className="folder flex p-3 space-x-3 items-center">
          <div className="folder-icon">
            <img
              src={closeFolderIcon}
              alt="folder-icon"
              width={20}
              height={20}
            />
          </div>
          <div className="folder-title">Travel</div>
        </div>
        <div className="folder flex p-3 space-x-3 items-center">
          <div className="folder-icon">
            <img
              src={closeFolderIcon}
              alt="folder-icon"
              width={20}
              height={20}
            />
          </div>
          <div className="folder-title">Events</div>
        </div>
        <div className="folder flex p-3 space-x-3 items-center">
          <div className="folder-icon">
            <img
              src={closeFolderIcon}
              alt="folder-icon"
              width={20}
              height={20}
            />
          </div>
          <div className="folder-title">Finances</div>
        </div>
      </div>
    </div>
  );
}
