import { Routes, Route } from "react-router-dom";

import Start from "./pages/PagesStart";
import Home from "./pages/pagesHome";
import Profile from "./pages/pagesProfile";

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
