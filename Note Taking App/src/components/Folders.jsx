import React, { useEffect, useRef, useState } from "react";
import openFolderIcon from "../assets/open-folder-icon.png";
import editIcon from "../assets/edit.png";
import whiteEditIcon from "../assets/whiteEditIcon.png";
import closeFolderIcon from "../assets/close-folder-icon.png";
import addFolderIcon from "../assets/add-folder-icon.png";
import Loader from "./Loader";

export default function Folders({ activeFolder, setActiveFolder }) {
  const [isModal, setIsModal] = useState(false);
  const inputRef = useRef(null);
  const [folders, setFolders] = useState(null);

  useEffect(() => {
    const fetchFolders = async () => {
      const response = await fetch("http://localhost:3000/api/folders/");
      const data = await response.json();
      setFolders([...data.data]);
    };

    fetchFolders();
  }, []);

  return (
    <>
      <div className="folders-section py-3 text-[#a3a3a3]">
        <div className="head flex justify-between px-3 py-2">
          <div className="heading">
            <h4>Folders</h4>
          </div>
          <div
            onClick={() => setIsModal(() => (folders === null ? false : true))}
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
                key={folder.name}
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
                  <span>{folder.name}</span>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <img
                    src={
                      activeFolder === folder.name ? whiteEditIcon : editIcon
                    }
                    alt="edit-icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {isModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm">
          <div className="relative w-96 mx-3 bg-[#181818] rounded-2xl shadow-xl border border-[#232323] p-5 sm:p-6">
            <div className="flex items-center justify-between border-b border-[#232323] pb-3">
              <h2 className="text-lg sm:text-xl font-semibold text-white">
                Folder Name:
              </h2>

              <button
                onClick={() => setIsModal(false)}
                className="text-gray-500 hover:text-white text-2xl font-bold transition-colors duration-200"
              >
                ×
              </button>
            </div>

            <div className="py-5">
              <input
                ref={inputRef}
                type="text"
                placeholder="Enter Here"
                className="w-full bg-[#232323] text-white px-4 py-3 rounded-lg 
                  outline-none focus:ring-2 focus:ring-blue-600 
                  transition-all duration-200"
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => {
                  console.log(inputRef.current.value);
                  setIsModal(false);
                }}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white 
                  hover:bg-blue-700 transition-colors duration-200"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
