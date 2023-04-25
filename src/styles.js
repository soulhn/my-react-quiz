import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Item = styled.div`
  background-color: #f0f0f0;
  border-radius: 4px;
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

export const SelectBox = styled.select`
  margin-bottom: 1rem;
  padding: 0.5rem;
`;
