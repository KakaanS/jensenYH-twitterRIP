import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../functions/functionsForgotPassword.js";

const ForgotPassword = () => {
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
    <div className="forgotPasswordContainer1">
      <h1>ForgotPassword</h1>
      <form className="forgotPasswordForm" onSubmit={handleSubmit}>
        <label className="forgotPasswordLabel">
          Enter your email and nickname to recover your password
        </label>
        <br />
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
      </div>
    </div>
  );
};

export default ForgotPassword;
