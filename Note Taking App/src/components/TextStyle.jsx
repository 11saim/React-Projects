import React from "react";
import bold from "../assets/bold.png";
import italic from "../assets/italic.png";
import underLine from "../assets/underline.png";

export default function TextStyle() {
  return (
    <div className="text-style flex space-x-2">
      <div className="bold">
        <img src={bold} alt="bold" width={25} height={25} />
      </div>
      <div className="italic">
        <img src={italic} alt="italic" width={25} height={25} />
      </div>
      <div className="under-line">
        <img src={underLine} alt="under-line" width={25} height={25} />
      </div>
    </div>
  );
}
