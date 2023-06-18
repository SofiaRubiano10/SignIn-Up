import SingIn from "./components/SingIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";

import { useState } from "react";
import SignContext from "./context/SignContext";

function App() {
  const [step, setStep] = useState("signin");

  return (
    <SignContext.Provider value={{ step, setStep }}>
      <div className="container">
        {step === "signin" && <SingIn />}
        {step === "signup" && <SignUp />}
        {step === "forgot" && <ForgotPassword />}
      </div>
    </SignContext.Provider>
  );
}

export default App;
