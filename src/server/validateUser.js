function validateUser({ firstName, lastName, email, age, country, bio, tos }) {
  const errors = {};
  const forbiddenCharsRegex = /[!@#$%^&*()_+=[\]{};':"\\|,.<>/?]+/;
  const emailRegex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  if (firstName.length > 30) {
    errors.firstName = "First name is too long";
  } else if (firstName.length < 2) {
    errors.firstName = "First name is too short";
  }
  if (isFinite(Number(firstName)) || forbiddenCharsRegex.test(firstName)) {
    errors.firstName = "Invalid name";
  }

  if (lastName.length > 30) {
    errors.lastName = "Last name is too long";
  } else if (lastName.length < 2) {
    errors.lastName = "Last name is too short";
  }
  if (isFinite(Number(lastName)) || forbiddenCharsRegex.test(lastName)) {
    errors.lastName = "Invalid name";
  }
  //test

  if (!emailRegex.test(email)) {
    errors.name = "Invalid email";
  } else if (!email.length) {
    errors.name = "Empty email field";
  }

  if (!isFinite(Number(age))) {
    errors.age = "Age must be a number";
  } else if (age < 18) {
    errors.age = "User must be 18 or older to use the Service";
  }

  if (isFinite(Number(country))) {
    errors.country = "Country must be a string";
  } else if (!country.length) {
    errors.country = "Country must be filled in";
  }

  if (bio.length > 500) {
    errors.bio = "Bio must be lesser than 500 symbols";
  }

  if (!tos) {
    errors.tos = "Terms of Service must be accepted";
  }

  const hasErrors = !(Object.keys(errors).length === 0);

  return { hasErrors, errors };
}

module.exports = validateUser;
