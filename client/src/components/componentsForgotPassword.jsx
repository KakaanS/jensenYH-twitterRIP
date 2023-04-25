import { useState } from "react";
import { forgotPassword } from "../functions/functionsForgotPassword.js";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPassword = await forgotPassword(email, nickname);
    if (newPassword) {
      setPassword(newPassword);
    } else {
      setPassword("No user found with that email and nickname");
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
        <button className="forgotPasswordBtn" type="submit">
          Submit
        </button>

        <div className="forgotPasswordContainer2">
          {password && (
            <p className="forgotPasswordDisplay">{`Your password is: ${password}`}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
