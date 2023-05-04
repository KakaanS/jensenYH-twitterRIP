import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Start from "./pages/pagesStart";
import Home from "./pages/pagesHome";
import Profile from "./pages/pagesProfile";
import { checkAuth } from "./functions/functionsToken";

import { CombinedContextProvider } from "./context/CombinedContextProvider";

//CSS import
import "./css/signUp.css";
import "./css/main.css";

function AuthenticatedRoutes() {
  const navigate = useNavigate();

  useEffect(() => {
    async function redirectIfNotAuthenticated() {
      const isAuth = await checkAuth();
      if (!isAuth) {
        navigate("/");
      }
    }
    redirectIfNotAuthenticated();
  }, [navigate]);

  return (
    <>
      <CombinedContextProvider>
        <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/profile/:username" element={<Profile />}></Route>
        </Routes>
      </CombinedContextProvider>
    </>
  );
}
function App() {
  return (
    <>
      <AuthenticatedRoutes />
    </>
  );
}

export default App;
