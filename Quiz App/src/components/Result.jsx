import React from "react";
import retry from "../assets/retry.png";
import trophy from "../assets/trophy.png";
import correct from "../assets/correct.png";
import wrong from "../assets/wrong.png";
import notAnswered from "../assets/not-answered.png";

export default function Result() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-center text-3xl text-white font-bold mb-30">
        Quiz Summery
      </h1>
      <div className="bg-white flex justify-end items-center flex-col w-96 rounded-3xl relative">
        <img
          className="-top-20 w-40 h-40 absolute"
          src={trophy}
          alt="trophy-icon"
        />
        <div className="font-bold text-2xl mt-27">Congratulations !</div>
        <div className="text-slate-400 text-lg my-2">
          You've Scored <span className="text-green-400">+80</span> points
        </div>
        <div className="flex justify-around items-center w-full">
          <div className="flex w-full justify-center items-center flex-col h-20 rounded-bl-3xl border border-l-0 border-b-0 border-r-0 border-t-slate-300">
            <div className="flex justify-center items-center">
              <img className="w-7 h-7 mr-2" src={correct} alt="correct" />
              <p>05</p>
            </div>
            <p className="text-slate-400">Correct</p>
          </div>
          <div className="flex w-full justify-center items-center flex-col h-20 border border-b-0 border-slate-300">
            <div className="flex justify-center items-center">
              <img className="w-7 h-7 mr-2" src={wrong} alt="wrong" />
              <p>03</p>
            </div>
            <p className="text-slate-400">Wrong</p>
          </div>
          <div className="flex w-full justify-center items-center flex-col h-20 rounded-br-3xl border border-l-0 border-b-0 border-r-0 border-t-slate-300">
            <div className="flex justify-center items-center">
              <img
                className="w-7 h-7 mr-2"
                src={notAnswered}
                alt="not-answered"
              />
              <p>05</p>
            </div>
            <p className="text-slate-400">Not-Ans</p>
          </div>
        </div>
      </div>
      <button>
        <img className="w-15 h-15 mt-10 cursor-pointer" src={retry} alt="retry" />
      </button>
    </div>
  );
}
