import { StyledUserProfile } from "./styled/UserProfile.styled";
import { CloseButton } from "./styled/ModalCloseButton.styled";
import { ContentEditable } from "./ContentEditable";
import { StyledMarginedFlexRow } from "./styled/FlexRow.styled";
import { Button } from "./Button";
import { useState } from "react";
import { updateUser } from "../features/userSlice";
import { useDispatch } from "react-redux";

export const UserProfile = ({ user, index }) => {
  const [bio, setBio] = useState(user.bio);
  const [lastName, setLastName] = useState(user.lastName);
  const [firstName, setFirstName] = useState(user.firstName);
  const [email, setEmail] = useState(user.email);
  const [country, setCountry] = useState(user.country);
  const [age, setAge] = useState(user.age);
  const dispatch = useDispatch();

  const hasValuesChanged = () => {
    if (
      bio !== user.bio ||
      lastName !== user.lastName ||
      firstName !== user.firstName ||
      email !== user.email ||
      country !== user.country ||
      Number(age) !== user.age
    ) {
      return true;
    } else {
      return false;
    }
  };

  const cancelChanges = () => {
    setBio(user.bio);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setAge(user.age);
    setCountry(user.country);
    setEmail(user.email);
  };

  const commitChanges = () => {
    const updatedUser = {
      firstName,
      lastName,
      country,
      age,
      email,
      bio,
      id: user.id,
    };

    dispatch(updateUser({ index: index, userData: updatedUser }));
  };

  return (
    <StyledUserProfile>
      <CloseButton>
        <img src="./close-sign.png" alt="Close modal form" width="32" />
      </CloseButton>
      <div>
        <ContentEditable state={firstName} stateHandler={setFirstName} />
        <ContentEditable state={lastName} stateHandler={setLastName} />
        <span>, </span>
        <ContentEditable state={age.toString()} stateHandler={setAge} />
        <span>years old</span>
      </div>
      <div>
        <span>Country: </span>
        <ContentEditable state={country} stateHandler={setCountry} />
      </div>
      <div>
        <span>Contact: </span>
        <ContentEditable state={email} stateHandler={setEmail} />
      </div>

      <div>
        <span>About user: </span>
        <ContentEditable state={bio} stateHandler={setBio} />
      </div>
      {hasValuesChanged() && (
        <StyledMarginedFlexRow>
          <Button warning onClick={cancelChanges}>
            Cancel
          </Button>
          <Button onClick={commitChanges}>Save changes</Button>
        </StyledMarginedFlexRow>
      )}
    </StyledUserProfile>
  );
};
