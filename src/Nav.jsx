import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
      <div>
        <NavLink to='/'>About Me</NavLink>
        <NavLink to='/resume'>Resume</NavLink>
        <NavLink to='/trackly'>Track.ly</NavLink>
        <NavLink to='/carcar'>CarCar</NavLink>
        <NavLink to='/healthgpt'>HealthGPT</NavLink>
      </div>
    </nav>
  )
}

export default Nav
