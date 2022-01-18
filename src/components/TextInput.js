import { StyledError } from "./styled/Error.styled";
import { StyledTextInput } from "./styled/TextInput.styled";
import { StyledTextarea } from "./styled/Textarea.styled";
import { StyledInputContainer } from "./styled/TextInput.styled";

import { useField } from "formik";
import { useRef, useEffect } from "react";

export const TextInput = ({
  name,
  type = "text",
  label,
  autofocus = false,
  multiline = false,
}) => {
  const [field, meta] = useField(name);
  const input = useRef(null);

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

  useEffect(() => {
    if (autofocus) {
      input.current?.focus();
    }
  }, [input, autofocus]);

  return (
    <StyledInputContainer>
      {multiline ? (
        <StyledTextarea {...config} rows="5" />
      ) : (
        <StyledTextInput ref={input} {...config} />
      )}
      {config.error && <StyledError>{config.helperText}</StyledError>}
    </StyledInputContainer>
  );
};
