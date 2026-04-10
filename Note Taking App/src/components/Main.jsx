import React, { useRef, useState, useContext } from "react";
import Modal from "./Modal";
import whiteEditIcon from "../assets/whiteEditIcon.png";
import deleteIcon from "../assets/trash-icon.png";
import unarchiveIcon from "../assets/unarchive.png";
import unfavoriteIcon from "../assets/filled-favorite.png";
import restoreIcon from "../assets/restore.png";
import closeFolderIcon from "../assets/close-folder-icon.png";
import { updateNote, deleteNote } from "../utils/api/notes";
import { updateFolder, deleteFolder } from "../utils/api/folders";
import { getDate } from "../utils/getDate";
import { FolderContext } from "../context/FolderContext";
import { NoteContext } from "../context/NoteContext";

export default function Main({
  notes,
  activeNote,
  setActiveNote,
  setNotes,
  folder,
  activeFolder,
  trashedFolders,
  setTrashedFolders,
  setDeleteAlert,
}) {
  const [isModal, setIsModal] = useState(false);
  const inputRef = useRef(null);
  const [modalProps, setModalProps] = useState({});
  const { state: folderState, dispatch: folderDispatch } =
    useContext(FolderContext);
  const { state: noteState, dispatch: noteDispatch } = useContext(NoteContext);

  const handleNoteUpdate = (noteId, data, body) => {
    if (data.success) {
      if (
        body.status === "active" ||
        body.status === "trash" ||
        body.status === "archived" ||
        body.isFavourite === false
      ) {
        // setNotes({
        //   folder,
        //   notes: notes.filter((note) => note._id != noteId),
        // });
        noteDispatch({ type: "REMOVE_NOTE", payload: noteId });
        if (folderState.activeNote === noteId) {
          // setActiveNote(false);
          noteDispatch({ type: "SET_ACTIVE_NOTE", payload: false });
        }
      } else {
        // setNotes({
        //   folder,
        //   notes: notes.map((note) => (note._id === noteId ? data.data : note)),
        // });
        noteDispatch({
          type: "UPDATE_NOTE",
          payload: { id: noteId, data: data.data },
        });
      }
    }
  };

  const handleFolderUpdate = async (body, data, folderId) => {
    if (data.success) {
      if (body.name) {
        // setTrashedFolders((prev) =>
        //   prev.map((folder) => (folder._id === folderId ? data.data : folder)),
        // );
        folderDispatch({
          type: "UPDATE_TRASHED_FOLDERS",
          payload: { id: folderId, data: data.data },
        });
      } else if (body.status) {
        // setTrashedFolders((prev) =>
        //   prev.filter((folder) => folder._id !== folderId),
        // );
        folderDispatch({ type: "REMOVE_TRASHED_FOLDERS", payload: folderId });
      }
    }
  };

  return (
    <>
      <div className="main">
        <div className="folders flex flex-col items-center">
          <div className="w-full folder-section py-4">
            <div className="w-full space-y-3">
              {folderState.activeFolder === "Trash" && <p>Folders</p>}
              {folderState.activeFolder === "Trash" &&
                (folderState.trashedFolders.length != 0 ? (
                  folderState.trashedFolders.map((folder) => {
                    return (
                      <div
                        key={folder._id}
                        className={`group flex p-3 justify-between items-center 
                                    text-white cursor-pointer transition-colors duration-200 hover:bg-[#2a2a2a] bg-[#232323]`}
                      >
                        <div className="flex items-center space-x-3">
                          <img
                            src={closeFolderIcon}
                            alt="folder-icon"
                            width={20}
                            height={20}
                          />
                          <span className="line-clamp-1 pr-5">
                            {folder.name}
                          </span>
                        </div>

                        <div
                          className="flex justify-center items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <img
                            src={whiteEditIcon}
                            alt="edit-icon"
                            onClick={() => {
                              setModalProps({
                                title: "Update Folder Name:",
                                setIsModal,
                                inputRef,
                                btnText: "Update",
                                handler: async () => {
                                  const updatedFolderName =
                                    inputRef.current.value;

                                  if (!updatedFolderName) return;

                                  const folderId = folder._id;
                                  const body = {
                                    name: updatedFolderName,
                                  };
                                  const data = await updateFolder(
                                    folderId,
                                    body,
                                  );
                                  handleFolderUpdate(body, data, folder._id);
                                },
                              });
                              setIsModal(true);
                            }}
                            width={20}
                            height={20}
                          />
                          <img
                            src={deleteIcon}
                            alt="delete-icon"
                            onClick={() =>
                              folderState.activeFolder !== "Trash"
                                ? // setDeleteAlert({
                                  //     id: folder._id,
                                  //   })
                                  folderDispatch({
                                    type: "SET_DELETE_ALERT",
                                    payload: { id: folder._id },
                                  })
                                : async () => {
                                    const folderId = folder._id;
                                    const data = await deleteFolder(folderId);
                                    if (data.success) {
                                      // setTrashedFolders((prev) =>
                                      //   prev.filter(
                                      //     (folder) => folder._id !== folderId,
                                      //   ),
                                      // );
                                      folderDispatch({
                                        type: "REMOVE_TRASHED_FOLDERS",
                                        payload: folderId,
                                      });
                                    }
                                  }
                            }
                            width={20}
                            height={20}
                          />
                          <img
                            src={
                              folderState.activeFolder === "Trash"
                                ? restoreIcon
                                : folderState.activeFolder === "Favorite"
                                  ? unfavoriteIcon
                                  : folderState.activeFolder === "Archived" &&
                                    unarchiveIcon
                            }
                            onClick={async () => {
                              const folderId = folder._id;
                              const body = {
                                status: "active",
                              };
                              const data = await updateFolder(folderId, body);
                              handleFolderUpdate(body, data, folder._id);
                            }}
                            alt="Icon"
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            width={20}
                            height={20}
                          />
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-[#a7a7a7] text-xl font-semibold text-center">
                    No Folders
                  </p>
                ))}
              {folderState.activeFolder === "Trash" && <p>Notes</p>}
              {noteState.notes.notes.length != 0 ? (
                noteState.notes.notes.map((note) => {
                  const isActive = noteState.activeNote === note._id;

                  return (
                    <div
                      key={note._id}
                      onClick={() => {
                        // setActiveNote(isActive ? null : note._id)
                        noteDispatch({
                          type: "SET_ACTIVE_NOTE",
                          payload: isActive ? null : note._id,
                        });
                      }}
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
                                  handler: () => {
                                    const update = async () => {
                                      const noteId = note._id;
                                      const body = {
                                        title: inputRef.current.value,
                                      };
                                      const data = await updateNote(
                                        noteId,
                                        body,
                                      );
                                      handleNoteUpdate(noteId, data, body);
                                    };
                                    update();
                                  },
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
                              folderState.activeFolder === "Trash"
                                ? async () => {
                                    const noteId = note._id;
                                    const data = await deleteNote(noteId);
                                    if (data.success) {
                                      // setNotes({
                                      //   folder,
                                      //   notes: notes.filter(
                                      //     (note) => note._id != noteId,
                                      //   ),
                                      // });
                                      noteDispatch({
                                        type: "REMOVE_NOTE",
                                        payload: noteId,
                                      });
                                    }
                                  }
                                : async () => {
                                    const noteId = note._id;
                                    const body = { status: "trash" };
                                    const data = await updateNote(noteId, body);
                                    handleNoteUpdate(noteId, data, body);
                                  }
                            }
                          >
                            <img
                              src={deleteIcon}
                              alt="deleteIcon"
                              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                              width={20}
                              height={20}
                            />
                          </div>
                          {(folderState.activeFolder === "Trash" ||
                            folderState.activeFolder === "Archived" ||
                            folderState.activeFolder === "Favorite") && (
                            <div
                              className="extraIcon"
                              onClick={() => {
                                folderState.activeFolder === "Favorite"
                                  ? async () => {
                                      const noteId = note._id;
                                      const body = { isFavourite: false };
                                      const data = await updateNote(
                                        noteId,
                                        body,
                                      );
                                      handleNoteUpdate(noteId, data, body);
                                    }
                                  : async () => {
                                      const noteId = note._id;
                                      const body = { status: "active" };
                                      const data = await updateNote(
                                        noteId,
                                        body,
                                      );
                                      handleNoteUpdate(noteId, data, body);
                                    };
                              }}
                            >
                              <img
                                src={
                                  folderState.activeFolder === "Trash"
                                    ? restoreIcon
                                    : folderState.activeFolder === "Favorite"
                                      ? unfavoriteIcon
                                      : folderState.activeFolder ===
                                          "Archived" && unarchiveIcon
                                }
                                alt="Icon"
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                width={20}
                                height={20}
                              />
                            </div>
                          )}
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
