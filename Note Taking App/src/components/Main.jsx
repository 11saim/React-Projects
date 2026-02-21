import React from "react";
import Folder from "./Folder";

export default function Main() {
  return (
    <div className="main">
      <div className="folders flex flex-col items-center">
        <Folder />
      </div>
    </div>
  );
}
