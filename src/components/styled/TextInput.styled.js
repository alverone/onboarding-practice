import styled from "styled-components";

export const StyledTextInput = styled.input`
  border-radius: 4px 4px 0 0;
  background-color: white;
  border: 2px solid #eee;
  padding: 16px 12px;
  border-bottom: 2px solid
    ${(props) => (props.error ? "rgba(255,0,0,0.7)" : "#ccc")};
  margin: 8px 0;
  width: 100%;

  &::placeholder {
    font-weight: 400;
    font-family: Inter, sans-serif;
    ${(props) => (props.error ? "color: rgba(255,0,0,0.6)" : "")}
  }

  &:active,
  &:focus {
    background-color: #f5f5f5;
    outline: none;
  }

  -webkit-appearance: none;
  appearance: none;
`;

export const StyledInputContainer = styled.div`
  width: 100%;
`;
