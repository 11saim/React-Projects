import React from "react";

export default function Button({ setIsStart }) {
  return (
    <div
      onClick={() => setIsStart(false)}
      className="relative w-40 mx-auto mt-5 xs:mt-12 cursor-pointer text-xl text-center"
    >
      <div className="absolute w-full h-full bg-green-700 rounded-2xl top-1 left-0 z-10"></div>
      <div className="relative z-20 bg-green-400 text-white p-4 rounded-2xl font-bold">
        Next
      </div>
    </div>
  );
}
