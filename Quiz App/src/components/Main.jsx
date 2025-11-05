import React from "react";

export default function Main() {
  return (
    <div className="bg-white m-4 mt-7 xs:m-7 p-4 xs:p-6 rounded-3xl">
      <div className="question">
        <p className="text-xl font-bold leading-7">
          Who among the following does'nt have the record of playing the most
          World Cup?
        </p>
      </div>
      <div className="answer mt-8 space-y-4">
        <div className="option">Antonio Carbajal</div>
        <div className="option">Lothar Matthaus</div>
        <div className="option">Franz Beckenbauer</div>
        <div className="option">Rafael Marquez</div>
      </div>
    </div>
  );
}
