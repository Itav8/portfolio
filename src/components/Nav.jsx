import { NavLink } from "react-router-dom";
import { useState } from "react";
import profileImg from "../images/IMG_3373.png";
import "../styles/Nav.css";

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <NavLink className="navbar-home" to="/">
        <img className="navbar-profile" alt="profile" src={profileImg} />
        Italiz Vazquez
      </NavLink>
      <div className="navbar-right">
        <NavLink to="/resume">Resume</NavLink>
        <div className="navbar-dropdown" onClick={toggleDropdown}>
          <button className="navbar-dropbutton">Projects</button>
          {showDropdown && (
            <div className="dropdown-content">
              <NavLink className="dropdown-content__project" to="/trackly">
                Track.ly
              </NavLink>
              <NavLink className="dropdown-content__project" to="/carcar">
                CarCar
              </NavLink>
              <NavLink className="dropdown-content__project" to="/healthgpt">
                HealthGPT
              </NavLink>
              <NavLink
                className="dropdown-content__project"
                to="/perfectlyplanned"
              >
                {" "}
                Perfectly Planned
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
