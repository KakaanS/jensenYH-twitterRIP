import React, { useState } from "react";
import Login from "../components/componentsLogin";
import Signup from "../components/componentsSignup";
import ForgotPassword from "../components/componentsForgotPassword";
import "../css/Login-signup.css";

//CSS
import "../css/ForgotPassword.css";

const Start = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (form) => {
    setCurrentForm(form);
  };

  switch (currentForm) {
    case "login":
      return (
        <div className="App">
          <Login onFormSwitch={toggleForm} />
        </div>
      );
    case "signup":
      return (
        <div className="App">
          <Signup onFormSwitch={toggleForm} />
        </div>
      );
    case "forgotPassword":
      return (
        <div className="App">
          <ForgotPassword onFormSwitch={toggleForm} />
        </div>
      );
    default:
      return (
        <div className="App">
          <Login onFormSwitch={toggleForm} />
        </div>
      );
  }
};

export default Start;
