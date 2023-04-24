import React, { useState } from "react";
import { login } from "../functions/functionsLogin.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login(email, password)
      .then((token) => {
        localStorage.setItem("token", token);
        console.log(token, "successful Login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button onClick={handleLogin}>LOGIN</button>
    </>
  );
}

export default Login;
