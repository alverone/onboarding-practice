import styled from "styled-components";

const StyledInput = styled.input.attrs({ type: "text" })`
  margin-left: ${(props) => (props.margin ? "8" : "0")}px;
  border: 1px solid transparent;
  background-color: transparent;
  border-radius: 4px;
  padding: 2px 0 2px 2px;
  font-family: Inter, sans-serif;
  width: ${(props) => `${props.value.length + 1}ch`};
  color: white;
  font-size: 18px;
  line-height: 18px;
  font-weight: 400;
  font-family: Inconsolata, Menlo, Monaco, monospace;

  &:focus {
    border: 1px solid white;
    outline: none;
  }
`;

export const ContentEditable = ({
  state,
  stateHandler,
  isMargined = false,
}) => {
  const handleChange = (e) => {
    //e.target.style.width = e.target.value + 1 + "ch"; // dynamically change input width based on amount of chars

    stateHandler(e.target.value);
  };

  return (
    <StyledInput onInput={handleChange} value={state} margin={isMargined} />
  );
};
