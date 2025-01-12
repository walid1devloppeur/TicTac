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
  const reload = ()=>{ 
    window.location.reload(); 
  }
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
    <div>
      <div className="w-[100%] h-[70%] flex justify-center">
        <div className="my-[50px] grid grid-cols-3 w-[80%] md:w-[50%]">
          {board.map((item, index) => (
            <div
              onClick={() => boardLogic(index)}
              className="border-[3px] p-[25px] h-[120px] md:h-[180px] col"
              key={index}
            >
              <p
                className={
                  item === "X"
                    ? "text-3xl text-[#98e66c]"
                    : "text-3xl text-red-600"
                }
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
      {gameResult.trim() !== "" && (
        <div>
          <h2 className={className}>{gameResult}</h2>
          <button className=" my-[30px] text-xl sm:text-2xl border-[2px] border-[#98e66c] p-3 rounded-lg hover:bg-[#98e66c] hover:text-black transition" 
          onClick={reload}
          >
            Replay
          </button>
        </div>
      )}
    </div>
  );
}
