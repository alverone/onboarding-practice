import { StyledProfileContainer } from "./styled/ProfileContainer.styled";
import { Modal } from "./styled/Modal.styled";
import { UserCard } from "./UserCard";
import { EditUserForm } from "./EditUserForm";
import { StyledConfirmationModal } from "./styled/ConfirmationModal.styled";
import { StyledFlexRow } from "./styled/FlexRow.styled";
import { Button } from "./Button";

import { selectUsers } from "../features/selectors";
import { removeUser } from "../features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export const ProfileContainer = () => {
  const [isEditingUser, setUserEditing] = useState(false);
  const [currentUserID, setCurrentUserID] = useState(null);
  const [confirmationVisibility, setConfirmationVisibility] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const openConfirmationModal = () => setConfirmationVisibility(true);
  const closeConfirmationModal = () => setConfirmationVisibility(false);
  const fulfilConfirmationModal = (id) => {
    closeConfirmationModal();
    dispatch(removeUser(id));
  };

  return (
    <StyledProfileContainer>
      {users.map((user) => (
        <UserCard
          user={user}
          key={user.id}
          editUserModalHandler={setUserEditing}
          currentUserIdHandler={setCurrentUserID}
          deleteUserModalHandler={openConfirmationModal}
        />
      ))}
      {isEditingUser && (
        <Modal>
          <EditUserForm id={currentUserID} modalHandler={setUserEditing} />
        </Modal>
      )}
      {confirmationVisibility && (
        <Modal>
          <StyledConfirmationModal>
            <h2>Are you sure you want to delete this user?</h2>
            <StyledFlexRow spaced>
              <Button warning onClick={closeConfirmationModal}>
                Cancel
              </Button>
              <Button onClick={() => fulfilConfirmationModal(currentUserID)}>
                Proceed
              </Button>
            </StyledFlexRow>
          </StyledConfirmationModal>
        </Modal>
      )}
    </StyledProfileContainer>
  );
};
