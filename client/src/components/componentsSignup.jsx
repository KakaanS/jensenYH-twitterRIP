import react, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkPasswordMatch } from "../functions/functionsSignup.js";
import '../css/Login-signup.css';

const SignUp = (props) => {
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

    fetch("http://localhost:3002/user/signup", {//
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
    <div className="auth-form-container">
       <h2>Sign Up</h2>
      <form className="signUpForm" onSubmit={submitHandler}>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          placeholder="Name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="nickname">nickname</label>
        <input
          type="text"
          placeholder="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <label htmlFor="email">email</label>
        
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="about">about</label>
        <input
          type="text"
          placeholder="about"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
        <label htmlFor="employment">employment</label>
        <input
          type="text"
          placeholder="employment"
          value={employment}
          onChange={(e) => setEmployment(e.target.value)}
        />
        <label htmlFor="hometown">hometown</label>
        <input
          type="text"
          placeholder="hometown"
          value={hometown}
          onChange={(e) => setHometown(e.target.value)}
        />
        <label htmlFor="webpage">webpage</label>
        <input
          type="text"
          placeholder="webbpage"
          value={webbpage}
          onChange={(e) => setWebbpage(e.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          className={passwordClassName}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="repeatpassword">repeat password</label>
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
      <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
  );
};

export default SignUp;
