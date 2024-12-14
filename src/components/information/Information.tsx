import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../services/store";
import "./Information.css";

const Information: React.FC = () => {
  const { currentPlayer, isGameEnded, isDraw, winner } = useSelector(
    (state: RootState) => state
  );

  let status;
  if (isGameEnded) {
    status = isDraw ? "Ничья" : `Победитель: ${winner}`;
  } else {
    status = `Ходит: ${currentPlayer}`;
  }

  return <div className="information">{status}</div>;
};

export default Information;
