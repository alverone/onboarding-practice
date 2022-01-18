import { StyledUserCard } from "./styled/UserCard.styled";
import { CloseButton } from "./styled/ModalCloseButton.styled";
import { StyledEditUserButton } from "./styled/EditUserButton.styled";
import { StyledH1, StyledH4 } from "./styled/Heading.styled";
import { StyledParagraph } from "./styled/Paragraph.styled";

export const UserCard = ({
  user,
  editUserModalHandler,
  deleteUserModalHandler,
  currentUserIdHandler,
}) => {
  const { lastName, firstName, email, country, bio, age, id } = user;

  const openUserEditModal = () => {
    currentUserIdHandler(id);
    editUserModalHandler(true);
  };

  return (
    <StyledUserCard>
      <CloseButton onClick={deleteUserModalHandler}>
        <img src="./close-sign.png" alt="Delete user profile" width="36" />
      </CloseButton>
      <StyledEditUserButton onClick={openUserEditModal}>
        <img src="./pencil.png" alt="Edit user profile" />
      </StyledEditUserButton>
      <StyledH1 margin="0 0 16px">{`${firstName} ${lastName}, ${age} years old`}</StyledH1>
      <StyledH4>{`Country: ${country}`}</StyledH4>
      <StyledH4>{`Contact: ${email}`}</StyledH4>

      {bio && (
        <>
          <StyledParagraph bold>About this user:</StyledParagraph>
          <StyledParagraph>{`${bio}`}</StyledParagraph>
        </>
      )}
    </StyledUserCard>
  );
};
