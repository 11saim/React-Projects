import React, { useEffect, useState } from "react";
import NoteHead from "./NoteHead";
import NoteDetails from "./NoteDetails";
import NoteEditor from "./NoteEditor";
import noteIcon from "../assets/note.png";

export default function NoteViewer({
  activeNote,
  setActiveNote,
  notes,
  folder,
  setNotes,
  folders,
  activeFolder,
}) {
  const [noteDetails, setNoteDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!activeNote) return;
    setLoading(true);
    setNoteDetails({});
    const fetchNoteDetails = async () => {
      const response = await fetch(
        `http://localhost:3000/api/notes/${activeNote}`,
      );
      const data = await response.json();
      if (data.success) setNoteDetails(data.data);
      setLoading(false);
    };
    fetchNoteDetails();
  }, [activeNote]);

  useEffect(() => {
    if (!activeNote || !notes?.length) return;
    const updatedNote = notes.find((n) => n._id === activeNote);
    if (updatedNote) {
      const { folder, ...rest } = updatedNote;
      setNoteDetails((prev) => ({ ...prev, ...rest }));
    }
  }, [notes]);

  useEffect(() => {
    if (!noteDetails.folder || !folders?.length) return;
    const updatedFolder = folders.find(
      (f) => f._id === noteDetails.folder?._id,
    );
    if (updatedFolder) {
      setNoteDetails((prev) => ({ ...prev, folder: updatedFolder }));
    }
  }, [folders]);

  return !activeNote ? (
    <div className="space-y-3 flex justify-center items-center flex-col w-full sm:w-[60%] bg-[#181818] text-white p-5 lg:p-10 min-h-screen h-auto">
      <img src={noteIcon} alt="note" width={100} height={100} />
      <p className="text-xl font-semibold">Select a note to view</p>
      <p className="text-[#a3a3a3] max-w-120 text-center">
        Choose a note from a folder to view its contents, or create a new note
        to add to your collection.
      </p>
    </div>
  ) : (
    <div className="NoteViewer w-full sm:w-[60%] bg-[#181818] text-white p-5 lg:p-10 min-h-screen h-auto">
      <div>
        <NoteHead
          title={noteDetails.title}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
          folder={folder}
          notes={notes}
          setNotes={setNotes}
        />
        <NoteDetails date={noteDetails.createdAt} folder={noteDetails.folder} />
      </div>
      {loading ? (
        <div className="text-[#a3a3a3] mt-10 text-center">Loading...</div>
      ) : (
        <NoteEditor
          key={noteDetails._id}
          initialContent={noteDetails.content}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
          notes={notes}
          folder={folder}
          setNotes={setNotes}
        />
      )}
    </div>
  );
}
