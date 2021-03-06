import styled from "styled-components";

export const StyledTextarea = styled.textarea`
  border-radius: 6px 6px 0 0;
  background-color: white;
  border: 2px solid #e6e6e6;
  padding: 12px;
  border-bottom: 2px solid
    ${(props) => (props.error ? "rgba(255,0,0,0.7)" : "#ccc")};
  margin-top: 8px;
  width: 100%;

  &::placeholder {
    font-weight: 500;
    font-family: Inter, sans-serif;
    ${(props) => (props.error ? "color: rgba(255,0,0,0.8)" : "")}
  }

  &:active,
  &:focus {
    background-color: #f5f5f5;
    outline: none;
  }

  -webkit-appearance: none;
  appearance: none;
  resize: none;
`;
