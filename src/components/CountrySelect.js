import { countries } from "../countries";
import { useField } from "formik";
import { StyledCountrySelect } from "./styled/CountrySelect.styled";
import { StyledSelect } from "./styled/Select.styled";
import { StyledError } from "./styled/Error.styled";

export const CountrySelect = ({ name }) => {
  const [field, meta] = useField(name);
  const inputConfig = {};

  if (meta && meta.touched && meta.error) {
    inputConfig.error = true;
    inputConfig.helperText = meta.error;
  }

  return (
    <StyledCountrySelect>
      <StyledSelect {...field} name={name}>
        <option hidden selected>
          Choose your country
        </option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </StyledSelect>
      {inputConfig.error && <StyledError>{inputConfig.helperText}</StyledError>}
    </StyledCountrySelect>
  );
};
