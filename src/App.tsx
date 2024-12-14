import React from "react";
import { Provider } from "react-redux";
import { store } from "./services/store";
import GameLayout from "./components/game/GameLayout";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GameLayout />
    </Provider>
  );
};

export default App;
