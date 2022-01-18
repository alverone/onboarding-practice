import { Formik, Form } from "formik";
import { TextInput } from "./TextInput";
import { FlexRow } from "./FlexRow";
import { CountrySelect } from "./CountrySelect";
import { SubmitButton } from "./SubmitButton";
import { Button } from "./Button";
import { StyledMarginedFlexRow } from "./styled/FlexRow.styled";
import { StyledForm } from "./styled/Form.styled";
import { ModalCloseButton } from "./styled/ModalCloseButton.styled";

import { useUserWithID } from "../features/selectors/useUserWithID";
import { useDispatch } from "react-redux";
import { useProfileSchema } from "../features/useProfileSchema";
import { validateUserFetch } from "../features/userSlice";

export const EditUserForm = ({ modalHandler, id }) => {
  const dispatch = useDispatch();
  const user = useUserWithID(id);
  const ProfileSchema = useProfileSchema(false);

  const handleFormSubmission = (values, { setErrors }) => {
    const newUserData = { ...values, id: id };

    dispatch(
      validateUserFetch({
        user: newUserData,
        modalHandler: modalHandler,
        errorHandler: setErrors,
        postCase: "UPDATE",
      })
    );
  };

  const closeModal = () => modalHandler(false);

  return (
    <StyledForm>
      <Formik
        initialValues={user}
        validationSchema={ProfileSchema}
        onSubmit={handleFormSubmission}
      >
        <Form>
          <h1>Edit user</h1>
          <FlexRow>
            <TextInput name="firstName" label="First Name *" />
            <TextInput name="lastName" label="Last Name *" />
          </FlexRow>
          <TextInput name="email" label="Email *" />
          <TextInput name="age" label="Age *" type="number" />
          <CountrySelect name="country" initialValue={user.country} />
          <TextInput
            name="bio"
            label="Write something about yourself..."
            helperText="max 500 characters"
            rows="5"
            multiline
          />
          <StyledMarginedFlexRow spaceBetween>
            <Button warning onClick={closeModal}>
              Cancel
            </Button>
            <SubmitButton>Save</SubmitButton>
          </StyledMarginedFlexRow>
        </Form>
      </Formik>
      <ModalCloseButton onClick={closeModal}>
        <img src="./close-sign.png" alt="Close modal form" width="32" />
      </ModalCloseButton>
    </StyledForm>
  );
};
