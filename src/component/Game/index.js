import React, { useState } from "react";
import Board from "../Board";
import { Button } from "react-bootstrap";
import { calculateWinner } from "../../helpers";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    // If user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const renderMoves = () => (
    <Button onClick={() => setBoard(Array(9).fill(null))} variant="warning">
      Reset
    </Button>
  );

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div className="mt-4 text-center">
        <p>
          {winner
            ? `Winner: ${winner}`
            : `Next Player is : ${xIsNext ? "X" : "O"}`}
        </p>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
