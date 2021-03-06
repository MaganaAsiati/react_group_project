import React from 'react';
import { NavLink } from 'react-router-dom';
import planetLogo from '../../images/planet.png';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <div className="navbar-left">
        <img className="image-icn" src={planetLogo} alt="LOGO" />
        <h1 className="nav-title">Space Traveler&apos;s Hub</h1>
      </div>
      <div className="navbar-right">
        <NavLink
          to="/rockets"
          className={({ isActive }) => (isActive ? 'styled-link' : 'no-styled-link')}
        >
          Rockets
        </NavLink>
        <NavLink
          to="/missions"
          className={({ isActive }) => (isActive ? 'styled-link' : 'no-styled-link')}
        >
          Missions
        </NavLink>
        <hr className="border " />
        <NavLink
          to="/my-profile"
          className={({ isActive }) => (isActive ? 'styled-link' : 'no-styled-link')}
        >
          My Profile
        </NavLink>
      </div>
    </nav>
  );
}
