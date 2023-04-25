import React from "react";
import AmiiboItem from "./components/AmiiboItem";
import CharacterSelect from "./components/CharacterSelect";
import { useAmiiboReducer } from "./useAmiiboReducer";
import { useAmiiboData } from "./hooks/useAmiiboData";
import { Container } from "./styles";

function App() {
  const [state, dispatch] = useAmiiboReducer();
  const { characters, selectedCharacter, amiibos } = state;

  useAmiiboData(selectedCharacter, dispatch);

  const setSelectedCharacter = (character) => {
    dispatch({ type: "SET_SELECTED_CHARACTER", payload: character });
  };

  return (
    <Container>
      <CharacterSelect characters={characters} selectedCharacter={selectedCharacter} setSelectedCharacter={setSelectedCharacter} />
      {amiibos.map((amiibo) => (
        <AmiiboItem key={amiibo.tail} amiibo={amiibo} />
      ))}
    </Container>
  );
}

export default App;
