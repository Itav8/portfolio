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
        <div className="navbar-dropdown">
          <button
            className="navbar-dropbutton"
            onClick={toggleDropdown}
            onBlur={() => {
              console.log("blurred");
              setShowDropdown(false);
            }}
          >
            Projects
          </button>
          {showDropdown && (
            <div className="dropdown-content">
              <NavLink
                className="dropdown-content__project"
                to="/mimood"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  setShowDropdown(false);
                }}
              >
                MiMood
              </NavLink>
              <NavLink
                className="dropdown-content__project"
                to="/perfectlyplanned"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  setShowDropdown(false);
                }}
              >
                Perfectly Planned
              </NavLink>
              <NavLink
                className="dropdown-content__project"
                to="/healthgpt"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  setShowDropdown(false);
                }}
              >
                HealthGPT
              </NavLink>
              <NavLink
                className="dropdown-content__project"
                to="/carcar"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  setShowDropdown(false);
                }}
              >
                CarCar
              </NavLink>
              <NavLink
                className="dropdown-content__project"
                to="/trackly"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  setShowDropdown(false);
                }}
              >
                Track.ly
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
