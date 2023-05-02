import React from 'react'
import '../css/sidebarOption.css'

function SidebarOptions({active, text ,Icon}) {
  return (
    <div className={`sidebarOption ${active && "sidebarOptions--active"}`}>
    <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOptions

