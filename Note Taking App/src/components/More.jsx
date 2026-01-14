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
    <div className="more-section">
      <div className="head">
        <div className="heading">
          <h4>More</h4>
        </div>
      </div>
      <div className="options">
        {options.map((option) => {
          return (
            <div className="option">
              <div className="icon">
                <img src={option.icon} alt={option.title} />
              </div>
              <div className="title">{option.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
