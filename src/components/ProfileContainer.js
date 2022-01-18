import { StyledProfileContainer } from "./styled/ProfileContainer.styled";
import { Modal } from "./styled/Modal.styled";
import { UserProfile } from "./UserProfile";
import { EditUserForm } from "./EditUserForm";

import { useUsers } from "../features/selectors/useUsers";
import { useState } from "react";

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
