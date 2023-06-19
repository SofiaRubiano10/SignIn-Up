import { useContext } from "react";
import { useFormik } from "formik";
import SignContext from "../context/SignContext";

const ForgotPassword = () => {
  const { setStep } = useContext(SignContext);
  // Hook useFormik que permite manejar la info del formulario
  const formik = useFormik({
    initialValues: {
      email: "",
    },
  });
  return (
    <main>
      <h3>Forgot Password?</h3>
      <div className="card">
        <form autoComplete="off">
          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoFocus
            />
            <p className="error">Valid email required</p>
          </fieldset>
          <button type="submit">Remember me</button>
        </form>
      </div>
      <p>
        Already have an account?{" "}
        <span
          onClick={() => {
            setStep("signin");
          }}
        >
          Sign in!
        </span>
      </p>
    </main>
  );
};

export default ForgotPassword;
