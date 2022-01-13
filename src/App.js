import { AppForm } from "./components/AppForm";
import { UserProfile } from "./components/UserProfile";
import { Header } from "./components/Header";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "./features/userSlice";
import { Modal } from "./components/styled/Modal.styled";
import { ProfileContainer } from "./components/styled/ProfileContainer.styled";

export default function App() {
  const { users, modal } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      <Header modalHandler={() => dispatch(toggleModal(true))} />
      <ProfileContainer>
        {users.map((user, index) => (
          <UserProfile user={user} key={user.id} index={index} />
        ))}
      </ProfileContainer>

      {modal && (
        <Modal>
          <AppForm modalHandler={() => dispatch(toggleModal(false))} />
        </Modal>
      )}
    </>
  );
}
