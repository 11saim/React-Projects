import React from "react";
import TextOptions from "./TextOptions";
import TextStyle from "./TextStyle";
import Media from "./Media";
import Table from "./Table";

export default function Tools() {
  return (
    <div className="tools flex flex-col lg:flex-row space-x-8 space-y-3 border-b-2 border-b-[#2f2f2f] pb-2 mb-7">
      <TextOptions />
      <div className="flex space-x-5">
        <TextStyle />
        <Media />
        <Table />
      </div>
    </div>
  );
}
  