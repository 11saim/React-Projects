import React from "react";
import TextOptions from "./TextOptions";
import TextStyle from "./TextStyle";
import Media from "./Media";
import Table from "./Table";

export default function Tools() {
  return (
    <div className="tools flex space-x-8 border-b-2 border-b-[#2f2f2f] pb-2 mb-7">
      <TextOptions />
      <TextStyle />
      <Media />
      <Table />
    </div>
  );
}
