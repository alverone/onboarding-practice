import { Formik, Form } from "formik";
import { TextInput } from "./TextInput";
import { FlexRow } from "./FlexRow";
import { CountrySelect } from "./CountrySelect";
import { SubmitButton } from "./SubmitButton";
import { ControlledCheckbox } from "./ControlledCheckbox";
import { StyledForm } from "./styled/Form.styled";
import { ModalCloseButton } from "./styled/ModalCloseButton.styled";

import { validateUserFetch } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { useProfileSchema } from "../features/useProfileSchema";

import { v4 as uuid } from "uuid";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  age: "",
  bio: "",
  tos: false,
};

export const AppForm = ({ modalHandler }) => {
  const dispatch = useDispatch();
  const ProfileSchema = useProfileSchema(true);

  const handleFormSubmission = (values, { setErrors }) => {
    const userData = { ...values, id: uuid() };

    dispatch(
      validateUserFetch({
        user: userData,
        modalHandler: () => modalHandler(false),
        errorHandler: setErrors,
        postCase: "ADD",
      })
    );
  };

  const closeModal = () => modalHandler(false);

  return (
    <StyledForm>
      <h1>Add user</h1>
      <Formik
        initialValues={initialState}
        validationSchema={ProfileSchema}
        onSubmit={handleFormSubmission}
      >
        <Form>
          <FlexRow>
            <TextInput name="firstName" label="First Name *" />
            <TextInput name="lastName" label="Last Name *" />
          </FlexRow>
          <TextInput name="email" label="Email *" />
          <TextInput name="age" label="Age *" type="number" />
          <CountrySelect name="country" />
          <TextInput
            name="bio"
            label="Write something about yourself..."
            helperText="max 500 characters"
            rows="5"
            multiline
          />
          <ControlledCheckbox name="tos" />
          <SubmitButton margined>Submit</SubmitButton>
        </Form>
      </Formik>
      <ModalCloseButton onClick={closeModal}>
        <img src="./close-sign.png" alt="Close modal form" width="32" />
      </ModalCloseButton>
    </StyledForm>
  );
};
