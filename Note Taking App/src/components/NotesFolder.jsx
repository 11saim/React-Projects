import Head from "./Head";
import Main from "./Main";
import folderIcon from "../assets/close-folder-icon.png";
import Menu from "../assets/menu.png";
import { useEffect, useState } from "react";

export default function NotesFolder({
  isDesktop,
  activePanel,
  setActivePanel,
  activeNote,
  setActiveNote,
  activeFolder,
}) {
  const shouldOpen = isDesktop || activePanel === "notesfolder";
  const [notes, setNotes] = useState({
    folder: "",
    notes: [],
  });

  useEffect(() => {
    if (!activeFolder) return;

    let API_URL = null;
    if (activeFolder === "Favorite") {
      API_URL = "http://localhost:3000/api/notes/?favorite=true";
    } else if (activeFolder === "Archived") {
      API_URL = "http://localhost:3000/api/notes/?archived=true";
    } else if (activeFolder === "Trash") {
      API_URL = "http://localhost:3000/api/notes/?trash=true";
    } else {
      API_URL = `http://localhost:3000/api/notes/folders/${activeFolder}`;
    }

    const fetchNotes = async (URL) => {
      const response = await fetch(URL);
      const data = await response.json();
      setNotes(data.data);
    };

    fetchNotes(API_URL);
  }, [activeFolder]);

  return (
    <>
      {shouldOpen &&
        (!activeFolder ? (
          <div className="fixed sm:static sm:h-1/2 h-full overflow-auto flex flex-col justify-center items-center xl:h-auto w-full xl:w-1/2 bg-[#1C1C1C] text-white px-4 py-7">
            <img src={folderIcon} alt="folder" width={60} height={60} />
            <p>Select a folder to View Notes</p>
          </div>
        ) : (
          <div className="NotesFolder fixed sm:static sm:h-1/2 h-full overflow-auto xl:h-auto w-full xl:w-1/2 bg-[#1C1C1C] text-white px-4 py-7">
            <Head
              folder={notes.folder}
              activeFolder={activeFolder}
              setNotes={setNotes}
            />
            <Main
              notes={notes.notes}
              activeNote={activeNote}
              setActiveNote={setActiveNote}
            />
          </div>
        ))}

      <div
        onClick={() =>
          setActivePanel((prev) =>
            prev === "notesfolder" ? null : "notesfolder",
          )
        }
        className="z-100 cursor-pointer fixed sm:hidden bg-[#4e4848] bottom-5 right-5 p-2 rounded-4xl"
      >
        <img src={Menu} alt="Menu" width={25} height={25} />
      </div>
    </>
  );
}
