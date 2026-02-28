import React, { useEffect, useRef, useState } from "react";
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

export default function Folders({ activeFolder, setActiveFolder }) {
  const [isModal, setIsModal] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const inputRef = useRef(null);
  const [folders, setFolders] = useState(null);
  const [deleteAlert, setDeleteAlert] = useState(null);

  useEffect(() => {
    const fetchFolders = async () => {
      const response = await fetch("http://localhost:3000/api/folders/");
      const data = await response.json();
      setFolders([...data.data]);
    };

    fetchFolders();
  }, []);

  const handleAddFolder = async () => {
    const folderName = inputRef.current.value;

    if (!folderName) return;

    const response = await fetch("http://localhost:3000/api/folders/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: folderName }),
    });

    const data = await response.json();
    if (data.success) {
      setFolders((prev) => [...prev, data.data]);
    }
  };

  const handleDeleteFolder = async (id, name) => {
    const response = await fetch(`http://localhost:3000/api/folders/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();
    if (data.success) {
      setFolders((prev) => prev.filter((folder) => folder._id != id));
      setActiveFolder((prev) => (prev === name ? "" : prev));
    }
  };

  const handleUpdateFolder = async (id) => {
    const updatedFolderName = inputRef.current.value;

    if (!updatedFolderName) return;

    const response = await fetch(`http://localhost:3000/api/folders/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: updatedFolderName }),
    });

    const data = await response.json();
    if (data.success) {
      setFolders((prev) =>
        prev.map((folder) =>
          folder._id === id ? { ...folder, name: updatedFolderName } : folder,
        ),
      );
    }
  };

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
                folders === null
                  ? {}
                  : {
                      title: "Folder Name:",
                      setIsModal,
                      inputRef,
                      btnText: "Add",
                      handler: () => handleAddFolder(),
                    },
              );
              setIsModal(() => (folders === null ? false : true));
            }}
            className="icon cursor-pointer"
          >
            <img src={addFolderIcon} alt="add-folder" />
          </div>
        </div>

        <div className="folders">
          {folders === null ? (
            <Loader />
          ) : (
            folders.map((folder) => (
              <div
                key={folder._id}
                onClick={() =>
                  setActiveFolder((prev) =>
                    prev === folder.name ? "" : folder.name,
                  )
                }
                className={`group flex p-3 justify-between items-center 
                text-white cursor-pointer transition-colors duration-200
                ${
                  activeFolder === folder.name
                    ? "bg-[#312EB5]"
                    : "hover:bg-[#2a2a2a]"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={
                      activeFolder === folder.name
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
                      activeFolder === folder.name ? whiteEditIcon : editIcon
                    }
                    alt="edit-icon"
                    onClick={() => {
                      setModalProps({
                        title: "Update Folder Name:",
                        setIsModal,
                        inputRef,
                        btnText: "Update",
                        handler: () => handleUpdateFolder(folder._id),
                      });
                      setIsModal(true);
                    }}
                    width={20}
                    height={20}
                  />
                  <img
                    src={
                      activeFolder === folder.name
                        ? whiteDeleteIcon
                        : deleteIcon
                    }
                    alt="edit-icon"
                    onClick={() =>
                      setDeleteAlert({
                        id: folder._id,
                        name: folder.name,
                      })
                    }
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {isModal && <Modal {...modalProps} />}
      {deleteAlert && (
        <DeleteModal
          setDeleteAlert={setDeleteAlert}
          handler={() => handleDeleteFolder(deleteAlert.id, deleteAlert.name)}
        />
      )}
    </>
  );
}
