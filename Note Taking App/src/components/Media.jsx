import React from "react";
import image from "../assets/image.png";
import link from "../assets/link.png";

export default function Media() {
  return (
    <div className="media">
      <div className="image">
        <img src={image} alt="image" />
      </div>
      <div className="link">
        <img src={link} alt="link" />
      </div>
    </div>
  );
}
