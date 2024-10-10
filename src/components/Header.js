import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
          <Link to="/" className='vanlife'>#VANLIFE</Link>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
  )
}
