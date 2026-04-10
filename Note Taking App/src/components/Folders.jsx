import React, { useEffect, useRef, useState, useContext } from "react";
import openFolderIcon from "../assets/open-folder-icon.png";
import editIcon from "../assets/edit.png";
import whiteEditIcon from "../assets/whiteEditIcon.png";
import closeFolderIcon from "../assets/close-folder-icon.png";
import addFolderIcon from "../assets/add-folder-icon.png";
import deleteIcon from "../assets/grey-trash-icon.png";
import whiteDeleteIcon from "../assets/trash-icon.png";
import Loader from "./Loader";
import Modal from "../components/Modal";
import DeleteModal from "../components/DeleteModal";
import { fetchFolders, addFolder, updateFolder } from "../utils/api/folders";
import { FolderContext } from "../context/FolderContext";
import { NoteContext } from "../context/NoteContext";

export default function Folders({
  activeFolder,
  setActiveFolder,
  setActiveNote,
  folders,
  setFolders,
  deleteAlert,
  setDeleteAlert,
  trashedFolders,
}) {
  const [isModal, setIsModal] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const inputRef = useRef(null);
  const { state: folderState, dispatch: folderDispatch } =
    useContext(FolderContext);
  const { dispatch: noteDispatch } = useContext(NoteContext);

  const handleAddFolder = async () => {
    const folderName = inputRef.current.value;
    if (!folderName) return;

    const data = await addFolder({
      name: folderName,
    });

    if (data.success) {
      // setFolders((prev) => [...prev, data.data]);
      folderDispatch({ type: "ADD_FOLDER", payload: data.data });
    }
  };

  const handleFolderDelete = async () => {
    const data = await updateFolder(folderState.deleteAlert.id, {
      status: "trash",
    });
    if (!data.success) return;

    // setFolders((prev) =>
    //   prev.filter((folder) => folder._id !== deleteAlert.id),
    // );
    folderDispatch({
      type: "REMOVE_FOLDER",
      payload: folderState.deleteAlert.id,
    });
    if (folderState.activeFolder === folderState.deleteAlert.id) {
      // setActiveFolder("");
      // setActiveNote(null);
      folderDispatch({ type: "SET_ACTIVE_FOLDER", payload: "" });
      noteDispatch({ type: "SET_ACTIVE_NOTE", payload: "" });
    }
  };

  const handleFolderRename = async (id) => {
    const updatedFolderName = inputRef.current.value;
    if (!updatedFolderName) return;

    const data = await updateFolder(id, { name: updatedFolderName });
    if (!data.success) return;

    // setFolders((prev) =>
    //   prev.map((folder) => (folder._id === id ? data.data : folder)),
    // );
    folderDispatch({ type: "UPDATE_FOLDER", payload: { id, data: data.data } });
  };

  useEffect(() => {
    const getFolders = async () => {
      const data = await fetchFolders("?active=true");
      if (data.success) {
        // setFolders([...data.data]);
        folderDispatch({ type: "SET_FOLDERS", payload: data.data });
      }
    };
    getFolders();
  }, [folderState.trashedFolders]);

  return (
    <>
      <div className="folders-section py-3 text-[#a3a3a3]">
        <div className="head flex justify-between px-3 py-2">
          <div className="heading">
            <h4>Folders</h4>
          </div>
          <div
            onClick={() => {
              setModalProps(() =>
                !folderState.folders.length
                  ? {}
                  : {
                      title: "Folder Name:",
                      setIsModal,
                      inputRef,
                      btnText: "Add",
                      handler: handleAddFolder,
                    },
              );
              setIsModal(() => (folderState.folders.length > 0 ? false : true));
            }}
            className="icon cursor-pointer"
          >
            <img src={addFolderIcon} alt="add-folder" />
          </div>
        </div>

        <div className="folders">
          {folderState.folders.length < 1 ? (
            <Loader />
          ) : folderState.folders.length > 0 ? (
            folderState.folders.map((folder) => (
              <div
                key={folder._id}
                onClick={() => {
                  // setActiveFolder((prev) =>
                  //   prev === folder._id ? "" : folder._id,
                  // );
                  // setActiveNote(null);
                  folderDispatch({
                    type: "SET_ACTIVE_FOLDER",
                    payload:
                      folderState.activeFolder === folder._id ? "" : folder._id,
                  });
                  noteDispatch({ type: "SET_ACTIVE_NOTE", payload: "" });
                }}
                className={`group flex p-3 justify-between items-center 
                text-white cursor-pointer transition-colors duration-200
                ${
                  folderState.activeFolder === folder._id
                    ? "bg-[#312EB5]"
                    : "hover:bg-[#2a2a2a]"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={
                      folderState.activeFolder === folder._id
                        ? openFolderIcon
                        : closeFolderIcon
                    }
                    alt="folder-icon"
                    width={20}
                    height={20}
                  />
                  <span className="line-clamp-1 pr-5">{folder.name}</span>
                </div>

                <div
                  className="flex justify-center items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={
                      folderState.activeFolder === folder._id
                        ? whiteEditIcon
                        : editIcon
                    }
                    alt="edit-icon"
                    onClick={() => {
                      setModalProps({
                        title: "Update Folder Name:",
                        setIsModal,
                        inputRef,
                        btnText: "Update",
                        handler: handleFolderRename(folder._id),
                      });
                      setIsModal(true);
                    }}
                    width={20}
                    height={20}
                  />
                  <img
                    src={
                      folderState.activeFolder === folder._id
                        ? whiteDeleteIcon
                        : deleteIcon
                    }
                    alt="delete-icon"
                    onClick={() =>
                      // setDeleteAlert({
                      //   id: folder._id,
                      // })
                      folderDispatch({
                        type: "SET_DELETE_ALERT",
                        payload: { id: folder._id },
                      })
                    }
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            ))
          ) : (
            <p className="text-lg font-semibold text-center">No Folders</p>
          )}
        </div>
      </div>

      {isModal && <Modal {...modalProps} />}
      {folderState.deleteAlert && (
        <DeleteModal
          setDeleteAlert={() =>
            folderDispatch({ type: "SET_DELETE_ALERT", payload: null })
          }
          handler={handleFolderDelete}
        />
      )}
    </>
  );
}
