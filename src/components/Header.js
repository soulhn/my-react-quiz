import React, { useState } from "react";
import styled from "styled-components";

function Header() {
  // dark 모드를 지정하기 위한 useState Hook 사용
  const [darkMode, setDarkMode] = useState(false);

  // 지시사항
  // toggleDarkMode 함수를 완성하세요.
  // setDarkMode를 활용하여 클릭 마다 darkMode 값을 true는 false로, false 값은 true로 변환하게 작성합니다.
  const toggleDarkMode = () => {};

  return (
    <HeaderContainer darkMode={darkMode}>
      <Title darkMode={darkMode}>살까 말까?</Title>
      <DarkModeButton darkMode={darkMode} onClick={toggleDarkMode}>
        {darkMode ? "라이트 모드" : "다크 모드"}
      </DarkModeButton>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  border-bottom: 2px solid #f5f5f5;
  margin-bottom: 20px;
  background-color: ${({ darkMode }) => (darkMode ? "#242424" : "white")};
`;

const Title = styled.h1`
  box-sizing: border-box;
  margin-right: 30px;
  font-size: 24px;
  color: ${({ darkMode }) => (darkMode ? "white" : "#242424")};
`;

const DarkModeButton = styled.button`
  width: 90px;
  font-size: 14px;
  cursor: pointer;
  color: ${({ darkMode }) => (darkMode ? "white" : "#242424")};
`;

export default Header;
