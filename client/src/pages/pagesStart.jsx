import React, {useState} from "react";
import Login from "../components/componentsLogin";
import Signup from "../components/componentsSignup";
import ForgotPassword from "../components/componentsForgotPassword";
import "../css/Login-signup.css"

//CSS
import "../css/ForgotPassword.css";

const Start = () => {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : currentForm === "signup" ? (
        <Signup onFormSwitch={toggleForm} />
      ) : (
        <ForgotPassword onFormSwitch={toggleForm} />
      )}
    </div>
  );
};

export default Start;
