import React, { useState } from "react";
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
  const [activeOption, setActiveOption] = useState("");

  return (
    <div className="more-section py-4 text-[#a3a3a3]">
      {/* Header */}
      <div className="px-3 py-2">
        <h4 className="text-sm font-semibold uppercase tracking-wide">More</h4>
      </div>

      {/* Options */}
      <div className="space-y-1">
        {options.map((option) => {
          const isActive = activeOption === option.title;

          return (
            <div
              key={option.title}
              onClick={() =>
                setActiveOption((prev) =>
                  option.title === prev ? "" : option.title,
                )
              }
              className={`flex items-center space-x-3 p-3 cursor-pointer transition-colors duration-200
                ${isActive ? "bg-[#312EB5] text-white" : "hover:bg-[#232323]"}`}
            >
              {/* Icon */}
              <img src={option.icon} alt={option.title} width={20} />

              {/* Title */}
              <span>{option.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
