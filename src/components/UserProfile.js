import { Typography } from "@mui/material";
import { StyledUserProfile } from "./styled/UserProfile.styled";
import { removeUser } from "../features/userSlice";
import { useDispatch } from "react-redux";

export const UserProfile = ({ user, index }) => {
  const { lastName, firstName, email, country, bio } = user;
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(removeUser(index));
  }

  return (
    <StyledUserProfile onClick={handleClick}>
      <Typography variant="h4">
        {`${firstName} ${lastName}, ${country}`}
      </Typography>
      <Typography variant="h6">{`Contact: ${email}`}</Typography>
      {bio && <Typography variant="p">{`About me: ${bio}`}</Typography>}
    </StyledUserProfile>
  );
};