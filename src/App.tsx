import React, { useState, useEffect } from "react";
import "./App.css";
import GameLayout from "./components/game/GameLayout";
import { store } from "./services/store";

const App: React.FC = () => {
  const [, setRerender] = useState({});

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setRerender({}));
    return unsubscribe;
  }, []);

  return <GameLayout />;
};

export default App;
