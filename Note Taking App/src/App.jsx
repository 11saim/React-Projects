import SideBar from "./components/SideBar";
import NotesFolder from "./components/NotesFolder";
import NoteViewer from "./components/NoteViewer";
import { useEffect, useState } from "react";
import FolderProvider from "./context/FolderContext";
import NoteProvider from "./context/NoteContext";

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 640);
  const [activePanel, setActivePanel] = useState(null);

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
    <FolderProvider>
      <NoteProvider>
        <div className="flex flex-col sm:flex-row w-full max-h-screen xl:max-h-full relative">
          <div className="flex flex-col w-full sm:w-[40%] xl:flex-row h-auto relative">
            <SideBar
              isDesktop={isDesktop}
              activePanel={activePanel}
              setActivePanel={setActivePanel}
            />
            <NotesFolder
              isDesktop={isDesktop}
              activePanel={activePanel}
              setActivePanel={setActivePanel}
            />
          </div>
          <NoteViewer />
        </div>
      </NoteProvider>
    </FolderProvider>
  );
}

export default App;
