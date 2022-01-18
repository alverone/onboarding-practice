import { StyledSubmitButton } from "./styled/SubmitButton.styled";
import { useFormikContext } from "formik";

export const SubmitButton = ({ children, margined }) => {
  const { submitForm } = useFormikContext();

  return (
    <StyledSubmitButton onClick={submitForm} margined={margined}>
      {children}
    </StyledSubmitButton>
  );
};
