import { Typography } from "@mui/material";
import { StyledUserProfile } from "./styled/UserProfile.styled";
import { CloseButton } from "./styled/ModalCloseButton.styled";

export const UserProfile = ({ user }) => {
  const { lastName, firstName, email, country, bio, age } = user;

  return (
    <StyledUserProfile>
      <CloseButton>
        <img src="./close-sign.png" alt="Close modal form" width="32" />
      </CloseButton>
      <Typography variant="h4">{`${firstName} ${lastName}, ${age}`}</Typography>
      <Typography variant="h6">{`Country: ${country}`}</Typography>
      <Typography variant="h6">{`Contact: ${email}`}</Typography>
      {bio && <Typography variant="p">{`About me: ${bio}`}</Typography>}
    </StyledUserProfile>
  );
};
