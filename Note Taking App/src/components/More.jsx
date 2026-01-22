import React from "react";
import trashIcon from "../assets/trash-icon.png";
import archivedIcon from "../assets/archived-icon.png";
import favoriteIcon from "../assets/favorite-icon.png";

const options = [
  {
    title: "Favorite",
    icon: favoriteIcon,
  },
  {
    title: "Trash",
    icon: trashIcon,
  },
  {
    title: "Archived",
    icon: archivedIcon,
  },
];

export default function More() {
  return (
    <div className="more-section py-3 text-[#a3a3a3]">
      <div className="head px-3 py-2">
        <div className="heading">
          <h4>More</h4>
        </div>
      </div>
      <div className="options">
        {options.map((option) => {
          return (
            <div className="option flex p-3 space-x-3 items-center">
              <div className="icon">
                <img src={option.icon} alt={option.title} width={20} />
              </div>
              <div className="title">{option.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
