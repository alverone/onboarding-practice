import { StyledUserProfile } from "./styled/UserProfile.styled";
import { CloseButton } from "./styled/ModalCloseButton.styled";
import styled from "styled-components";

const StyledButton = styled.button`
  -webkit-appearance: none;
  appearance: none;
  border: 3px solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  background-color: white;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  position: absolute;
  top: 12px;
  right: 58px;

  & img {
    width: auto;
    height: 100%;
    max-height: 22px;
  }
`;

export const UserProfile = ({ user, modalHandler, idHandler }) => {
  const { lastName, firstName, email, country, bio, age } = user;

  const openModal = () => {
    idHandler(user.id);
    modalHandler(true);
  };

  return (
    <StyledUserProfile>
      <CloseButton>
        <img src="./close-sign.png" alt="Close modal form" width="36" />
      </CloseButton>
      <StyledButton onClick={openModal}>
        <img src="./pencil.png" alt="" />
      </StyledButton>
      <h2>{`${firstName} ${lastName}, ${age} years old`}</h2>
      <h3>{`Country: ${country}`}</h3>
      <h3>{`Contact: ${email}`}</h3>
      <p>{bio && `About user: ${bio}`}</p>
    </StyledUserProfile>
  );
};
