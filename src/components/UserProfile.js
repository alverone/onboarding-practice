import { StyledUserProfile } from "./styled/UserProfile.styled";
import { CloseButton } from "./styled/ModalCloseButton.styled";
import { StyledEditUserButton } from "./styled/EditUserButton.styled";

export const UserProfile = ({ user, modalHandler, idHandler }) => {
  const { lastName, firstName, email, country, bio, age, id } = user;

  const openModal = () => {
    idHandler(id);
    modalHandler(true);
  };

  return (
    <StyledUserProfile>
      <CloseButton>
        <img src="./close-sign.png" alt="Delete user profile" width="36" />
      </CloseButton>
      <StyledEditUserButton onClick={openModal}>
        <img src="./pencil.png" alt="Edit user profile" />
      </StyledEditUserButton>
      <h1>{`${firstName} ${lastName}, ${age} years old`}</h1>
      <h3>{`Country: ${country}`}</h3>
      <h3>{`Contact: ${email}`}</h3>
      <p>{bio && `About user: ${bio}`}</p>
    </StyledUserProfile>
  );
};
