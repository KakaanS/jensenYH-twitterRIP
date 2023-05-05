import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../functions/functionsForgotPassword.js";
import "../css/Login-signup.css";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordResetSuccessful, setPasswordResetSuccessful] = useState(false);
  const [passwordResetUnsuccessful, setPasswordResetUnsuccessful] =
    useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [nicknameValid, setNicknameValid] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await forgotPassword(email, nickname, newPassword);
    console.log(result);
    if (result === true) {
      setPasswordResetSuccessful(true);
      navigate("/");
      console.log("Password reset successful, redirected to Login");
    } else {
      setEmailValid(false);
      setNicknameValid(false);
      setPasswordResetUnsuccessful(true);
      console.log("Password reset failed");
    }
  };

  return (
    <div className="auth-form-container">
      <h2>ForgotPassword</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="forgotPasswordLabel">
          Enter your email and nickname to recover your password
        </label>
        <br />
        <label htmlFor="email">email</label>
        <input
          className={`forgotPasswordInput ${!emailValid ? "invalid" : ""}`}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailValid(true);
          }}
        />
        <label htmlFor="nickname">nickname</label>
        <input
          className={`forgotPasswordInput ${!nicknameValid ? "invalid" : ""}`}
          type="text"
          placeholder="nickname"
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
            setNicknameValid(true);
          }}
        />
        <label htmlFor="password">password</label>
        <input
          className="forgotPasswordInput"
          type="password"
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button className="forgotPasswordBtn" type="submit">
          Submit
        </button>
      </form>
      <div className="forgotPasswordContainer2">
        {passwordResetSuccessful && (
          <p className="forgotPasswordDisplay">Your password has been reset.</p>
        )}
        {passwordResetUnsuccessful && (
          <p className="forgotPasswordDisplay">Incorrect email or nickname.</p>
        )}
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("login")}
        >
          You remembered your pasword? Login here.
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
