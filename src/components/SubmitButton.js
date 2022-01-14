import { useFormikContext } from "formik";
import { StyledSubmitButton } from "./styled/SubmitButton.styled";

export function SubmitButton({ children }) {
  const { submitForm } = useFormikContext();

  return (
    <StyledSubmitButton onClick={submitForm}>{children}</StyledSubmitButton>
  );
}
