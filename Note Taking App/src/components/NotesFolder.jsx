import React from "react";
import Head from "./Head";
import Main from "./Main";
import Menu from "../assets/menu.png";

export default function NotesFolder() {
  return (
    <>
      <div className="NotesFolder hidden sm:block sm:h-1/2 z-50 max-h-screen sm:max-h-full overflow-auto  xl:h-auto w-full xl:w-1/2 bg-[#1C1C1C] text-white px-4 py-7">
        <Head />
        <Main />
      </div>
      <div className="cursor-pointer fixed sm:hidden bg-amber-700 bottom-5 right-5 p-2 rounded-4xl">
        <img src={Menu} alt="Menu" width={25} height={25} />
      </div>
    </>
  );
}
