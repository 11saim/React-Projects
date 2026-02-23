import Navbar from "./Navbar";
import SeacrhNote from "./SearchNote";
import Recents from "./Recents";
import Folders from "./Folders";
import More from "./More";
import Menu from "../assets/menu.png";
import { useState } from "react";

export default function Sidebar({
  isDesktop,
  activePanel,
  setActivePanel,
  activeNote,
  setActiveNote,
}) {
  const shouldOpen = isDesktop || activePanel === "sidebar";
  const [activeFolder, setActiveFolder] = useState("");

  return (
    <>
      {shouldOpen && (
        <div className="Sidebar fixed sm:static h-full sm:h-1/2 overflow-auto xl:h-auto w-full xl:w-1/2 bg-[#181818] text-white">
          <div>
            <Navbar />
            <SeacrhNote />
          </div>
          <div>
            <Recents
              activeFolder={activeFolder}
              setActiveFolder={setActiveFolder}
              activeNote={activeNote}
              setActiveNote={setActiveNote}
            />
            <Folders
              activeFolder={activeFolder}
              setActiveFolder={setActiveFolder}
            />
            <More
              activeFolder={activeFolder}
              setActiveFolder={setActiveFolder}
            />
          </div>
        </div>
      )}
      <div
        onClick={() =>
          setActivePanel((prev) => (prev === "sidebar" ? null : "sidebar"))
        }
        className="z-100 cursor-pointer fixed sm:hidden bg-[#4e4848] bottom-5 left-5 p-2 rounded-4xl"
      >
        <img src={Menu} alt="Menu" width={25} height={25} />
      </div>
    </>
  );
}
