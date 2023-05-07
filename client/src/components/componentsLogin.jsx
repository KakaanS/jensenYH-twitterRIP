import React, { useState } from "react";
import { login } from "../functions/functionsLogin.js";
import { useNavigate } from "react-router-dom";
import "../css/Login-signup.css";

function Login({ onFormSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    login(email, password)
      .then((token) => {
        localStorage.setItem("token", token);

        navigate("/home");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="auth-form-container">
      <h2 className="h2-login">Login</h2>
      <form className="login-form">
        <label htmlFor="email">email</label>
        <input
          type="text"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value); //
          }}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button onClick={handleLogin}>LOGIN</button>
      </form>
      <button className="link-btn" onClick={() => onFormSwitch("signup")}>
        {" "}
        Don't have an account? Register here.
      </button>
      <button
        className="link-btn"
        onClick={() => onFormSwitch("forgotPassword")}
      >
        {" "}
        Forgot password? Change it here.
      </button>
    </div>
  );
}

export default Login;
