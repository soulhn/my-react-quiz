import { useEffect } from "react";
import { fetchAmiibos } from "../api";

export function useAmiiboData(selectedCharacter, dispatch) {
  useEffect(() => {
    async function fetchData() {
      if (selectedCharacter) {
        const amiiboData = await fetchAmiibos(selectedCharacter);
        dispatch({ type: "SET_AMIIBOS", payload: amiiboData });
      }
    }

    fetchData();
  }, [selectedCharacter, dispatch]);
}
