import React, { useContext } from "react";
import "../css/sidebarOption.css";
import { isUserLoggedInContext } from "../context/UserLoggedInContext.jsx";
import { useNavigate } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";

function SidebarOptions({ active, text }) {
  const [userLoggedIn, setUserLoggedIn, userNickname] = useContext(
    isUserLoggedInContext
  );
  const navigate = useNavigate();

  const handleClick = () => {
    if (text === "Profile" && userLoggedIn) {
      navigate(`/profile/${userNickname}`);
    } else if (text === "Home") {
      navigate(`/home`);
    }
  };

  const chooseIcon = () => {
    if (text === "Home") {
      return <HomeIcon />;
    } else if (text === "Profile") {
      return <Person2Icon />;
    }
  };

  return (
    <div
      className={`sidebarOption ${active && "sidebarOptions--active"}`}
      onClick={handleClick}
    >
      {chooseIcon()}
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOptions;
