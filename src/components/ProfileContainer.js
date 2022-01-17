import { StyledProfileContainer } from "./styled/ProfileContainer.styled";
import { useState } from "react";
import { Modal } from "./styled/Modal.styled";
import { UserProfile } from "./UserProfile";
import { useUsers } from "../features/selectors/useUsers";
import { EditUserForm } from "./EditUserForm";

export const ProfileContainer = () => {
  const users = useUsers();
  const [isEditingUser, setUserEditing] = useState(false);
  const [currentUserID, setCurrentUserID] = useState(null);

  return (
    <StyledProfileContainer>
      {users.map((user) => (
        <UserProfile
          user={user}
          key={user.id}
          modalHandler={setUserEditing}
          idHandler={setCurrentUserID}
        />
      ))}
      {isEditingUser && (
        <Modal>
          <EditUserForm id={currentUserID} modalHandler={setUserEditing} />
        </Modal>
      )}
    </StyledProfileContainer>
  );
};
