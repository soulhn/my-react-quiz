import React from "react";
// 테스트에 필요한 모듈을 import합니다.
import { render, screen } from "@testing-library/react";

// 테스트 대상을 가져옵니다.
import AmiiboItem from "./AmiiboItem";

describe("AmiiboItem을 올바르게 작성했나요?", () => {
  // 임의의 데이터 amiibo 객체를 입력합니다.
  const amiibo = {
    image: "https://example.com/image.png",
    name: "Mario",
    amiiboSeries: "Super Smash Bros.",
    gameSeries: "Super Mario",
    release: { eu: "2014-11-28" },
  };

  //테스트 케이스를 전 실행하는 함수 : AmiiboItem 컴포넌트를 렌더링하고 환경을 구성
  const amiiboItemSetup = () => render(<AmiiboItem amiibo={amiibo} />);

  //jest의 beforeEach 함수 : 테스트가 실행되기 전 실행하는 함수
  //amiiboItemSetup를 반복 사용하여 beforeEach()함수를 활용하였으나
  //경고 발생 : "Forbidden usage of `render` within testing framework `beforeEach` setup"[권장하지 않는다고 합니다.]
  // beforeEach(() => {
  //   amiiboItemSetup();
  // });

  it("이미지를 올바르게 렌더링 하나요?[alt에는 amiibo.name]이 들어가야합니다.", () => {
    amiiboItemSetup();
    // screen : 현재 렌더링된 컴포넌트의 DOM 요소를 쿼리하는 데 사용
    // screen.getByRole : role이 img인 DOM요소를 찾습니다.
    const imgElement = screen.getByRole("img");
    //jest-dom의 toHaveAttribute :  지정된 요소에 속성이 있는지 여부를 확인, 특정 기대 값 확인
    //기본 형태 : toHaveAttribute(attr: string, value?: any) [https://github.com/testing-library/jest-dom]
    expect(imgElement).toHaveAttribute("src", amiibo.image);
    expect(imgElement).toHaveAttribute("alt", amiibo.name);
  });

  it("이름을 올바르게 렌더링 하나요?", () => {
    amiiboItemSetup();
    // React Testing Library 제공
    // screen.getByText() : 특정 텍스트를 포함하는 DOM 요소 탐색

    // Jest DOM 제공
    // toBeInTheDocument(): 찾은 DOM 요소가 실제로 문서에 존재하는지 확인
    expect(screen.getByText(amiibo.name)).toBeInTheDocument();
  });

  it("시리즈명을 올바르게 렌더링 하나요?", () => {
    amiiboItemSetup();
    expect(screen.getByText(`시리즈: ${amiibo.amiiboSeries}`)).toBeInTheDocument();
  });

  it("게임 시리즈 명을 올바르게 렌더링 하나요?", () => {
    amiiboItemSetup();
    expect(screen.getByText(`게임 시리즈: ${amiibo.gameSeries}`)).toBeInTheDocument();
  });

  it("출시일[eu]을 올바르게 렌더링 하나요?", () => {
    amiiboItemSetup();
    expect(screen.getByText(`출시일: ${amiibo.release.eu}`)).toBeInTheDocument();
  });
});
