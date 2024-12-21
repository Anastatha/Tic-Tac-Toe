import { Component } from "react";
import { connect } from "react-redux";
import { RootState } from "../../services/store";
import { checkWinner, checkDraw } from "../../utils/gameUtils";

interface Props {
  field: string[];
  currentPlayer: "X" | "0";
  isGameEnded: boolean;
  setField: (index: number, value: string) => void;
  setWinner: (winner: "X" | "0" | null) => void;
  setDraw: (isDraw: boolean) => void;
  setCurrentPlayer: (player: "X" | "0") => void;
  setGameEnded: (ended: boolean) => void;
}

class Field extends Component<Props> {
  handleCellClick = (index: number) => {
    const {
      field,
      currentPlayer,
      isGameEnded,
      setField,
      setWinner,
      setDraw,
      setCurrentPlayer,
      setGameEnded,
    } = this.props;

    if (field[index] || isGameEnded) return;

    const newField = [...field];
    newField[index] = currentPlayer;

    if (checkWinner(newField, currentPlayer)) {
      setField(index, currentPlayer);
      setWinner(currentPlayer);
      setGameEnded(true);
      return;
    }

    if (checkDraw(newField)) {
      setField(index, currentPlayer);
      setDraw(true);
      setGameEnded(true);
      return;
    }

    setField(index, currentPlayer);
    setCurrentPlayer(currentPlayer === "X" ? "0" : "X");
  };

  render() {
    const { field } = this.props;

    return (
      <div className="grid grid-cols-3 gap-1 w-[300px] h-[300px]">
        {field.map((cell, index) => (
          <button
            key={index}
            className="w-[100px] h-[100px] bg-white border border-gray-900 text-6xl flex justify-center items-center hover:bg-gray-100 focus:outline-none active:scale-95"
            onClick={() => this.handleCellClick(index)}
          >
            {cell}
          </button>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  field: state.field,
  currentPlayer: state.currentPlayer,
  isGameEnded: state.isGameEnded,
});

const mapDispatchToProps = (dispatch: any) => ({
  setField: (index: number, value: string) =>
    dispatch({ type: "SET_FIELD", payload: { index, value } }),
  setWinner: (winner: "X" | "0" | null) =>
    dispatch({ type: "SET_WINNER", payload: winner }),
  setDraw: (isDraw: boolean) => dispatch({ type: "SET_DRAW", payload: isDraw }),
  setCurrentPlayer: (player: "X" | "0") =>
    dispatch({ type: "SET_CURRENT_PLAYER", payload: player }),
  setGameEnded: (ended: boolean) =>
    dispatch({ type: "SET_GAME_ENDED", payload: ended }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
