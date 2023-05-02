import Login from "../components/componentsLogin";
import Signup from "../components/componentsSignup";
import ForgotPassword from "../components/componentsForgotPassword";

//CSS
import "../css/ForgotPassword.css";

const Start = () => {
  return (
    <>
      <h1>Start</h1>
      <Login />
      <Signup />
      <ForgotPassword />
    </>
  );
};

export default Start;
