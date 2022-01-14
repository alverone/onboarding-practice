import { Typography } from "@mui/material";
import { StyledUserProfile } from "./styled/UserProfile.styled";
import { removeUser } from "../features/userSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CloseButton } from "./styled/ModalCloseButton.styled";
import { Modal } from "./styled/Modal.styled";

export const UserProfile = ({ user, index }) => {
  const { lastName, firstName, email, country, bio, age } = user;
  const [modalVisibility, setModalVisibility] = useState(false);
  const dispatch = useDispatch();

  const openConfirmationModal = () => {
    setModalVisibility(true);
  };

  const closeConfirmationModal = () => {
    setModalVisibility(false);
  };

  const handleClick = () => {
    dispatch(removeUser(index));
  };

  return (
    <StyledUserProfile>
      <CloseButton onClick={handleClick}>
        <img src="./close-sign.png" alt="Close modal form" width="32" />
      </CloseButton>
      <Typography variant="h4">{`${firstName} ${lastName}, ${age}`}</Typography>
      <Typography variant="h6">{`Country: ${country}`}</Typography>
      <Typography variant="h6">{`Contact: ${email}`}</Typography>
      {bio && <Typography variant="p">{`About me: ${bio}`}</Typography>}
    </StyledUserProfile>
  );
};
