import SideBar from "./components/SideBar";
import NotesFolder from "./components/NotesFolder";
import NoteViewer from "./components/NoteViewer";

function App() {
  return (
    <div className="flex flex-col sm:flex-row w-full max-h-screen xl:max-h-full">
      <div className="flex flex-col w-full sm:w-[40%] xl:flex-row h-auto">
        <SideBar />
        <NotesFolder />
      </div>
      <NoteViewer />
    </div>
  );
}

export default App;
