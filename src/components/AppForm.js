import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { TextInput } from "./TextInput";
import { FlexRow } from "./FlexRow";
import { CountrySelect } from "./CountrySelect";
import { SubmitButton } from "./SubmitButton";
import { ControlledCheckbox } from "./ControlledCheckbox";
import { postUserFetch } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { StyledForm } from "./styled/Form.styled";
import { v4 as uuid } from "uuid";
import { ModalCloseButton } from "./styled/ModalCloseButton.styled";

const ProfileSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  country: Yup.string().required("Required"),
  age: Yup.number().required("Required"),
  bio: Yup.string().max(500, "Bio must be shorter than 500 characters"),
  tos: Yup.boolean().oneOf([true], "Must accept Terms of Service").required(),
});

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

  const handleFormSubmission = (values, { setErrors }) => {
    const userData = { ...values, id: uuid() };
    dispatch(
      postUserFetch({
        user: userData,
        modalHandler: modalHandler,
        errorHandler: setErrors,
      })
    );
  };

  return (
    <StyledForm>
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
          <SubmitButton>Submit</SubmitButton>
        </Form>
      </Formik>
      <ModalCloseButton onClick={modalHandler}>
        <img src="./close-sign.png" alt="Close modal form" width="32" />
      </ModalCloseButton>
    </StyledForm>
  );
};
