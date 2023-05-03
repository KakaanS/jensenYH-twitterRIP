import React from 'react'
import "../css/Sidebar.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOptions from './sidebarOptions';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
//import SearchIcon from '@mui/icons-material/Search';
//import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className="sidebar">
      {/*Twitter*/}
      <TwitterIcon className="sidebar--twitterIcon" />

      <SidebarOptions active Icon={HomeIcon} text="Home"/>
      <SidebarOptions Icon={Person2Icon} text="Profile" />
      {/*<SidebarOptions Icon={SearchIcon} text="Explore"/>*/}
      

      
      {/*Button*/}
      {/*<Button>Tweet</Button>*/}

    </div>
  );
}

export default Sidebar

