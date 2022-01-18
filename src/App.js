import { AppForm } from "./components/AppForm";
import { Header } from "./components/Header";
import { Modal } from "./components/styled/Modal.styled";
import { useState } from "react";
import { UserProfiles } from "./components/UserProfiles";

const App = () => {
  const [formModalVisibility, setFormModalVisibility] = useState(false);

  return (
    <>
      <Header modalHandler={() => setFormModalVisibility(true)} />
      <UserProfiles />
      {formModalVisibility && (
        <Modal>
          <AppForm modalHandler={() => setFormModalVisibility(false)} />
        </Modal>
      )}
    </>
  );
};

export default App;
