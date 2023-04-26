import { useEffect } from "react";
import { fetchAmiibos } from "../api/api";

export function useAmiiboData(selectedCharacter, dispatch) {
  useEffect(() => {
    async function fetchData() {
      if (selectedCharacter) {
        const amiiboData = await fetchAmiibos(selectedCharacter);
        dispatch({ type: "SET_AMIIBOS", payload: amiiboData });
      } else {
        dispatch({ type: "SET_AMIIBOS", payload: [] });
        // console.log("useAmiiboData 안으로 유효하지않은 selectedCharacter 값이 들어왔습니다.[초기상태의 빈값도 포함입니다.]");
      }
    }

    fetchData();
  }, [selectedCharacter, dispatch]);
}
