import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { logoImg } from '../assets/images';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <img src={logoImg} alt="AURA Foundation Logo" className="logo-img" />
        </Link>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" className="nav-item" onClick={toggleMenu} end>Home</NavLink>
          <NavLink to="/about-us" className="nav-item" onClick={toggleMenu}>About Us</NavLink>
          <NavLink to="/female-rights" className="nav-item" onClick={toggleMenu}>Female Rights</NavLink>
          <NavLink to="/childrens-rights" className="nav-item" onClick={toggleMenu}>Children's Rights</NavLink>
          <NavLink to="/contact-us" className="nav-item" onClick={toggleMenu}>Contact Us</NavLink>
          <button className="btn-donate nav-donate-btn" onClick={() => {
            toggleMenu();
            window.location.hash = "#donate";
          }}>
            <Heart size={18} style={{ marginRight: '8px' }} /> Donate
          </button>
        </div>

        <div className="nav-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
