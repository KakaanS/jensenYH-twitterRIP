import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./css/main.css";
import Start from "./pages/PagesStart";
import Home from "./pages/pagesHome";
import Profile from "./pages/pagesProfile";
import { checkAuth } from "./functions/functionsToken";

function AuthenticatedRoutes() {
  useEffect(() => {
    checkAuth();
    console.log("checkAuth");
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
      </Routes>
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
