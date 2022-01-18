import { Checkbox } from "@mui/material";
import { StyledError } from "./styled/Error.styled.js";
import { useField, useFormikContext } from "formik";

export const ControlledCheckbox = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const config = {
    ...otherProps,
    ...field,
    variant: "primary",
    onChange: (e) => setFieldValue(name, e.target.checked),
  };

  const errorConfig = {
    error: false,
    helperText: "",
  };

  if (meta?.touched && meta?.error) {
    errorConfig.error = true;
    errorConfig.helperText = meta.error;
  }

  return (
    <label>
      <Checkbox {...config} label="Terms of Service" />I agree to Terms of
      Service
      {errorConfig.error && <StyledError>{errorConfig.helperText}</StyledError>}
    </label>
  );
};
