// 컴포넌트를 불러옵니다.
import AmiiboItem from "./components/AmiiboItem";
import CharacterSelect from "./components/CharacterSelect";

//Reducer를 불러옵니다.
import { useAmiiboReducer } from "./reducers/useAmiiboReducer";

//커스텀 Hook을 불러옵니다.
import { useAmiiboData } from "./hooks/useAmiiboData";

//스타일을 불러옵니다.
import { Container, ItemContainer } from "./styles";

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
      <ItemContainer>
        {amiibos.map((amiibo) => (
          <AmiiboItem key={amiibo.tail} amiibo={amiibo} />
        ))}
      </ItemContainer>
    </Container>
  );
}

export default App;
