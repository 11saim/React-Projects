import React from "react";
import Folder from "./Folder";

export default function Main() {
  return (
    <div className="main py-3 h-[90%] xl:h-auto overflow-auto xl:overflow-visible">
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
