import React from "react";
import trophy from "../assets/trophy.png";
import correct from "../assets/correct.png";
import wrong from "../assets/wrong.png";
import notAnswered from "../assets/not-answered.png";

export default function Result() {
  return (
    <div>
      <h1 className="text-center text-4xl text-white font-bold">
        Quiz Summery
      </h1>
      <div className="bg-white flex justify-center items-center flex-col">
        <img className="w-40 h-40" src={trophy} alt="trophy-icon" />
        <div className="winning-title">Congratulations !</div>
        <div className="points">
          You've Scored <span>+80</span> points
        </div>
        <div className="flex justify-around items-center">
          <div className="flex">
            <img className="w-7 h-7" src={correct} alt="correct" />
            <p>05</p>
          </div>
          <div className="flex">
            <img className="w-7 h-7" src={wrong} alt="wrong" />
            <p>03</p>
          </div>
          <div className="flex">
            <img className="w-7 h-7" src={notAnswered} alt="not-answered" />
            <p>02</p>
          </div>
        </div>
      </div>
    </div>
  );
}
