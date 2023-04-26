import { useReducer } from "react";

// 지시사항 useReducer에 사용 할 초기 값과 amiiboReducer를 완성 시키세요.

// initialState의 초기 값을 설정해 줍니다.
// 1. characters에는 "mario", "Luigi", "peach", "Zelda", "Yoshi" 가진 배열을 작성해주세요.
// 해당 값들이 API 문서에서 어떤 값을 가져오는지도 확인하세요.
// 2. selectedCharater의 초기 값을 빈 문자열로 설정해주세요.
// 3. amiibos의 초기 값을 빈 배열로 설정 해주세요.
export const initialState = {};

// 4. SET_SELECTED_CHARACTER 액션 타입에 대한 처리를 작성하세요.
// 현재 상태(state)를 복사하고 selectedCharacter 속성을 액션의 payload로 업데이트해야 합니다.

// 5. SET_AMIIBOS 액션 타입에 대한 처리를 작성하세요
// 현재 상태(state)를 복사하고 amiibos 속성을 액션의 payload로 업데이트해야 합니다.

export function amiiboReducer(state, action) {
  switch (action.type) {
    case "SET_SELECTED_CHARACTER":
      return {};

    case "SET_AMIIBOS":
      return {};
    default:
      return state;
  }
}

export function useAmiiboReducer() {
  return useReducer(amiiboReducer, initialState);
}
