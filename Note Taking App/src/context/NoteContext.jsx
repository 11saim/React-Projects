import React, { createContext } from "react";

const NoteContext = createContext();

export default function NoteProvider({ children, value }) {
  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
}
