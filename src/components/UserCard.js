import { Typography } from "@mui/material";
import { StyledUserCard } from "./styled/UserCard.styled";
import { CloseButton } from "./styled/ModalCloseButton.styled";

export const UserCard = ({ user, openModalHandler, setUser }) => {
  const { lastName, firstName, email, country, bio, age, id } = user;

  const handleClick = () => {
    openModalHandler();
    setUser(id);
  };

  return (
    <StyledUserCard>
      <CloseButton onClick={handleClick}>
        <img src="./close-sign.png" alt="Close modal form" width="32" />
      </CloseButton>
      <Typography variant="h4">{`${firstName} ${lastName}, ${age}`}</Typography>
      <Typography variant="h6">{`Country: ${country}`}</Typography>
      <Typography variant="h6">{`Contact: ${email}`}</Typography>
      {bio && <Typography variant="p">{`About user: ${bio}`}</Typography>}
    </StyledUserCard>
  );
};
