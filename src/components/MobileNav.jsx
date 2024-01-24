import { NavLink } from "react-router-dom";
import { useState } from "react";

import profileImg from "../images/profileImg.png";

import "../styles/MobileNav.css";

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="mobile-navbar">
      <NavLink className="mobile-navbar-home" to="/">
        <img className="mobile-navbar-profile" alt="profile" src={profileImg} />
        Italiz Vazquez
      </NavLink>
      {menuOpen ? null : (
        <span
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-navbar__hamburger"
        >
          menu
        </span>
      )}
      {menuOpen ? (
        <>
          <div className="mobile-navbar__container">
            <div
              className="mobile-navbar__close"
              onClick={() => {
                setShowDropdown(false);
                setMenuOpen(false);
              }}
            >
              CLOSE
            </div>
            <div className="mobile-navbar-right">
              <div className="mobile-navbar-right__content">
                <NavLink onClick={() => setMenuOpen(false)} to="/resume">
                  Resume
                </NavLink>
                <div className="mobile-navbar-dropdown">
                  <div
                    className="mobile-navbar-dropbutton"
                    onClick={toggleDropdown}
                    onBlur={() => {
                      setShowDropdown(false);
                    }}
                  >
                    Projects
                  </div>
                  {showDropdown && (
                    <div className="mobile-dropdown-content">
                      <NavLink
                        className="mobile-dropdown-content__project"
                        to="/mimood"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => {
                          setShowDropdown(false);
                          setMenuOpen(false);
                        }}
                      >
                        MiMood
                      </NavLink>
                      <NavLink
                        className="mobile-dropdown-content__project"
                        to="/perfectlyplanned"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => {
                          setShowDropdown(false);
                          setMenuOpen(false);
                        }}
                      >
                        Perfectly Planned
                      </NavLink>
                      <NavLink
                        className="mobile-dropdown-content__project"
                        to="/healthgpt"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => {
                          setShowDropdown(false);
                          setMenuOpen(false);
                        }}
                      >
                        HealthGPT
                      </NavLink>
                      <NavLink
                        className="mobile-dropdown-content__project"
                        to="/carcar"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => {
                          setShowDropdown(false);
                          setMenuOpen(false);
                        }}
                      >
                        CarCar
                      </NavLink>
                      <NavLink
                        className="mobile-dropdown-content__project"
                        to="/trackly"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => {
                          setShowDropdown(false);
                          setMenuOpen(false);
                        }}
                      >
                        Track.ly
                      </NavLink>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </nav>
  );
};

export default MobileNav;
