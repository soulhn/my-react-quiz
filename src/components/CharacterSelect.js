import React from "react";
import { SelectBox } from "../styles/styles";

function CharacterSelect({ characters, selectedCharacter, setSelectedCharacter }) {
  const handleChange = (event) => {
    setSelectedCharacter(event.target.value);
  };

  return (
    <SelectBox value={selectedCharacter} onChange={handleChange}>
      <option value="">원하는 캐릭터를 선택해주세요</option>
      {characters.map((character) => (
        <option key={character} value={character}>
          {character}
        </option>
      ))}
    </SelectBox>
  );
}

export default CharacterSelect;
