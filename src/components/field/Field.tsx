import React from "react";
import "./Field.css";
import { store } from "../../services/store";

const Field: React.FC = () => {
  const { field, currentPlayer, isGameEnded } = store.getState();

  const handleCellClick = (index: number) => {
    if (field[index] || isGameEnded) return;

    const newField = [...field];
    newField[index] = currentPlayer;

    const WIN_PATTERNS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const hasWinner = WIN_PATTERNS.some((pattern) => {
      const [a, b, c] = pattern;
      return (
        newField[a] === currentPlayer &&
        newField[b] === currentPlayer &&
        newField[c] === currentPlayer
      );
    });

    if (hasWinner) {
      store.dispatch({
        type: "SET_FIELD",
        payload: { index, value: currentPlayer },
      });
      store.dispatch({ type: "SET_WINNER", payload: currentPlayer });
      store.dispatch({ type: "SET_GAME_ENDED", payload: true });
      return;
    }

    const isDraw = newField.every((cell) => cell);
    if (isDraw) {
      store.dispatch({
        type: "SET_FIELD",
        payload: { index, value: currentPlayer },
      });
      store.dispatch({ type: "SET_DRAW", payload: true });
      store.dispatch({ type: "SET_GAME_ENDED", payload: true });
      return;
    }

    store.dispatch({
      type: "SET_FIELD",
      payload: { index, value: currentPlayer },
    });
    store.dispatch({
      type: "SET_CURRENT_PLAYER",
      payload: currentPlayer === "X" ? "0" : "X",
    });
  };

  return (
    <div className="field_wrapper">
      {field.map((cell, index) => (
        <button
          className="field_square"
          key={index}
          onClick={() => handleCellClick(index)}
        >
          {cell}
        </button>
      ))}
    </div>
  );
};

export default Field;
