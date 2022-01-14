import { StyledProfileContainer } from "./styled/ProfileContainer.styled";
import { UserCard } from "./UserCard";
import { useUsers } from "../features/selectors/useUsers";
import { useState } from "react";
import { Modal } from "./styled/Modal.styled";
import { removeUser } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { StyledConfirmationModal } from "./styled/ConfirmationModal.styled";
import { StyledFlexRow } from "./styled/FlexRow.styled";
import { Button } from "./Button";

export const UserProfiles = () => {
  const [confirmationVisibility, setConfirmationVisibility] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const dispatch = useDispatch();
  const users = useUsers();

  const openConfirmationModal = () => setConfirmationVisibility(true);
  const closeConfirmationModal = () => setConfirmationVisibility(false);
  const fulfilConfirmationModal = (index) => {
    closeConfirmationModal();
    dispatch(removeUser(index));
  };

  return (
    <>
      <StyledProfileContainer>
        {users.map((user, index) => (
          <UserCard
            user={user}
            key={user.id}
            index={index}
            setUser={setSelectedUser}
            openModalHandler={openConfirmationModal}
            closeModalHandler={closeConfirmationModal}
          />
        ))}
      </StyledProfileContainer>
      {confirmationVisibility && (
        <Modal>
          <StyledConfirmationModal>
            <h2>Are you sure you want to delete this user?</h2>
            <StyledFlexRow spaced>
              <Button warning onClick={closeConfirmationModal}>
                Cancel
              </Button>
              <Button onClick={() => fulfilConfirmationModal(selectedUser)}>
                Proceed
              </Button>
            </StyledFlexRow>
          </StyledConfirmationModal>
        </Modal>
      )}
    </>
  );
};
