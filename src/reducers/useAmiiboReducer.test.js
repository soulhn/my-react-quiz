import { amiiboReducer, initialState } from "./useAmiiboReducer";

// initialState 초기 값을 테스트 합니다.
describe("initialState 테스트", () => {
  it("초기 characters 값을 올바르게 작성 했나요?", () => {
    expect(initialState.characters).toEqual(["mario", "Luigi", "peach", "Zelda", "Yoshi"]);
  });
  it("초기 selectedCharater 값을 올바르게 작성 했나요?", () => {
    expect(initialState.selectedCharacter).toEqual("");
  });
  it("초기 amiibos 값을 올바르게 작성 했나요?", () => {
    expect(initialState.amiibos).toEqual([]);
  });
});

describe("amiiboReducer 테스트입니다.", () => {
  it("SET_SELECTED_CHARACTER action의 return 값이 올바른가요?", () => {
    //임의의 액션을 작성합니다.
    const action = {
      type: "SET_SELECTED_CHARACTER",
      payload: "Luigi",
    };
    // 예상 상태를 작성합니다.
    const expectedState = {
      ...initialState,
      selectedCharacter: "Luigi",
    };
    // amiiboReducer에 초기 상태와 테스트 액션을 넣고 반환된 상태가 예상 상태인지 확인합니다.
    expect(amiiboReducer(initialState, action)).toEqual(expectedState);
  });

  it("SET_AMIIBOS action의 return 값이 올바른가요?", () => {
    const action = {
      type: "SET_AMIIBOS",
      payload: [
        {
          id: 1,
          name: "Amiibo 1",
        },
        {
          id: 2,
          name: "Amiibo 2",
        },
      ],
    };

    const expectedState = {
      ...initialState,
      amiibos: action.payload,
    };

    expect(amiiboReducer(initialState, action)).toEqual(expectedState);
  });
});
