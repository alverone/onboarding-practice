import styled from "styled-components";

export const CloseButton = styled.div`
  display: flex;
  background-color: white;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const ModalCloseButton = styled(CloseButton)`
  top: -48px;
  right: -48px;
`;
