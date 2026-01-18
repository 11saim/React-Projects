import React from "react";
import Folder from "./Folder";

export default function Main() {
  return (
    <div className="main py-3">
      <div className="folders flex flex-col items-center">
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
      </div>
    </div>
  );
}
