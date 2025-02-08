import React, { useState } from "react";
import Board from "./board";

export default function Button() {
  const [hideButton, setHideButton] = useState(false);
  const [showBoard, setShowBoard] = useState(false);

  const handleClick = () => {
    setShowBoard(!showBoard);
    setHideButton(!hideButton);
  };
  return (
    <div className={hideButton ? "mt-[20px]" : "mt-[40vh] flex justify-center"}>
      {hideButton ? (
        <p className="text-xl sm:text-2xl capitalize text-[#98e66c] font-semibold">
          Game Started
        </p>
      ) : (
        <button
          className="text-xl sm:text-2xl border-2 border-[#98e66c] p-4 rounded-lg hover:bg-[#98e66c] hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md"
          onClick={handleClick}
        >
          Start Game
        </button>
      )}
      {showBoard && <Board />}
    </div>
  );
}
