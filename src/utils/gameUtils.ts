export const checkWinner = (field: string[], currentPlayer: "X" | "0") => {
  const WIN_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return WIN_PATTERNS.some(
    ([a, b, c]) =>
      field[a] === currentPlayer &&
      field[b] === currentPlayer &&
      field[c] === currentPlayer
  );
};

export const checkDraw = (field: string[]) => field.every((cell) => cell);

export const updateGameState = (
  dispatch: any,
  index: number,
  currentPlayer: "X" | "0",
  action: "SET_WINNER" | "SET_DRAW" | "NEXT_TURN",
  nextPlayer?: "X" | "0" | null
) => {
  dispatch({ type: "SET_FIELD", payload: { index, value: currentPlayer } });
  if (action === "SET_WINNER") {
    dispatch({ type: "SET_WINNER", payload: currentPlayer });
    dispatch({ type: "SET_GAME_ENDED", payload: true });
  } else if (action === "SET_DRAW") {
    dispatch({ type: "SET_DRAW", payload: true });
    dispatch({ type: "SET_GAME_ENDED", payload: true });
  } else if (action === "NEXT_TURN" && nextPlayer) {
    dispatch({ type: "SET_CURRENT_PLAYER", payload: nextPlayer });
  }
};
