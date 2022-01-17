import { useFormikContext } from "formik";
import { StyledSubmitButton } from "./styled/SubmitButton.styled";

export const SubmitButton = ({ children, margined }) => {
  const { submitForm } = useFormikContext();

  return (
    <StyledSubmitButton onClick={submitForm} margined={margined}>
      {children}
    </StyledSubmitButton>
  );
};
