import React from "react";

export default function Model({
  title,
  setIsModal,
  inputRef,
  btnText,
  handler,
}) {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm">
        <div className="relative w-96 mx-3 bg-[#181818] rounded-2xl shadow-xl border border-[#232323] p-5 sm:p-6">
          <div className="flex items-center justify-between border-b border-[#232323] pb-3">
            <h2 className="text-lg sm:text-xl font-semibold text-white">
              {title}
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
                handler();
                setIsModal(false);
              }}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white 
                  hover:bg-blue-700 transition-colors duration-200"
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
