import React from "react";
import addFolderIcon from "../assets/add-folder-icon.png";
import archivedIcon from "../assets/archived-icon.png";
import favoriteIcon from "../assets/favorite-icon.png";
import folderIcon from "../assets/folder-icon.png";
import logo from "../assets/logo.png";
import noteIcon from "../assets/note-icon.png";
import searchIcon from "../assets/search-icon.png";
import trashIcon from "../assets/trash-icon.png";

export default function Sidebar() {
  return (
    <div className="Sidebar bg-amber-700">
      <div className="Navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="search-bar">
          <img src={searchIcon} alt="search-icon" />
        </div>
      </div>
      <div className="add-note">
        <button>+ New Note</button>
      </div>
      <div className="recents-section">
        <div className="recents-head">
          <div className="recents-heading">
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
      <div className="folders-section">
        <div className="folders-head">
          <div className="folder-heading">
            <h4>Folders</h4>
          </div>
          <div className="add-folder-icon">
            <img src={addFolderIcon} alt="add-folder-icon" />
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
      <div className="more-section">
        <div className="more-head">
          <div className="more-heading">
            <h4>More</h4>
          </div>
        </div>
        <div className="options">
          <div className="favorites">
            <div className="favorites-icon">
              <img src={favoriteIcon} alt="favorite-icon" />
            </div>
            <div className="favorites-title">Favorite</div>
          </div>
          <div className="trash">
            <div className="trash-icon">
              <img src={trashIcon} alt="trash-icon" />
            </div>
            <div className="trash-title">Trash</div>
          </div>
          <div className="archived">
            <div className="archived-icon">
              <img src={archivedIcon} alt="archived-icon" />
            </div>
            <div className="archived-title">Archived</div>
          </div>
        </div>
      </div>
    </div>
  );
}
