import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";

import { useNavigate } from "react-router-dom";

function SidebarOptions({ active, text }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (text === "Profile") {
      navigate(`/profile/Simon`);
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
