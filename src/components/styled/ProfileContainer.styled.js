import styled from "styled-components";

export const StyledProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  & > div:not(:first-child) {
    margin-top: 16px;
  }
`;
