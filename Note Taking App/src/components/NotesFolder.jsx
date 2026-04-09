import { useContext } from "react";
import Head from "./Head";
import Main from "./Main";
import folderIcon from "../assets/close-folder-icon.png";
import Menu from "../assets/menu.png";
import { useEffect } from "react";
import { fetchFolders } from "../utils/api/folders";
import { fetchNotes } from "../utils/api/notes";
import { FolderContext } from "../context/FolderContext";
import { NoteContext } from "../context/NoteContext";

export default function NotesFolder({
  isDesktop,
  activePanel,
  setActivePanel,
  activeNote,
  setActiveNote,
  activeFolder,
  notes,
  setNotes,
  setDeleteAlert,
  trashedFolders,
  setTrashedFolders,
  folders,
}) {
  const shouldOpen = isDesktop || activePanel === "notesfolder";
  const { state: folderState, dispatch: folderDispatch } =
    useContext(FolderContext);
  const { dispatch: noteDispatch } = useContext(NoteContext);

  useEffect(() => {
    const fetchData = async () => {
      if (!folderState.activeFolder || folderState.activeFolder === "Search")
        return;

      if (folderState.activeFolder === "Trash") {
        const foldersData = await fetchFolders("?trash=true");
        if (foldersData.success) {
          folderDispatch({
            action: "SET_TRASHED_FOLDERS",
            payload: [...foldersData.data],
          });
          // setTrashedFolders([...foldersData.data]);
        }
      }

      const filterMap = {
        Favorite: "?favorite=true",
        Archived: "?archived=true",
        Trash: "?trash=true",
      };

      const filter =
        filterMap[folderState.activeFolder] ??
        `folders/${folderState.activeFolder}`;
      const notesData = await fetchNotes(filter);
      noteDispatch({ action: "SET_NOTES", payload: notesData.data });
      // setNotes(notesData.data);
    };

    fetchData();
  }, [folderState.activeFolder, folderState.folders]);

  return (
    <>
      <div
        className={`z-90 fixed sm:static sm:h-1/2 h-full overflow-auto xl:h-auto w-full xl:w-1/2 bg-[#1C1C1C] text-white px-4 py-7 ${shouldOpen ? "" : "hidden"}`}
      >
        {!folderState.activeFolder ? (
          <div className="h-full flex flex-col justify-center items-center">
            <img src={folderIcon} alt="folder" width={60} height={60} />
            <p>Select a folder to View Notes</p>
          </div>
        ) : (
          <div>
            <Head
              folder={notes.folder}
              activeFolder={activeFolder}
              setNotes={setNotes}
            />
            <Main
              notes={notes.notes}
              folder={notes.folder}
              setNotes={setNotes}
              activeNote={activeNote}
              setActiveNote={setActiveNote}
              activeFolder={activeFolder}
              trashedFolders={trashedFolders}
              setTrashedFolders={setTrashedFolders}
              setDeleteAlert={setDeleteAlert}
            />
          </div>
        )}
      </div>

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
