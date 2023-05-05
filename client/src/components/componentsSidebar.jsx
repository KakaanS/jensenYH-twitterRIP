import React from "react";
import "../css/Sidebar.css";

import { useNavigate } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOptions from "./sidebarOptions";
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";
//import SearchIcon from '@mui/icons-material/Search';
//import { Button } from '@mui/material';
import SearchBar from "./componentSearchBar";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      {/*Twitter*/}
      <TwitterIcon className="sidebar--twitterIcon" />

      <SidebarOptions active Icon={HomeIcon} text="Home" />
      <SidebarOptions Icon={Person2Icon} text="Profile" />
      <SearchBar />
    </div>
  );
}

export default Sidebar;
