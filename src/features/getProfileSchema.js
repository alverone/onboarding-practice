import * as Yup from "yup";

export const getProfileSchema = (tos) => {
  if (tos) {
    return Yup.object().shape({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      country: Yup.string().required("Required"),
      age: Yup.number().required("Required"),
      bio: Yup.string().max(500, "Bio must be shorter than 500 characters"),
      tos: Yup.boolean()
        .oneOf([true], "Must accept Terms of Service")
        .required(),
    });
  } else {
    return Yup.object().shape({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      country: Yup.string().required("Required"),
      age: Yup.number().required("Required"),
      bio: Yup.string().max(500, "Bio must be shorter than 500 characters"),
    });
  }
};
