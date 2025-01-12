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
    <div className={hideButton?"mt-[20px]":"mt-[40vh]"}>
      {hideButton ? (
        <p className="text-xl sm:text-2xl capitalize  text-[#98e66c]">Game Started</p>
      ) : (
        <button
          className="text-xl sm:text-2xl border-[2px] border-[#98e66c] p-3 rounded-lg hover:bg-[#98e66c] hover:text-black transition"
          onClick={handleClick}
        >
          Start Game
        </button>
      )}
      {showBoard && <Board />}
    </div>
  );
}
