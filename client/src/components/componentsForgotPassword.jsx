import { useState } from "react";
import { forgotPassword } from "../functions/functionsForgotPassword.js";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordResetSuccessful, setPasswordResetSuccessful] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await forgotPassword(email, nickname, newPassword);
    console.log(result);
    if (result) {
      setPasswordResetSuccessful(true);
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
          className="forgotPasswordInput"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="forgotPasswordInput"
          type="text"
          placeholder="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
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
      {passwordResetSuccessful && (
        <div className="forgotPasswordContainer2">
          <p className="forgotPasswordDisplay">Your password has been reset.</p>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
