import React from "react";
import "../css/sidebarOption.css";

import { useNavigate } from "react-router-dom";

function SidebarOptions({ active, text, Icon }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (text === "Profile") {
      navigate(`/profile/Simon`);
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
