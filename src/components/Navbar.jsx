import logo from '../assets/Logo-Kasa-68.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar optimal-width">
      <img src={logo} alt="logo Kasa" className="logo" />
      <ul className="nav-links">
        <li><NavLink to="/">Accueil</NavLink></li>
        <li><NavLink to="/about">À Propos</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;

