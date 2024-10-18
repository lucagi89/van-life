import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616'
  }

  function fakeLogOut() {
    localStorage.removeItem("loggedin")
}

  return (
    <header>
      <nav>
          <NavLink to="/" className='vanlife'>#VANLIFE</NavLink>

          <NavLink to="/host"
            style={ ({isActive}) => isActive ? activeStyle : null} >
            Host
          </NavLink>

          <NavLink to="/about"
            style={ ({isActive}) => isActive ? activeStyle : null}>
            About
          </NavLink>

          <NavLink to="/vans"
            style={ ({isActive}) => isActive ? activeStyle : null}>
            Vans
          </NavLink>
          <NavLink to="/login">
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
          <button onClick={fakeLogOut}>X</button>
        </nav>
      </header>
  )
}
