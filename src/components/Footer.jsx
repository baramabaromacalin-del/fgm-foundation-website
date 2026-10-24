import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { logoImg } from '../assets/images';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-dark">
      <div className="container footer-container">
        <div className="footer-section brand">
          <div className="footer-logo-wrapper">
            <img src={logoImg} alt="AURA Foundation Logo" className="logo-img-footer" />
          </div>
          <p className="footer-mission">
            Eliminating Female Genital Mutilation: One Purposeful Step at a Time.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Facebook">FB</a>
            <a href="#" className="social-icon" aria-label="Twitter">X</a>
            <a href="#" className="social-icon" aria-label="Instagram">IG</a>
          </div>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/female-rights">Female Rights</Link></li>
            <li><Link to="/childrens-rights">Children's Rights</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Info</h3>
          <ul>
            <li><Mail size={18} /> info@aurafoundation.org</li>
            <li><MapPin size={18} /> 123 Hope Avenue, NY 10012</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} AURA Foundation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
