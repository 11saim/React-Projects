import React, { useState } from "react";
import whiteEditIcon from "../assets/whiteEditIcon.png";

const folders = [
  {
    _id: 1,
    title: "My Goals for the Next Year",
    date: "31/12/2022",
    subtitle: "As the year comes to a ...",
  },
  {
    _id: 2,
    title: "Project Plan Q1",
    date: "01/01/2023",
    subtitle: "Plan for the first quarter ...",
  },
  {
    _id: 3,
    title: "Personal Journal",
    date: "15/02/2023",
    subtitle: "Daily thoughts and reflections ...",
  },
  {
    _id: 4,
    title: "My Goals for the Next Year",
    date: "31/12/2022",
    subtitle: "As the year comes to a ...",
  },
  {
    _id: 5,
    title: "Project Plan Q1",
    date: "01/01/2023",
    subtitle: "Plan for the first quarter ...",
  },
  {
    _id: 6,
    title: "Personal Journal",
    date: "15/02/2023",
    subtitle: "Daily thoughts and reflections ...",
  },
];

export default function FolderSection() {
  const [activeFolder, setActiveFolder] = useState(null);

  return (
    <div className="folder-section py-4">
      <div className="space-y-3">
        {folders.map((folder) => {
          const isActive = activeFolder === folder._id;

          return (
            <div
              key={folder._id}
              onClick={() => setActiveFolder(isActive ? null : folder._id)}
              className={`group folder w-full p-5 cursor-pointer transition-colors duration-200
                ${
                  isActive ? "bg-[#312EB5]" : "bg-[#232323] hover:bg-[#2a2a2a]"
                }`}
            >
              <div className="head flex items-center justify-between">
                <div
                  className={`title line-clamp-1 text-white transition-colors duration-200`}
                >
                  {folder.title}
                </div>
                <div className="edit">
                  <img
                    src={whiteEditIcon}
                    alt="editIcon"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="details flex items-center text-[13px] space-x-3 mt-2">
                <div
                  className={`date transition-colors duration-200 ${
                    isActive ? "text-white" : "text-[#7b7b7b]"
                  }`}
                >
                  {folder.date}
                </div>
                <div
                  className={`subtitle line-clamp-1 transition-colors duration-200 ${
                    isActive ? "text-white" : "text-[#a7a7a7]"
                  }`}
                >
                  {folder.subtitle}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
