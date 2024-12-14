import React from "react";
import Information from "../information/Information";
import Field from "../field/Field";
import { useDispatch } from "react-redux";
import "./GameLayout.css";

const GameLayout: React.FC = () => {
  const dispatch = useDispatch();

  const resetGame = () => dispatch({ type: "RESET_GAME" });

  return (
    <div className="game">
      <Information />
      <Field />
      <button className="restart" onClick={resetGame}>
        Начать заново
      </button>
    </div>
  );
};

export default GameLayout;
