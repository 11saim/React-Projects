import SideBar from "./components/SideBar";
import NotesFolder from "./components/NotesFolder";
import NoteViewer from "./components/NoteViewer";
import { useEffect, useState } from "react";

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 640);
  const [activePanel, setActivePanel] = useState(null);
  const [activeNote, setActiveNote] = useState("");
  const [activeFolder, setActiveFolder] = useState("");

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 640);
      if (window.innerHeight >= 640) {
        setActivePanel(null);
      }
    }
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row w-full max-h-screen xl:max-h-full relative">
      <div className="flex flex-col w-full sm:w-[40%] xl:flex-row h-auto relative">
        <SideBar
          isDesktop={isDesktop}
          activePanel={activePanel}
          setActivePanel={setActivePanel}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
          activeFolder={activeFolder}
          setActiveFolder={setActiveFolder}
        />
        <NotesFolder
          isDesktop={isDesktop}
          activePanel={activePanel}
          setActivePanel={setActivePanel}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
          activeFolder={activeFolder}
        />
      </div>
      <NoteViewer activeNote={activeNote} />
    </div>
  );
}

export default App;
