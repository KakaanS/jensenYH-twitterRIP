import React from "react";
import "../css/Sidebar.css";
import "../css/sidebarOption.css";

import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOptions from "./sidebarOptions";

import Logout from "./componentsLogout";
import SearchBar from "./componentSearchBar";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar--twitterIcon" />

      <SidebarOptions text="Home" />
      <SidebarOptions text="Profile" />
      <SearchBar />
      <Logout />
    </div>
  );
}

export default Sidebar;
