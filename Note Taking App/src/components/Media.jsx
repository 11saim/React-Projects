import React from "react";
import image from "../assets/image.png";
import link from "../assets/link.png";

export default function Media() {
  return (
    <div className="media flex space-x-2">
      <div className="image">
        <img src={image} alt="image" width={25} height={25} />
      </div>
      <div className="link">
        <img src={link} alt="link" width={25} height={25} />
      </div>
    </div>
  );
}
