import { AppForm } from "./components/AppForm";
import { Header } from "./components/Header";
import { Modal } from "./components/styled/Modal.styled";
import { ProfileContainer } from "./components/ProfileContainer";
import { useState } from "react";

const App = () => {
  const [formModalVisibility, setFormModalVisibility] = useState(false);

  return (
    <>
      <Header modalHandler={() => setFormModalVisibility(true)} />
      <ProfileContainer />
      {formModalVisibility && (
        <Modal>
          <AppForm modalHandler={setFormModalVisibility} />
        </Modal>
      )}
    </>
  );
};

export default App;
