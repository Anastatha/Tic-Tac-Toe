import { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./services/store";
import GameLayout from "./components/game/GameLayout";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GameLayout />
      </Provider>
    );
  }
}

export default App;
