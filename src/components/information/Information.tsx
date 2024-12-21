import { Component } from "react";
import { connect } from "react-redux";
import { RootState } from "../../services/store";

interface Props {
  currentPlayer: "X" | "0";
  isGameEnded: boolean;
  isDraw: boolean;
  winner: "X" | "0" | null;
}

class Information extends Component<Props> {
  render() {
    const { currentPlayer, isGameEnded, isDraw, winner } = this.props;

    let status;
    if (isGameEnded) {
      status = isDraw ? "Ничья" : `Победитель: ${winner}`;
    } else {
      status = `Ходит: ${currentPlayer}`;
    }

    return <div className="text-2xl text-white mb-5">{status}</div>;
  }
}

const mapStateToProps = (state: RootState) => ({
  currentPlayer: state.currentPlayer,
  isGameEnded: state.isGameEnded,
  isDraw: state.isDraw,
  winner: state.winner,
});

export default connect(mapStateToProps)(Information);
