import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ItemContainer = styled.div`
  //지시사항
  // 1. ItemContainer에 flexbox 레이아웃을 적용하는 속성을 작성하세요.
  // 2. flex-direction 속성을 이용하여 요소들을 가로 배치 할 수 있게 작성하세요.
`;

export const Item = styled.div`
  //지시사항
  // 배경색을 #f0f0f0로 지정해주세요!

  border-radius: 4px;
  margin: 10px;
  padding: 10px;
  width: 400px;
  text-align: center;

  & > img {
    width: 250px;
    height: 350px;
  }
`;

export const SelectBox = styled.select`
  margin-bottom: 20px;
  padding: 10px;
`;
