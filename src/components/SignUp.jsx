import { useContext } from "react";
import SignContext from "../context/SignContext";
const SignUp = () => {
  const { setStep } = useContext(SignContext);
  return (
    <main>
      <h3>Welcome, join us!</h3>
      <div className="card">
        <form autoComplete="off">
          <fieldset>
            <label htmlFor="fullName">Full name</label>
            <input type="text" id="fullName" autoFocus />
            <p className="error">Required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <p className="error">Valid email required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <p className="error">Password required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" id="confirm" />
            <p className="error">Required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="framework">Favorite framework</label>
            <select id="framework">
              <option value="">Select your framework</option>
              <option value="react">React</option>
              <option value="vue">Vue</option>
              <option value="angular">Angular</option>
              <p className="error">Required</p>
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="terms">
              <input type="checkbox" id="terms" />
              Accept terms and conditions
              <p className="error">Required</p>
            </label>
          </fieldset>
          <button type="submit">Register</button>
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

export default SignUp;
