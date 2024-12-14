import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../services/store";
import "./Field.css";

const Field: React.FC = () => {
  const { field, currentPlayer, isGameEnded } = useSelector(
    (state: RootState) => state
  );
  const dispatch = useDispatch();

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
      dispatch({
        type: "SET_FIELD",
        payload: { index, value: currentPlayer },
      });
      dispatch({ type: "SET_WINNER", payload: currentPlayer });
      dispatch({ type: "SET_GAME_ENDED", payload: true });
      return;
    }

    const isDraw = newField.every((cell) => cell);
    if (isDraw) {
      dispatch({
        type: "SET_FIELD",
        payload: { index, value: currentPlayer },
      });
      dispatch({ type: "SET_DRAW", payload: true });
      dispatch({ type: "SET_GAME_ENDED", payload: true });
      return;
    }

    dispatch({
      type: "SET_FIELD",
      payload: { index, value: currentPlayer },
    });
    dispatch({
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
