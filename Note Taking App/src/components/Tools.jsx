import React from "react";
import TextOptions from "./TextOptions";
import TextStyle from "./TextStyle";
import Media from "./Media";
import Table from "./Table";

export default function Tools() {
  return (
    <div className="tools">
      <TextOptions />
      <TextStyle />
      <Media />
      <Table />
    </div>
  );
}
