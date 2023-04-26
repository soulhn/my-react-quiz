import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

//
describe("Header Component를 테스트합니다.", () => {
  it("toggleDarkMode 함수 로직을 올바르게 작성하여 다크모드 전환을 하나요?", () => {
    render(<Header />);

    // React Testing Library 제공
    // screen.getByText() : 특정 텍스트를 포함하는 DOM 요소 탐색
    const darkModeButton = screen.getByText("다크 모드");

    // darkMode가 초기 상태인지 확인 (기본값은 false)
    // https://github.com/testing-library/jest-dom 제공
    // toHaveTextContent(text: string | RegExp, options?: {normalizeWhitespace: boolean})
    // 매처는 주어진 DOM 요소가 텍스트 콘텐츠를 포함하는 지 확인합니다.
    expect(darkModeButton).toHaveTextContent("다크 모드");

    // @testing-library/react : fireEvent 제공
    // DOM 이벤트 발생 시키는 함수
    fireEvent.click(darkModeButton);

    // 상태 변경 확인 (darkMode가 true로 바뀌었는지)
    expect(darkModeButton).toHaveTextContent("라이트 모드");

    // toggleDarkMode 함수를 다시 실행
    fireEvent.click(darkModeButton);

    // 상태 변경 확인 (darkMode가 다시 false로 바뀌었는지)
    expect(darkModeButton).toHaveTextContent("다크 모드");
  });
});
