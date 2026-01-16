import SideBar from "./components/SideBar";
import NotesFolder from "./components/NotesFolder";
import NoteViewer from "./components/NoteViewer";

function App() {
  return (
    <div className="bg-amber-500">
      <SideBar />
      <NotesFolder />
      <NoteViewer />
    </div>
  );
}

export default App;
