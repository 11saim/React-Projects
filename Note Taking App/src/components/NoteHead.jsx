import React, { useState } from "react";
import closedOptions from "../assets/closed-options.png";
import favoriteIcon from "../assets/favorite-icon.png";
import archivedIcon from "../assets/archived-icon.png";
import trashIcon from "../assets/trash-icon.png";
import whiteEditIcon from "../assets/whiteEditIcon.png";

export default function NoteHead() {
  const [isModel, setIsModel] = useState(false);

  return (
    <div className="note-head flex justify-between items-center">
      <div className="note-title flex items-center">
        <p className="text-2xl lg:text-4xl line-clamp-1">
          Reflection on the Month of June
        </p>
        <div className="edit mx-2 cursor-pointer">
          <img src={whiteEditIcon} alt="edit-icon" width={30} height={30} />
        </div>
      </div>

      <div className="options">
        <img
          onClick={() => setIsModel(!isModel)}
          src={closedOptions}
          alt="closed-options"
          width={40}
          height={40}
          className="cursor-pointer"
        />

        {isModel && (
          <div className="options-modal z-50 bg-[#333333] p-4 rounded-md absolute top-13 right-1 w-48 space-y-5">
            <div className="top-options space-y-4 border-b-2 border-b-[#3d3d3d]">
              <div className="add-to-favorite flex space-x-2 cursor-pointer">
                <img
                  src={favoriteIcon}
                  alt="favorite-icon"
                  width={25}
                  height={25}
                />
                <p>Add to Favorites</p>
              </div>
              <div className="archived flex space-x-2 mb-2 cursor-pointer">
                <img
                  src={archivedIcon}
                  alt="archived-icon"
                  width={25}
                  height={25}
                />
                <p>Archived</p>
              </div>
            </div>
            <div className="bottom-options">
              <div className="delete flex space-x-2 cursor-pointer">
                <img src={trashIcon} alt="trash-icon" width={25} height={25} />
                <p>Delete</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
