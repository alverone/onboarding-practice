import { countries } from "../countries";
import { StyledSelect } from "./styled/Select.styled";
import { StyledError } from "./styled/Error.styled";

import { useField, useFormikContext } from "formik";
import { useState } from "react";

export const CountrySelect = ({ name, initialValue = null }) => {
  const [country, setCountry] = useState(
    initialValue ? initialValue : "initial"
  );
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();
  const inputConfig = {};

  if (meta?.touched && meta?.error) {
    inputConfig.error = true;
    inputConfig.helperText = meta.error;
  }

  field.onChange = (e) => {
    const value = e.target.value;
    setCountry(value);
    setFieldValue(name, value);
  };

  return (
    <>
      <StyledSelect
        {...field}
        value={country}
        name={name}
        error={inputConfig.error}
      >
        <option disabled value="initial">
          Choose your country
        </option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </StyledSelect>
      {inputConfig.error && <StyledError>{inputConfig.helperText}</StyledError>}
    </>
  );
};
