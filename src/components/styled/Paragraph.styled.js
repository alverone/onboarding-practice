import styled from "styled-components";

export const StyledParagraph = styled.p`
  font-family: Inter, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 20px;
  margin: 0 0 12px;
  font-weight: ${(props) => (props.bold ? "500" : "400")};
`;
