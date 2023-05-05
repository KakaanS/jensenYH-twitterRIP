import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

//Pages import
import Start from "./pages/pagesStart";
import Home from "./pages/pagesHome";
import Profile from "./pages/pagesProfile";

//Context import
import { isUserLoggedInContext } from "./context/UserLoggedInContext";

//CSS import
import "./css/signUp.css";
import "./css/main.css";

function AuthenticatedRoutes() {
  const navigate = useNavigate();
  const [userLoggedIn, setUerLoggedIn, userNickname] = useContext(
    isUserLoggedInContext
  );

  useEffect(() => {
    async function redirectIfNotAuthenticated() {
      console.log("userLoggedIn22222", userLoggedIn);
      if (!userLoggedIn) {
        navigate("/");
      }
    }
    redirectIfNotAuthenticated();
  }, [navigate, userLoggedIn]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/profile/:username" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  return (
    <>
      <AuthenticatedRoutes />
    </>
  );
}

export default App;
