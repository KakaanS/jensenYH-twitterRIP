import { Routes, Route } from "react-router-dom";
import UserContextProvider from "./context/UserContextProvider";

// Pages import
import Start from "./pages/PagesStart";
import Home from "./pages/pagesHome";
import Profile from "./pages/pagesProfile";

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
