import React from "react";

// 테스트에 필요한 모듈을 import합니다.
import { render, screen } from "@testing-library/react";
import "jest-styled-components";

// 테스트 대상을 가져옵니다.
import { ItemContainer, Item } from "./styles";

//render 함수를 이용하여 ItemContainer 컴포넌트를 렌더링합니다.
// data-testid=item-container 속성을 사용하여 컴포넌트 찾을 수 있게 활용합니다.

// jest-styled-components[https://github.com/styled-components/jest-styled-components]
// jest-styled-components의 toHaveStyleRule를 사용합니다. 첫번째 인자 : 기대 속성, 두번 째 인자 : 문자열, 정규 표현식 등등
// toHaveStyleRule(기대속성, 문자열)을 사용하여 속성을 올바르게 지정했는지 확인합니다.

describe("ItemContainer을 요구사항에 맞는 스타일을 추가했나요?", () => {
  it("flex 속성과 flex-direction 속성을 올바르게 지정했나요?", () => {
    render(<ItemContainer data-testid="item-container" />);
    const itemContainer = screen.getByTestId("item-container");

    expect(itemContainer).toHaveStyleRule("display", "flex");
    expect(itemContainer).toHaveStyleRule("flex-direction", "row");
  });
});

describe("Item의 스타일을 요구 사항에 맞게 추가했나요?", () => {
  it("background-color을 올바르게 지정했나요?", () => {
    render(<Item data-testid="item" />);
    const item = screen.getByTestId("item");
    expect(item).toHaveStyleRule("background-color", "#f0f0f0");
  });
});
