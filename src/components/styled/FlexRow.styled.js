import styled from "styled-components";

export const StyledFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  width: 100%;
  & div:first-child {
    margin-right: 16px;
  }
`;

export const StyledMarginedFlexRow = styled(StyledFlexRow)`
  margin-top: 24px;
  justify-content: ${(props) =>
    props.spaceBetween ? "space-between" : "flex-start"};
`;
