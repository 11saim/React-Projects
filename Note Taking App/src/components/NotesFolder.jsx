import React, { useEffect, useState } from "react";
import Head from "./Head";
import Main from "./Main";
import Menu from "../assets/menu.png";

export default function NotesFolder() {
  const [isNotesFolder, setIsNotesFolder] = useState(window.innerWidth >= 640);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 640) {
        setIsNotesFolder(true);
      } else {
        setIsNotesFolder(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("reize", handleResize);
  }, []);

  return (
    <>
      {isNotesFolder && (
        <div className="NotesFolder fixed sm:static sm:h-1/2 z-50 max-h-screen sm:max-h-full overflow-auto xl:h-auto w-full xl:w-1/2 bg-[#1C1C1C] text-white px-4 py-7">
          <Head />
          <Main />
        </div>
      )}
      <div
        onClick={() => setIsNotesFolder(!isNotesFolder)}
        className="z-100 cursor-pointer fixed sm:hidden bg-amber-700 bottom-5 right-5 p-2 rounded-4xl"
      >
        <img src={Menu} alt="Menu" width={25} height={25} />
      </div>
    </>
  );
}
