import React, { useContext } from "react";
import "../css/sidebarOption.css";
import { isUserLoggedInContext } from "../context/UserLoggedInContext.jsx";
import { useNavigate } from "react-router-dom";

function SidebarOptions({ active, text, Icon }) {
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

  return (
    <div
      className={`sidebarOption ${active && "sidebarOptions--active"}`}
      onClick={handleClick}
    >
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOptions;
