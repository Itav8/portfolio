import { NavLink } from "react-router-dom";
import { useState } from "react";

import profileImg from "../images/profileImg.png";

import "../styles/MobileNav.css";

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [showDropdown, setShowDropdown] = useState(false);

  // const toggleDropdown = () => {
  //   setShowDropdown(!showDropdown);
  // };

  return (
    <nav className="mobile-navbar">
      <NavLink className="mobile-navbar-home" to="/">
        <img className="mobile-navbar-profile" alt="profile" src={profileImg} />
        Italiz Vazquez
      </NavLink>
      <span
        onClick={() => setMenuOpen(!menuOpen)}
        className="mobile-navbar__hamburger"
      >
        menu
      </span>
      {menuOpen ? (
        <>
          <div
            className="mobile-navbar__close"
            onClick={() => setMenuOpen(false)}
          >
            x
          </div>
          {}
          {/* <div className="mobile-navbar-right">
            <NavLink to="/resume">Resume</NavLink>
            <div className="mobile-navbar-dropdown">
              <button
                className="mobile-navbar-dropbutton"
                onClick={toggleDropdown}
                onBlur={() => {
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
            </div> */}
          {/* </div> */}
        </>
      ) : null}
    </nav>
  );
};

export default MobileNav;
