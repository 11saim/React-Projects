import React from "react";
import whiteEditIcon from "../assets/whiteEditIcon.png";

export default function Main({ notes, activeNote, setActiveNote }) {
  const getDate = (timeStamp) => {
    const dateObj = new Date(parseInt(timeStamp));

    const formattedDate = `${dateObj.getDate()}/${
      dateObj.getMonth() + 1
    }/${dateObj.getFullYear()}`;

    return formattedDate;
  };

  return (
    <div className="main">
      <div className="folders flex flex-col items-center">
        <div className="w-full folder-section py-4">
          <div className="w-full space-y-3">
            {notes.length != 0 ? (
              notes.map((note) => {
                const isActive = activeNote === note._id;

                return (
                  <div
                    key={note._id}
                    onClick={() => setActiveNote(isActive ? null : note._id)}
                    className={`group folder w-full p-5 cursor-pointer transition-colors duration-200
                    ${
                      isActive
                        ? "bg-[#312EB5]"
                        : "bg-[#232323] hover:bg-[#2a2a2a]"
                    }`}
                  >
                    <div className="head flex items-center justify-between">
                      <div
                        className={`title line-clamp-1 text-white transition-colors duration-200`}
                      >
                        {note.title}
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
                        {getDate(note.createdAt)}
                      </div>
                      <div
                        className={`subtitle line-clamp-1 transition-colors duration-200 ${
                          isActive ? "text-white" : "text-[#a7a7a7]"
                        }`}
                      >
                        {note.content === ""
                          ? "This note is empty..."
                          : note.content}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-[#a7a7a7] text-xl font-semibold text-center">No Notes</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
