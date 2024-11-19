import logo from '../assets/Logo-Kasa-68.png';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="optimal-width">
      <div className='navbar'>
        <Link to="/">
          <img src={logo} alt="logo Kasa" className="logo" />
        </Link>
        <ul className="nav-links">
          <li><NavLink to="/">Accueil</NavLink></li>
          <li><NavLink to="/about">À Propos</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

