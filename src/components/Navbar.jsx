import '../styles/main.css';
import logo from '../assets/Logo-Kasa-68.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo Kasa" className="logo" />
      <ul className="nav-links">
        <li><a href="/">Accueil</a></li>
        <li><a href="/apropos">À Propos</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

