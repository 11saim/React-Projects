import React, { useEffect, useRef, useState } from "react";
import openFolderIcon from "../assets/open-folder-icon.png";
import closeFolderIcon from "../assets/close-folder-icon.png";
import addFolderIcon from "../assets/add-folder-icon.png";

export default function Folders() {
  const [isModal, setIsModal] = useState(false);
  const inputRef = useRef(null);
  return (
    <>
      <div className="folders-section py-3 text-[#a3a3a3]">
        <div className="head flex justify-between px-3 py-2">
          <div className="heading">
            <h4>Folders</h4>
          </div>
          <div
            onClick={() => setIsModal(true)}
            className="icon hover:scale-120 transition-all cursor-pointer"
          >
            <img src={addFolderIcon} alt="add-folder" />
          </div>
        </div>
        <div className="folders">
          <div className="folder flex p-3 space-x-3 items-center bg-[#1f1f1f] text-white">
            <div className="folder-icon">
              <img
                src={openFolderIcon}
                alt="folder-icon"
                width={20}
                height={20}
              />
            </div>
            <div className="folder-title">Personal</div>
          </div>
          <div className="folder flex p-3 space-x-3 items-center hover:bg-[#1f1f1f]">
            <div className="folder-icon">
              <img
                src={closeFolderIcon}
                alt="folder-icon"
                width={20}
                height={20}
              />
            </div>
            <div className="folder-title">Work</div>
          </div>
        </div>
      </div>
      {isModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/10">
          <div className="relative w-96 bg-[#181818] p-3 sm:p-4 rounded-2xl mx-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Folder Name:</h2>

              <button
                className="text-gray-500 cursor-pointer text-2xl font-bold"
                aria-label="Close"
                onClick={() => setIsModal(false)}
              >
                ×
              </button>
            </div>

            <div className="py-4">
              <input
                className="bg-[#232323] w-full px-5 py-3 outline-0"
                type="text"
                name="foldername"
                placeholder="Enter Here"
                ref={inputRef}
              />
            </div>

            <div className="w-full flex justify-end">
              <button
                onClick={() => {
                  console.log(inputRef.current.value);
                  setIsModal(false);
                }}
                className="px-2 py-1 sm:px-4 sm:py-2 rounded bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
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
