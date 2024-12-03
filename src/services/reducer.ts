interface State {
  field: string[];
  currentPlayer: "X" | "0";
  isGameEnded: boolean;
  isDraw: boolean;
  winner: "X" | "0" | null;
}

const initialState: State = {
  field: Array(9).fill(""),
  currentPlayer: "X",
  isGameEnded: false,
  isDraw: false,
  winner: null,
};

type Action =
  | { type: "SET_FIELD"; payload: { index: number; value: string } }
  | { type: "SET_CURRENT_PLAYER"; payload: "X" | "0" }
  | { type: "SET_GAME_ENDED"; payload: boolean }
  | { type: "SET_DRAW"; payload: boolean }
  | { type: "SET_WINNER"; payload: "X" | "0" | null }
  | { type: "RESET_GAME" };

export const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case "SET_FIELD": {
      const newField = [...state.field];
      newField[action.payload.index] = action.payload.value;
      return { ...state, field: newField };
    }
    case "SET_CURRENT_PLAYER":
      return { ...state, currentPlayer: action.payload };
    case "SET_GAME_ENDED":
      return { ...state, isGameEnded: action.payload };
    case "SET_DRAW":
      return { ...state, isDraw: action.payload };
    case "SET_WINNER":
      return { ...state, winner: action.payload };
    case "RESET_GAME":
      return initialState;
    default:
      return state;
  }
};
