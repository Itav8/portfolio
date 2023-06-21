import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
      <div>
        <NavLink to='/'>About Me</NavLink>
        <NavLink to='/resume'>Resume</NavLink>
      </div>
    </nav>
  )
}

export default Nav
