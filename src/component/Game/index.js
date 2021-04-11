import React, { useEffect, useState } from "react";
import Board from "../Board";
import { Button } from "react-bootstrap";
import { calWinner } from "../../helpers";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const [moves, setMoves] = useState(0);
  const [draw, setDraw] = useState(null);
  const winner = calWinner(board);

  const handleClick = (i) => {
    if (winner || board[i]) return;
    board[i] = xIsNext ? "X" : "O";
    setBoard(board);
    setXisNext(!xIsNext);
    setMoves(moves + 1);
  };
  useEffect(() => {
    console.log("moves", moves);
    if (!winner && moves === 9) {
      setDraw("No Winner. Is a draw!!!");
    }
  }, [moves, winner]);

  const renderMoves = () => (
    <Button
      onClick={() => {
        setDraw(null);
        setMoves(0);
        setBoard(Array(9).fill(null));
      }}
      variant="warning"
    >
      Reset
    </Button>
  );

  return (
    <>
      <div className="mt-4 text-center">
        <h1> Tic tac toe - Game</h1>

        {winner ? (
          <h1 className="text-warning"> Winner is {winner}</h1>
        ) : draw ? (
          <h1 className="text-warning"> No winner, Game draw!!</h1>
        ) : (
          <p>Next Player is : {xIsNext ? "X" : "O"}</p>
        )}

        {renderMoves()}
      </div>
      <Board squares={board} onClick={handleClick} />
    </>
  );
};

export default Game;
