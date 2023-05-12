import react, { useContext, useState, useEffect } from "react";
import { checkPasswordMatch } from "../functions/functionsSignup.js";
import "../css/Login-signup.css";

const SignUp = ({ onFormSwitch }) => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [employment, setEmployment] = useState("");
  const [hometown, setHometown] = useState("");
  const [profilePicture, setProfilePicture] = useState([]);
  const [webbpage, setWebbpage] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const [correctFile, setCorrectFile] = useState(true);
  // Använd form data istället för att skicka in alla dessa värden som props

  const theConnector = import.meta.env.VITE_API_URL;
  // `${theConnector}`

  const submitHandler = (e) => {
    e.preventDefault();

    if (!checkPasswordMatch(password, confirmPassword)) {
      setPasswordMatchError(true);
      return;
    }
    setPasswordMatchError(false);

    const formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("name", name);
    formData.append("about", about);
    formData.append("employment", employment);
    formData.append("hometown", hometown);
    formData.append("webbpage", webbpage);
    formData.append("profilePicture", profilePicture);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    fetch(`${theConnector}/user/signup`, {
      //
      method: "POST",
      body: formData,
    })
      .then((response) => response.status)
      .then((status) => {
        if (status === 415) {
          setCorrectFile(false);
        } else if (status === 201) {
          setCorrectFile(true);
          onFormSwitch("login");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const WrongFileFormate = () => {
    if (correctFile) {
      return <></>;
    } else {
      return <p className="password-error">Wrong file format!</p>;
    }
  };

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const passwordClassName = passwordMatchError
    ? "inputPassword error"
    : "inputPassword";

  return (
    <div className="auth-form-container">
      <h2 className="h2-login">Sign Up</h2>

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
        <label htmlFor="profilePicture">profilePicture (.png)</label>

        <input type="file" id="myFileInput" onChange={handleFileChange} />
        <WrongFileFormate />
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
      <button className="link-btn" onClick={() => onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};

export default SignUp;
