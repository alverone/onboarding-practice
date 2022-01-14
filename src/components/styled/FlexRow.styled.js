import styled from "styled-components";

export const StyledFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  width: 100%;
  justify-content: ${(props) =>
    props.spaced ? "space-between" : "flex-start"};

  & div:first-child {
    margin-right: 16px;
  }
`;
