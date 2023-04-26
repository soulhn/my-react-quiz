// 테스트 할 함수를 가져옵니다.
import { fetchAmiibos, fetchPurchaseDecision } from "./api";

// test와 it은 같은 동작을 하는 코드
// toBe와 toEqual 차이점 : toBe는 obj가 같은 객체를 가르키는지 확인, toEqual은 객체의 내용이 같은 지 확인

// Jest의 describe 여러 개의 관련 테스트를 그룹화하는 블록을 만듭니다.
describe("fetchAmiibos[AmiiboAPI]를 잘 작성했나요?", () => {
  // 첫번 째 테스트입니다. Mario 데이터를 잘 호출 하는 지 테스트합니다.
  it("Mario 데이터를 잘 받아오나요?", async () => {
    const character = "Mario";
    const result = await fetchAmiibos(character);

    //API를 직접 호출 해보고 2개의 데이터만 가져오는 요청만 찾았습니다.
    //이름에 따라 1개, 3개의 데이터를 가져오는 것도 있었습니다.
    //이에 길이가 2인지 체크합니다. (2개의 정보인지 체크합니다.)
    expect(result).toHaveLength(2);

    //toEqual을 이용하여 객체의 내용이 같은 지 확인합니다[같은 내용을 체크하여 forEach 활용]
    result.forEach((amiibo) => {
      expect(amiibo.character).toEqual(character);
    });

    const [amiibo1, amiibo2] = result;

    //toEqual을 이용하여 불러온 객체의 내용이 API 문서에 명세 되있던 데이터와 일치하는지 확인합니다.
    expect(amiibo1.amiiboSeries).toEqual("Super Smash Bros.");
    expect(amiibo1.gameSeries).toEqual("Super Mario");
    expect(amiibo1.image).toEqual("https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png");
    expect(amiibo1.name).toEqual("Mario");
    expect(amiibo1.tail).toEqual("00000002");

    expect(amiibo2.amiiboSeries).toEqual("Super Mario Bros.");
    expect(amiibo2.gameSeries).toEqual("Super Mario");
    expect(amiibo2.image).toEqual("https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00340102.png");
    expect(amiibo2.name).toEqual("Mario");
    expect(amiibo2.tail).toEqual("00340102");
  });

  it("Yoshi 데이터를 잘 받아오나요?", async () => {
    const character = "Yoshi";
    const result = await fetchAmiibos(character);

    //API를 직접 호출 해보고 2개의 데이터만 가져오는 요청만 찾았습니다.
    //이에 길이가 2인지 체크합니다.
    expect(result).toHaveLength(2);

    //toEqual을 이용하여 객체의 내용이 같은 지 확인합니다[같은 내용을 체크하여 forEach 활용]
    result.forEach((amiibo) => {
      expect(amiibo.character).toEqual(character);
    });

    const [amiibo1, amiibo2] = result;
    //toEqual을 이용하여 불러온 객체의 내용이 API 문서에 명세 되있던 데이터와 일치하는지 확인합니다.
    expect(amiibo1.amiiboSeries).toEqual("Super Smash Bros.");
    expect(amiibo1.gameSeries).toEqual("Super Mario");
    expect(amiibo1.image).toEqual("https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00030000-00020002.png");
    expect(amiibo1.name).toEqual("Yoshi");
    expect(amiibo1.tail).toEqual("00020002");

    expect(amiibo2.amiiboSeries).toEqual("Super Mario Bros.");
    expect(amiibo2.gameSeries).toEqual("Super Mario");
    expect(amiibo2.image).toEqual("https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00030000-00370102.png");
    expect(amiibo2.name).toEqual("Yoshi");
    expect(amiibo2.tail).toEqual("00370102");
  });
});

// toBeTruthy : 구문이 true로 취급되는지 확인합니다.
describe("fetchPurchaseDecision[yesNoAPI]를 잘 작성했나요?", () => {
  it("응답에서 yes나 no 값 중 하나를 가져오나요?", async () => {
    const decision = await fetchPurchaseDecision();

    // 응답 데이터 예시입니다.
    //현재 fetchPurchaseDecision에서는 response.data.answer만 사용하게 작성하였습니다. 이는 의도한 바입니다.

    // {
    //   "answer": "yes",
    //   "forced": false,
    //   "image": "https://yesno.wtf/assets/yes/12-e4f57c8f172c51fdd983c2837349f853.gif"
    // }

    //answer에는 "yes", "no"라는 응답만 들어오기에 이 둘 중하나의 값을 받아 오게 된다면 테스트를 통과합니다.
    expect(decision === "yes" || decision === "no").toBeTruthy();
  });
});
