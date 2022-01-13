import { Button } from "@mui/material";
import { useFormikContext } from "formik";
import { StyledButton } from "./styled/SubmitButton.styled";

export function SubmitButton({ children, ...otherProps }) {
  const { submitForm } = useFormikContext();

  const config = {
    ...otherProps,
    variant: "contained",
    color: "primary",
    onClick: submitForm,
  };

  return (
    <StyledButton>
      <Button {...config}>{children}</Button>
    </StyledButton>
  );
}
