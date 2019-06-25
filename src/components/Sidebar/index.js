import React from 'react';
import { Link } from 'react-router-dom'
import SidebarItem from './SidebarItem';
import './index.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <SidebarItem link="Genres" />
      </Link>
      <Link to="/albums">
        <SidebarItem link="Albums" />
      </Link>
      <Link to="/artists">
        <SidebarItem link="Artists" />
      </Link>
      <Link to="/songs">
        <SidebarItem link="Songs" />
      </Link>
    </div>
  )
}

export default Sidebar;