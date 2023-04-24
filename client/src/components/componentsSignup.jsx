import react, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContextProvider";

const SignUp = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [employment, setEmployment] = useState("");
  const [hometown, setHometown] = useState("");
  const [webbpage, setWebbpage] = useState("");

  const { signup } = useContext(UserContext);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

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

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={submitHandler}>
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
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
