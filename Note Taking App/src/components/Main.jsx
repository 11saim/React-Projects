import React, { useRef, useState } from "react";
import Modal from "./Modal";
import whiteEditIcon from "../assets/whiteEditIcon.png";
import deleteIcon from "../assets/trash-icon.png";
import unarchiveIcon from "../assets/unarchive.png";
import unfavoriteIcon from "../assets/filled-favorite.png";
import restoreIcon from "../assets/restore.png";

export default function Main({
  notes,
  activeNote,
  setActiveNote,
  setNotes,
  folder,
  activeFolder,
}) {
  const [isModal, setIsModal] = useState(false);
  const inputRef = useRef(null);
  const [modalProps, setModalProps] = useState({});

  const getDate = (timeStamp) => {
    const dateObj = new Date(parseInt(timeStamp));

    const formattedDate = `${dateObj.getDate()}/${
      dateObj.getMonth() + 1
    }/${dateObj.getFullYear()}`;

    return formattedDate;
  };

  const updateNote = async (id, body) => {
    if (!body) return;

    const response = await fetch(`http://localhost:3000/api/notes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (data.success) {
      if (
        body.status === "trash" ||
        body.status === "archived" ||
        body.isFavorite === true
      ) {
        setNotes({
          folder,
          notes: notes.filter((note) => note._id != id),
        });
        if (activeNote === id) {
          setActiveNote(false);
        }
      } else {
        setNotes({
          folder,
          notes: notes.map((note) => (note._id === id ? data.data : note)),
        });
      }
    }
  };

  return (
    <>
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
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className="actions flex space-x-2 items-center"
                        >
                          <div className="edit">
                            <img
                              onClick={() => {
                                setModalProps({
                                  title: "Update Note Title:",
                                  setIsModal,
                                  inputRef,
                                  btnText: "Update",
                                  handler: () =>
                                    updateNote(note._id, {
                                      title: inputRef.current.value,
                                    }),
                                });
                                setIsModal(true);
                              }}
                              src={whiteEditIcon}
                              alt="editIcon"
                              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                              width={20}
                              height={20}
                            />
                          </div>
                          <div
                            className="delete"
                            onClick={() =>
                              updateNote(note._id, { status: "trash" })
                            }
                          >
                            <img
                              src={
                                activeFolder === "Trash"
                                  ? restoreIcon
                                  : activeFolder === "Favorite"
                                    ? unfavoriteIcon
                                    : activeFolder === "Archived"
                                      ? unarchiveIcon
                                      : deleteIcon
                              }
                              alt="deleteIcon"
                              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                              width={20}
                              height={20}
                            />
                          </div>
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
                          {!note.plainText
                            ? "This note is empty..."
                            : note.plainText}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-[#a7a7a7] text-xl font-semibold text-center">
                  No Notes
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {isModal && <Modal {...modalProps} />}
    </>
  );
}
