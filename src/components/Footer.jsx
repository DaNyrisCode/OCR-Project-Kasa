import logo from '../assets/Logo-Kasa-wht-39.png';

const Footer = () => {
    return (
        <div className='footer'>
            <img src={logo} alt="logo Kasa" />
            <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer