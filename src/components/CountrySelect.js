import { Autocomplete, Box, TextField } from "@mui/material";
import { countries } from "../countries";
import { useFormikContext, useField } from "formik";
import { StyledCountrySelect } from "./styled/CountrySelect.styled";

export const CountrySelect = ({ name }) => {
  const formikProps = useFormikContext();
  const [field, meta] = useField(name);

  const inputConfig = {};

  if (meta?.touched && meta?.error) {
    inputConfig.error = true;
    inputConfig.helperText = meta.error;
  }

  return (
    <StyledCountrySelect>
      <Autocomplete
        name={name}
        options={countries}
        autoHighlight
        fullWidth={true}
        selectOnFocus
        getOptionLabel={(option) =>
          option && option.label ? option.label : ""
        }
        onChange={(e, value) =>
          formikProps.setFieldValue(
            "country",
            value && value.label ? value.label : ""
          )
        }
        renderOption={(props, option) => (
          <Box component="li" {...props}>
            {option.label && `${option.label}`}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            {...inputConfig}
            {...field}
            label="Choose a country"
            name={name}
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
    </StyledCountrySelect>
  );
};
