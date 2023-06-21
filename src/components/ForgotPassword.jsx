import { useContext } from "react";
import { useFormik } from "formik";
import SignContext from "../context/SignContext";
import { forgotPasswordSchema } from "../schemas/forgotPasswordSchema";

const ForgotPassword = () => {
  const { setStep } = useContext(SignContext);

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);

    //Simula el envio de datos al "backend"
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("formulario enviado");

    //Tiene acceso a los datos del formulario
    console.log(`Se han enviado su password a la cuenta ${values.email}`);

    //Limpia el formulario
    actions.resetForm();
  };
  // Hook useFormik que permite manejar la info del formulario
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    onSubmit,
  });

  return (
    <main>
      <h3>Forgot Password?</h3>
      <div className="card">
        <form onSubmit={handleSubmit} autoComplete="off" noValidate>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              className={errors.email ? "error-forgot-input" : ""}
              type="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              autoFocus
            />
            {errors.email && <p className="error-msg">{errors.email}</p>}
          </fieldset>
          <button disabled={isSubmitting} type="submit">
            Remember me
          </button>
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
