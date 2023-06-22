import { NavLink } from "react-router-dom";

import "../styles/Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">About Me</NavLink>
      <div className="navbar-right">
        <NavLink to="/resume">Resume</NavLink>
        <div>
          <a href="projects">Projects</a>
          <ul class="dropdown">
            <li>
              <NavLink to="/trackly">Track.ly</NavLink>
            </li>
            <li>
              <NavLink to="/carcar">CarCar</NavLink>
            </li>
            <li>
              <NavLink to="/healthgpt">HealthGPT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
