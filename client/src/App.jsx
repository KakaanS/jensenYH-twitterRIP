import { Routes, Route } from "react-router-dom";

import "./css/App.css";
import Start from "./pages/start";
import Home from "./pages/home";
import Profile from "./pages/profile";

function App() {
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

export default App;
