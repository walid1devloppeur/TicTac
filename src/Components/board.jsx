import React, { useState } from "react";

export default function Board() {
  const [turn, setTurn] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [gameResult, setGameResult] = useState("");

  const Result = (board) => {
    if (
      (board[0] === "X" && board[1] === "X" && board[2] === "X") ||
      (board[3] === "X" && board[4] === "X" && board[5] === "X") ||
      (board[6] === "X" && board[7] === "X" && board[8] === "X") ||
      (board[0] === "X" && board[3] === "X" && board[6] === "X") ||
      (board[1] === "X" && board[4] === "X" && board[7] === "X") ||
      (board[2] === "X" && board[5] === "X" && board[8] === "X") ||
      (board[0] === "X" && board[4] === "X" && board[8] === "X") ||
      (board[2] === "X" && board[4] === "X" && board[6] === "X")
    ) {
      setGameResult("Winner : Player 1");
    } else if (
      (board[0] === "O" && board[1] === "O" && board[2] === "O") ||
      (board[3] === "O" && board[4] === "O" && board[5] === "O") ||
      (board[6] === "O" && board[7] === "O" && board[8] === "O") ||
      (board[0] === "O" && board[3] === "O" && board[6] === "O") ||
      (board[1] === "O" && board[4] === "O" && board[7] === "O") ||
      (board[2] === "O" && board[5] === "O" && board[8] === "O") ||
      (board[0] === "O" && board[4] === "O" && board[8] === "O") ||
      (board[2] === "O" && board[4] === "O" && board[6] === "O")
    ) {
      setGameResult("Winner : Player 2");
    } else if (board.every((cell) => cell !== null)) {
      setGameResult("It's a Draw !");
    }
  };
  const reload = () => {
    setBoard(Array(9).fill(null));
    setGameResult("");
  };
  const boardLogic = (index) => {
    if (board[index] || gameResult) return;
    const newBoard = [...board];
    newBoard[index] = turn ? "X" : "O";
    setBoard(newBoard);
    setTurn(!turn);
    Result(newBoard);
  };
  let className;
  if (gameResult === "Winner : Player 1") {
    className = "text-2xl sm:text-3xl text-[#98e66c]";
  } else if (gameResult === "Winner : Player 2") {
    className = "text-2xl sm:text-3xl text-red-600";
  } else if (gameResult === "It's a Draw !") {
    className = "text-2xl sm:text-3xl text-sky-700";
  }
  return (
    <div className="my-10 sm:my-0">
      <div className="w-full h-[70%] flex justify-center">
        <div className="my-7 grid grid-cols-3 w-[80%] md:w-[50%] gap-4">
          {board.map((item, index) => (
            <div
              onClick={() => boardLogic(index)}
              className="border-[4px] p-[20px] h-[100px] sm:h-[100px] md:h-[190px] flex items-center justify-center cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
              key={index}
            >
              <p
                className={`text-4xl font-semibold ${
                  item === "X" ? "text-[#98e66c] font-bold" : "text-red-600"
                }`}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
      {gameResult.trim() !== "" && (
        <div className="text-center my-10 sm:my-0">
          <h2 className="text-3xl font-bold text-[#374151] mb-1">
            {gameResult}
          </h2>
          <button
            className="my-2 sm:my-4 text-lg sm:text-xl border-2 border-[#98e66c] p-3  rounded-lg hover:bg-[#98e66c] hover:text-black transition ease-in-out duration-300 transform hover:scale-105"
            onClick={reload}
          >
            Replay
          </button>
        </div>
      )}
    </div>
  );
}
