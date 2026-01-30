import React from "react";
import Head from "./Head";
import Main from "./Main";

export default function NotesFolder() {
  return (
    <div className="NotesFolder h-50 sm:h-1/2 xl:h-auto w-full xl:w-1/2 bg-[#1C1C1C] text-white px-4 py-7">
      <Head />
      <Main />
    </div>
  );
}
