import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../images/logo.jpg'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo-container">
          <img src={Logo} alt="Murianzi Adventures" className="logo-img" />
          <Link to="/" className="logo">
            <span className="airplane-icon">✈️</span>
            <span className="logo-text">
              MURIANZI <span className="highlight">AFRICAN ADVENTURES</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <NavLink to="/" className="nav-link" end>Home</NavLink>
          <NavLink to="/PackagesPage" className="nav-link">Destinations</NavLink>
          <NavLink to="/ThemedHolidaysPage" className="nav-link">Themed Holiday</NavLink>
          <NavLink to="/Corporates" className="nav-link">Corporates</NavLink>
          <NavLink to="/Local" className="nav-link">Local Destinations</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)} end>Home</NavLink>
        <NavLink to="/Destinations" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Destinations</NavLink>
        <NavLink to="/ThemedHoliday" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Themed Holiday</NavLink>
        <NavLink to="/Corporates" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Corporates</NavLink>
        <NavLink to="/Local" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Local Destinations</NavLink>
        <NavLink to="/about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
        <NavLink to="/contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
      </div>
    </header>
  );
};

export default Header;