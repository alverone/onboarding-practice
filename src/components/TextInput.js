import { TextField } from "@mui/material";
import { StyledTextInput } from "./styled/TextInput.styled.js";

import { useField } from "formik";

export const TextInput = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const config = {
    ...otherProps,
    ...field,
    variant: "outlined",
    fullWidth: true,
  };

  if (meta?.touched && meta?.error) {
    config.error = true;
    config.helperText = meta.error;
  }

  return (
    <StyledTextInput>
      <TextField {...config} />
    </StyledTextInput>
  );
};
