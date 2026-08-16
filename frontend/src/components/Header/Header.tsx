import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header id="site-header">
      <nav>
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
