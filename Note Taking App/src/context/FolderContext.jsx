import React, { createContext } from "react";

const FolderContext = createContext();

export default function FolderProviderx({ children }) {
  return (
    <FolderContext.Provider value={{}}>{children}</FolderContext.Provider>
  );
}
