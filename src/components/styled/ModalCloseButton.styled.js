import styled from "styled-components";

export const ModalCloseButton = styled.div`
  font-size: 16px;
  line-height: 8px;
  font-weight: 700;
  font-family: Inter, sans-serif;
  background-color: white;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  top: -48px;
  right: -48px;

  & image {
    width: 32px;
    height: 32px;
  }
`;
