import React from "react";
import Head from "./Head";
import Main from "./Main";

export default function NotesFolder() {
  return (
    <div className="NotesFolder w-1/5 bg-[#1C1C1C] text-white px-4 py-7">
      <Head />
      <Main />
    </div>
  );
}
