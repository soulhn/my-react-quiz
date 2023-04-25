import { useReducer } from "react";

const initialState = {
  characters: ["mario", "Luigi", "peach", "Zelda", "Yoshi"],
  selectedCharacter: "",
  amiibos: [],
};

function amiiboReducer(state, action) {
  switch (action.type) {
    case "SET_SELECTED_CHARACTER":
      return { ...state, selectedCharacter: action.payload };
    case "SET_AMIIBOS":
      return { ...state, amiibos: action.payload };
    default:
      return state;
  }
}

export function useAmiiboReducer() {
  return useReducer(amiiboReducer, initialState);
}
