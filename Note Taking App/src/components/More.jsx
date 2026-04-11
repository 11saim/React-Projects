import React, { useContext } from "react";
import trashIcon from "../assets/trash-icon.png";
import archivedIcon from "../assets/archived-icon.png";
import favoriteIcon from "../assets/favorite-icon.png";
import { FolderContext } from "../context/FolderContext";
import { NoteContext } from "../context/NoteContext";

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
  const { state: folderState, dispatch: folderDispatch } =
    useContext(FolderContext);
  const { dispatch: noteDispatch } = useContext(NoteContext);
  return (
    <div className="more-section py-4 text-[#a3a3a3]">
      <div className="px-3 py-2">
        <h4 className="text-sm font-semibold uppercase tracking-wide">More</h4>
      </div>

      <div className="space-y-1">
        {options.map((option) => {
          const isActive = folderState.activeFolder === option.title;

          return (
            <div
              key={option.title}
              onClick={() => {
                folderDispatch({
                  type: "SET_ACTIVE_FOLDER",
                  payload:
                    folderState.activeFolder === option.title
                      ? ""
                      : option.title,
                });
                noteDispatch({ type: "SET_ACTIVE_NOTE", payload: "" });
              }}
              className={`flex items-center space-x-3 p-3 cursor-pointer transition-colors duration-200
                ${isActive ? "bg-[#312EB5] text-white" : "hover:bg-[#232323]"}`}
            >
              <img src={option.icon} alt={option.title} width={20} />

              <span>{option.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
