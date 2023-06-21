import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
      "Password should has lower, upper, nums"
    )
    .required("Password is required"),
  confirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirmation required"),

  framework: Yup.string()
    .oneOf(["react", "vue", "angular"], "Must select a valid framework")
    .required("Framework required"),
  terms: Yup.bool()
    .oneOf([true], "You musst accept the terms")
    .required("Required"),
});
