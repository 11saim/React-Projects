import React, { createContext } from "react";

const FolderContext = createContext();

export default function FolderProvider({ children }) {
  return <FolderContext.Provider value={{}}>{children}</FolderContext.Provider>;
}
