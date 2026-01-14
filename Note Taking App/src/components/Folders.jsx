import React from "react";
import folderIcon from "../assets/folder-icon.png";
import addFolderIcon from "../assets/add-folder-icon.png";

export default function Folders() {
  return (
    <div className="folders-section">
      <div className="head">
        <div className="heading">
          <h4>Folders</h4>
        </div>
        <div className="icon">
          <img src={addFolderIcon} alt="add-folder" />
        </div>
      </div>
      <div className="folders">
        <div className="folder">
          <div className="folder-icon">
            <img src={folderIcon} alt="folder-icon" />
          </div>
          <div className="folder-title">Personal</div>
        </div>
        <div className="folder">
          <div className="folder-icon">
            <img src={folderIcon} alt="folder-icon" />
          </div>
          <div className="folder-title">Work</div>
        </div>
        <div className="folder">
          <div className="folder-icon">
            <img src={folderIcon} alt="folder-icon" />
          </div>
          <div className="folder-title">Travel</div>
        </div>
        <div className="folder">
          <div className="folder-icon">
            <img src={folderIcon} alt="folder-icon" />
          </div>
          <div className="folder-title">Events</div>
        </div>
        <div className="folder">
          <div className="folder-icon">
            <img src={folderIcon} alt="folder-icon" />
          </div>
          <div className="folder-title">Finances</div>
        </div>
      </div>
    </div>
  );
}
