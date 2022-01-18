import styled from "styled-components";

export const StyledTextInput = styled.input`
  border-radius: 6px 6px 0 0;
  background-color: white;
  border: 2px solid #e6e6e6;
  border-bottom: 2px solid
    ${(props) => (props.error ? "rgba(255,0,0,0.7)" : "#ccc")};
  margin: 8px 0;
  padding: 16px 12px;
  width: 100%;
  transition: 175ms ease;

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
