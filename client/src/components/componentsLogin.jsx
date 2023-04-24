import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  // const [ShowProfile, setShowProfile] = useState(false);

  const handleLogin = () => {
    // kalla på login
  };

  return (
    <>
      <input
        type="text"
        placeholder="Email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input type="text" placeholder="password" />
      <button onClick={handleLogin}>LOGIN</button>
    </>
  );
}

export default Login;
