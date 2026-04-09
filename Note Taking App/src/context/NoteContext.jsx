import React, { createContext, useReducer } from "react";

export const NoteContext = createContext();

const initialState = {
  activeNote: "",
  notes: {
    folder: "",
    notes: [],
  },
};

function noteReducer(state, action) {
  switch (action.type) {
    case "SET_ACTIVE_NOTE":
      return { ...state, activeNote: action.payload };

    case "SET_NOTES":
      return { ...state, notes: action.payload };

    case "ADD_NOTE":
      return {
        ...state,
        notes: {
          ...state.notes,
          notes: [...state.notes.notes, action.payload],
        },
      };

    case "UPDATE_NOTE":
      return {
        ...state,
        notes: {
          ...state.notes,
          notes: state.notes.notes.map((n) =>
            n._id === action.payload.id ? { ...n, ...action.payload.data } : n,
          ),
        },
      };

    case "REMOVE_NOTE":
      return {
        ...state,
        notes: {
          ...state.notes,
          notes: state.notes.notes.filter((n) => n._id !== action.payload),
        },
      };

    default:
      return state;
  }
}

export default function NoteProvider({ children }) {
  const [state, dispatch] = useReducer(noteReducer, initialState);
  return (
    <NoteContext.Provider value={{ state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
}
