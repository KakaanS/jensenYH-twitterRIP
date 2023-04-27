import { Routes, Route } from "react-router-dom";
import { TrendsContextProvider } from "./context/TrendsContext";

import Start from "./pages/PagesStart";
import Home from "./pages/pagesHome";
import Profile from "./pages/pagesProfile";

//CSS import
import "./css/signUp.css";
import "./css/main.css";

function App() {
  return (
    <>
      <TrendsContextProvider>
        <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
        </Routes>
      </TrendsContextProvider>
    </>
  );
}

export default App;
