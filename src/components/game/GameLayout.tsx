import React from "react";
import Field from "../field/Field";
import Information from "../information/Information";
import "./GameLayout.css";
import { store } from "../../services/store";

const GameLayout: React.FC = () => {
  const resetGame = () => store.dispatch({ type: "RESET_GAME" });

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
