import './Footer.css';
import { FaFacebook, FaInstagram, FaTiktok, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-section">
            <h3 className="company-name">YAC Investments Limited</h3>
            <div className="address">
              <p>YAC GROUP, JV29+FH6</p>
              <p>Tse Addo High Street, Accra</p>
            </div>
            <div className="contact-info">
              <p><strong>Phone:</strong> (+233)240-164-081</p>
              <p><strong>Email:</strong> info@yacinvestments.com</p>
            </div>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <FaTiktok />
              </a>
              <a href="#" className="social-icon">
                <FaFacebook />
              </a>
              <a href="#" className="social-icon">
                <FaInstagram />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="useful-links-title">Useful Links</h4>
            <ul className="useful-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About us</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p className="copyright">© Copyright 2025 YAC Investments Limited All Rights Reserved</p>
          {/* <p className="designed-by">Designed by <a href="#" className="designer-link">Innova Tech Hub</a></p> */}
        </div>
      </div>
      
      <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer; 