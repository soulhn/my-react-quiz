import axios from "axios";

// Axios Instance를 활용하여 기본 API 경로를 작성했습니다.
// 자세한 내용은 아래의 공식 문서를 읽어보고 학습하셔도 좋습니다.
// https://axios-http.com/docs/instance
const amiiboApi = axios.create({
  baseURL: "https://amiiboapi.com/api",
});

const yesNoApi = axios.create({
  baseURL: "https://yesno.wtf",
});

//해결해야하는 문제1.
//https://amiiboapi.com/ 를 사용하는 fetchAmiibos를 작성하세요
// 1. https://amiiboapi.com/docs/ 를 읽어보고 사용법을 이해하세요.
// 2. character 값이 변할 때 그에 알맞은 요청을 가져오는 코드를 작성해보세요.
// characters에는 ["mario", "Luigi", "peach", "Zelda", "Yoshi"] 배열의 요소 중 하나의 값이 들어옵니다.
// 3. try{} catch{}를 사용하여 요청 중 오류 사항을 처리해보세요[선택]
// 4. reducers/useAmiiboReducer.js에서 characters 배열에 API로 호출 할 수 있는 값을 추가하여 다른 캐릭터도 둘러보세요.[선택]
export const fetchAmiibos = async (character) => {
  try {
    const response = await amiiboApi.get();
    return "지시사항에 맞게 해결 해주세요.";
  } catch (error) {
    console.error("fetchAmiibos 호출 중 에러 발생:", error);
    return [];
  }
};

////해결해야하는 문제2.
//https://yesno.wtf/#api를 사용하는 fetchPurchaseDecision를 작성하세요
// 1. https://yesno.wtf/#api를 보고 들어오는 데이터 형식을 파악하세요.
// 2. postman, 브라우저를 통하여 들어오는 데이터 중 "yes", "no"를 반환하는 속성을 찾으세요.
// 3. fetchPurchaseDecision에서 API GET 요청 시 "yes", "no"를 반환하는 속성을 찾아 리턴하세요.
// 4. try{} catch{}를 사용하여 요청 중 오류 사항을 처리해보세요[선택]
export const fetchPurchaseDecision = async () => {
  try {
    const response = await yesNoApi.get();
    return "지시사항에 맞게 해결 해주세요.";
  } catch (error) {
    console.error("fetchPurchaseDecision 호출 중 에러 발생:", error);
    return null;
  }
};
