import { NavLink } from "react-router-dom";

import "../styles/Nav.css";
import { useState } from "react";

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <NavLink to="/">About Me</NavLink>
      <div className="navbar-right">
        <NavLink to="/resume">Resume</NavLink>
        <div className="dropdown" onClick={toggleDropdown}>
          <button className="dropbutton">Projects</button>
          {showDropdown && (
            <div className="dropdown-content">
              <NavLink to="/trackly">Track.ly</NavLink>
              <NavLink to="/carcar">CarCar</NavLink>
              <NavLink to="/healthgpt">HealthGPT</NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
