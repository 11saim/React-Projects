import React from "react";
import bold from "../assets/bold.png";
import italic from "../assets/italic.png";
import underLine from "../assets/underline.png";

export default function TextStyle() {
  return (
    <div className="text-style">
      <div className="bold">
        <img src={bold} alt="bold" />
      </div>
      <div className="italic">
        <img src={italic} alt="italic" />
      </div>
      <div className="under-line">
        <img src={underLine} alt="under-line" />
      </div>
    </div>
  );
}
