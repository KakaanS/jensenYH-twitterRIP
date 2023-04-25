import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  // const [ShowProfile, setShowProfile] = useState(false);
  return (
    <>
      <input
        type="text"
        placeholder="Username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input type="text" placeholder="password" />
      <button>LOGIN</button>
    </>
  );
}

export default Login;
