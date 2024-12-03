import React from "react";
import "./Information.css";
import { store } from "../../services/store";

const Information: React.FC = () => {
  const { currentPlayer, isGameEnded, isDraw, winner } = store.getState();

  let status;
  if (isGameEnded) {
    if (isDraw) {
      status = "Ничья";
    } else {
      status = `Победитель: ${winner}`;
    }
  } else {
    status = `Ходит: ${currentPlayer}`;
  }

  return <div className="information">{status}</div>;
};

export default Information;
