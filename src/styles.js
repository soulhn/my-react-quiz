import styled from "styled-components";

export const Container = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid black; */
`;

export const Item = styled.div`
  background-color: #f0f0f0;
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
