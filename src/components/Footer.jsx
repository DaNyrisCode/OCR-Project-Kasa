import logo from '../assets/Logo-Kasa-wht-39.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <Link to="/">
            <img src={logo} alt="logo Kasa" />
            </Link>
            <p className='footer-text'>© 2020 Kasa. All <span className="footer-line-break">rights reserved</span></p>
        </div>
    );
}

export default Footer