import React from "react";
import { SelectBox } from "../styles";

function CharacterSelect({ characters, selectedCharacter, setSelectedCharacter }) {
  const handleChange = (event) => {
    setSelectedCharacter(event.target.value);
  };

  return (
    <SelectBox value={selectedCharacter} onChange={handleChange}>
      <option value="">Select a character</option>
      {characters.map((character) => (
        <option key={character} value={character}>
          {character}
        </option>
      ))}
    </SelectBox>
  );
}

export default CharacterSelect;
