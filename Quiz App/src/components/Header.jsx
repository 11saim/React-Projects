import React from "react";
import Timer from "./Timer";

export default function Header({ currQues, totalQues, isAnswered,setCurrQues }) {
  return (
    <div className="flex my-4 flex-col space-y-6">
      <div className="flex justify-around items-center">
        <p className="text-white font-bold">
          {currQues} of {totalQues}
        </p>
        <Timer currQues={currQues} isAnswered={isAnswered} setCurrQues={setCurrQues}/>
      </div>
      <div className="progress-bar">
        <div className="w-[90%] h-4 bg-black m-auto rounded-[40px]">
          <div
            className="h-4 bg-[#3ab77d] rounded-[40px] transition-all"
            style={{ width: `${(currQues / totalQues) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
