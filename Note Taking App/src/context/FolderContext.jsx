import React, { createContext, useReducer } from "react";

export const FolderContext = createContext();

const initialState = {
  activeFolder: "",
  folders: [],
  trashedFolders: [],
  deleteAlert: null,
};

const folderReducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_FOLDER":
      return { ...state, activeFolder: action.payload };

    case "SET_FOLDERS":
      return { ...state, folders: action.payload || [] };

    case "SET_TRASHED_FOLDERS":
      return { ...state, trashedFolders: action.payload || [] };

    case "UPDATE_TRASHED_FOLDERS":
      return {
        ...state,
        trashedFolders: state.trashedFolders.map((f) =>
          f._id === action.payload.id ? action.payload.data : f,
        ),
      };

    case "REMOVE_TRASHED_FOLDERS":
      return {
        ...state,
        trashedFolders: state.trashedFolders.filter(
          (f) => f._id !== action.payload,
        ),
      };

    case "SET_DELETE_ALERT":
      return { ...state, deleteAlert: action.payload };

    case "ADD_FOLDER":
      return {
        ...state,
        folders: [...state.folders, action.payload],
      };

    case "UPDATE_FOLDER":
      return {
        ...state,
        folders: state.folders.map((f) =>
          f._id === action.payload.id ? { ...f, ...action.payload.data } : f,
        ),
      };

    case "REMOVE_FOLDER":
      return {
        ...state,
        folders: state.folders.filter((f) => f._id !== action.payload),
      };

    default:
      return state;
  }
};

export default function FolderProvider({ children }) {
  const [state, dispatch] = useReducer(folderReducer, initialState);

  return (
    <FolderContext.Provider value={{ state, dispatch }}>
      {children}
    </FolderContext.Provider>
  );
}
