import React, { useState } from "react";

export default function Main({
  question,
  options,
  correctOption,
  isAnswered,
  setIsAnswered,
}) {
  const [selected, setSelected] = useState(null);

  const clickHandler = (selectedOption) => {
    if (isAnswered) return;
    setIsAnswered(true);
    setSelected(selectedOption);
  };
  return (
    <div className="relative m-4 mt-7 xs:m-5">
      <div className="absolute top-0 xs:top-4 left-[10%] w-[80%] h-full bg-[#9f61f7] rounded-3xl z-10"></div>
      <div className="absolute top-0 xs:top-2 left-[5%] w-[90%] h-full bg-[#c99bfe] rounded-3xl z-20"></div>
      <div className="bg-white p-5 xs:p-6 rounded-3xl relative z-30">
        <div className="question">
          <p className="text-lg xs:text-xl font-bold leading-7">{question}</p>
        </div>
        <div className="answer mt-5 xs:mt-8 space-y-4">
          {options.map((option, index) => {
            let optionStyle = "";
            if (isAnswered) {
              if (index === correctOption) {
                optionStyle = "correct";
              } else if (index === selected) {
                optionStyle = "wrong";
              }
            }
            return (
              <div
                onClick={() => {
                  clickHandler(index);
                }}
                key={index}
                className={`option ${optionStyle}`}
              >
                {option}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
