import styled from "styled-components";

export const StyledButton = styled.button`
  align-self: flex-start;
  display: block;
  border: 0px solid transparent;
  background-color: #1a79ff;
  color: white;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: 135ms ease-in-out;
  -webkit-appearance: none;
  appearance: none;

  &:hover {
    background-color: #0062eb;
  }
  &:active {
    background-color: #025ede;
  }
`;

export const StyledSubmitButton = styled(StyledButton)`
  margin-top: 32px;
`;
