import { useField } from "formik";
import { StyledError } from "./styled/Error.styled";
import { StyledTextInput } from "./styled/TextInput.styled";
import { StyledTextarea } from "./styled/Textarea.styled";
import { StyledInputContainer } from "./styled/TextInput.styled";

export const TextInput = ({
  name,
  type = "text",
  label,
  multiline = false,
}) => {
  const [field, meta] = useField(name);

  const config = {
    ...field,
    placeholder: label,
    name: name,
    type: type,
  };

  if (meta?.touched && meta?.error) {
    config.error = true;
    config.helperText = meta.error;
  }

  return (
    <StyledInputContainer>
      {multiline ? (
        <StyledTextarea {...config} rows="5" />
      ) : (
        <StyledTextInput {...config} />
      )}
      {config.error && <StyledError>{config.error}</StyledError>}
    </StyledInputContainer>
  );
};
