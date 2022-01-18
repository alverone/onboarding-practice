import styled from "styled-components";

export const StyledSelect = styled.select`
  width: 100%;
  border-radius: 4px 4px 0 0;
  background-color: white;
  border: 2px solid ${(props) => (props.error ? "rgba(255,0,0,0.7)" : "#ccc")};
  padding: 16px 12px;
  margin: 8px 0;
  width: 100%;
  cursor: pointer;
  transition: 175ms ease;

  &::placeholder {
    font-weight: 400;
    font-family: Inter, sans-serif;
    ${(props) => (props.error ? "color: rgba(255,0,0,0.6)" : "")}
  }

  &:hover {
    border: 2px solid black;
  }

  &:active,
  &:focus {
    background-color: #f5f5f5;
    outline: none;
  }
`;
