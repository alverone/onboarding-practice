import { useField, useFormikContext } from "formik";
import { StyledError } from "./styled/Error.styled.js";
import { StyledCheckbox } from "./styled/Checkbox.styled.js";

export const ControlledCheckbox = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = (e) => setFieldValue(name, e.target.checked);

  const config = {
    ...otherProps,
    ...field,
    variant: "primary",
    onChange: handleChange,
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
      <StyledCheckbox type="checkbox" {...config} label="Terms of Service" />I
      agree to Terms of Service
      {errorConfig.error && <StyledError>{errorConfig.helperText}</StyledError>}
    </label>
  );
};
