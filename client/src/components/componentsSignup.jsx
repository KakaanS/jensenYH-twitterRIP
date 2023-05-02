import react, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkPasswordMatch } from "../functions/functionsSignup.js";

const SignUp = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [employment, setEmployment] = useState("");
  const [hometown, setHometown] = useState("");
  const [webbpage, setWebbpage] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!checkPasswordMatch(password, confirmPassword)) {
      setPasswordMatchError(true);
      return;
    }
    setPasswordMatchError(false);

    fetch("http://localhost:3002/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nickname,
        email,
        password,
        name,
        about,
        employment,
        hometown,
        webbpage,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate("/");
        console.log("user redirected to login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const passwordClassName = passwordMatchError
    ? "inputPassword error"
    : "inputPassword";

  return (
    <div className="signUpContainer">
      <h1>Sign Up</h1>
      <form className="signUpForm" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="about"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
        <input
          type="text"
          placeholder="employment"
          value={employment}
          onChange={(e) => setEmployment(e.target.value)}
        />
        <input
          type="text"
          placeholder="hometown"
          value={hometown}
          onChange={(e) => setHometown(e.target.value)}
        />
        <input
          type="text"
          placeholder="webbpage"
          value={webbpage}
          onChange={(e) => setWebbpage(e.target.value)}
        />

        <input
          className={passwordClassName}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className={passwordClassName}
          type="password"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirm(e.target.value)}
        />
        {passwordMatchError && (
          <p className="password-error">Passwords do not match.</p>
        )}

        <button className="signUpBtn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
