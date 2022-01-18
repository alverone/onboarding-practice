import styled from "styled-components";

export const StyledEditUserButton = styled.button`
  -webkit-appearance: none;
  appearance: none;
  border: 3px solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  background-color: white;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  position: absolute;
  top: 12px;
  right: 58px;

  & img {
    width: auto;
    height: 100%;
    max-height: 22px;
  }
`;
