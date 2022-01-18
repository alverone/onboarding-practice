import styled from "styled-components";

export const StyledH1 = styled.h1`
  font-size: 32px;
  line-height: 36px;
  margin: ${(props) => (props.margin ? props.margin : "0 0 36px")};
  font-family: Inter, Helvetica, sans-serif;
`;

export const StyledH2 = styled.h2`
  font-size: 24px;
  line-height: 28px;
  margin: ${(props) => (props.margin ? props.margin : "0 0 16px")};
  font-family: Inter, Helvetica, sans-serif;
`;

export const StyledH3 = styled.h3`
  font-size: 20px;
  line-height: 24px;
  margin: ${(props) => (props.margin ? props.margin : "0 0 12px")};
  font-family: Inter, Helvetica, sans-serif;
`;

export const StyledH4 = styled.h4`
  font-size: 18px;
  line-height: 20px;
  margin: ${(props) => (props.margin ? props.margin : "0 0 12px")};
  font-family: Inter, Helvetica, sans-serif;
`;
