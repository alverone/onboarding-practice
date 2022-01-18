import { AppForm } from "./components/AppForm";
import { UserProfile } from "./components/UserProfile";
import { Header } from "./components/Header";
import { Modal } from "./components/styled/Modal.styled";
import { ProfileContainer } from "./components/styled/ProfileContainer.styled";

import { useSelector } from "react-redux";
import { useState } from "react";
import { useUsers } from "./features/selectors/useUsers";

const App = () => {
  const [formModalVisibility, setFormModalVisibility] = useState(false);
  const users = useSelector(useUsers);

  return (
    <>
      <Header modalHandler={() => setFormModalVisibility(true)} />
      <ProfileContainer>
        {users.map((user, index) => (
          <UserProfile user={user} key={user.id} index={index} />
        ))}
      </ProfileContainer>

      {formModalVisibility && (
        <Modal>
          <AppForm modalHandler={() => setFormModalVisibility(false)} />
        </Modal>
      )}
    </>
  );
};

export default App;
