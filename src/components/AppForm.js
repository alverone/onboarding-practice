import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput } from "./TextInput";
import FlexRow from "./FlexRow";
import { CountrySelect } from "./CountrySelect";
import { SubmitButton } from "./SubmitButton";
import { ControlledCheckbox } from "./ControlledCheckbox";
import { postUserFetch } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { StyledForm } from "./styled/Form.styled";
import { v4 as uuid } from "uuid";

const ProfileSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  country: Yup.string().required("Required"),
  bio: Yup.string().max(500, "Bio must be shorter than 500 characters"),
  tos: Yup.boolean().oneOf([true], "Must accept Terms of Service").required(),
});

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  bio: "",
  tos: false,
};

export function AppForm({ modalHandler }) {
  const dispatch = useDispatch();

  return (
    <StyledForm>
      <Formik
        initialValues={initialState}
        validationSchema={ProfileSchema}
        onSubmit={(values) => {
          const userData = { ...values, id: uuid() };

          dispatch(postUserFetch(userData));
        }}
      >
        <Form>
          <FlexRow>
            <TextInput name="firstName" label="First Name*" />
            <TextInput name="lastName" label="Last Name*" />
          </FlexRow>
          <TextInput name="email" label="Email*" />
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
    </StyledForm>
  );
}
