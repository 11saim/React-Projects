import React from "react";
import { useState, useRef } from "react";
import addIcon from "../assets/plus.png";

export default function Head() {
  const [isModal, setIsModal] = useState(false);
  const inputRef = useRef(null);
  return (
    <>
      <div className="head flex items-center justify-between">
        <div className="heading">
          <p className="text-2xl">Personal</p>
        </div>
        <div
          onClick={() => setIsModal(!isModal)}
          className="add-note cursor-pointer"
        >
          <img src={addIcon} alt="add-icon" width={25} height={25} />
        </div>
      </div>
      {isModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm">
          <div className="relative w-96 mx-3 bg-[#181818] rounded-2xl shadow-xl border border-[#232323] p-5 sm:p-6">
            <div className="flex items-center justify-between border-b border-[#232323] pb-3">
              <h2 className="text-lg sm:text-xl font-semibold text-white">
                Note Title:
              </h2>

              <button
                onClick={() => setIsModal(false)}
                aria-label="Close"
                className="text-gray-500 hover:text-white text-2xl font-bold transition-colors duration-200"
              >
                ×
              </button>
            </div>
            <div className="py-5">
              <input
                ref={inputRef}
                type="text"
                name="foldername"
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
