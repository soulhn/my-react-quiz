import { useReducer } from "react";

export const initialState = {
  characters: ["mario", "Luigi", "peach", "Zelda", "Yoshi"],
  selectedCharacter: "",
  amiibos: [],
};

export function amiiboReducer(state, action) {
  switch (action.type) {
    case "SET_SELECTED_CHARACTER":
      return { ...state, selectedCharacter: action.payload };
    // return {
    //   characters: state.characters,
    //   selectedCharacter: action.payload,
    //   amiibos: state.amiibos,
    // };
    case "SET_AMIIBOS":
      return { ...state, amiibos: action.payload };
    default:
      return state;
  }
}

export function useAmiiboReducer() {
  return useReducer(amiiboReducer, initialState);
}
