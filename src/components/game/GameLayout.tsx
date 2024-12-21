import { Component } from "react";
import Information from "../information/Information";
import Field from "../field/Field";
import { connect } from "react-redux";

interface Props {
  resetGame: () => void;
}

class GameLayout extends Component<Props> {
  render() {
    const { resetGame } = this.props;

    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800">
        <Information />
        <Field />
        <button
          className="mt-10 px-5 py-3 text-lg font-medium bg-white rounded shadow hover:bg-gray-200 focus:outline-none active:scale-95"
          onClick={resetGame}
        >
          Начать заново
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  resetGame: () => dispatch({ type: "RESET_GAME" }),
});

export default connect(null, mapDispatchToProps)(GameLayout);
