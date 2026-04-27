import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import './Navbar.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.location.reload();
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'open' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="BABU Catering Logo" className="navbar-logo" />
        </Link>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''} onClick={() => setIsOpen(false)}>Menu</Link>
          <Link to="/booking" className={location.pathname === '/booking' ? 'active' : ''} onClick={() => setIsOpen(false)}>Pre-Booking</Link>
          <div className="nav-actions">
            {user ? (
              <div className="user-profile">
                <span className="user-name">Hi, {user.name.split(' ')[0]}</span>
                <button className="btn btn-outline" onClick={handleLogout}>
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline" onClick={() => setIsOpen(false)}>
                  <User size={18} />
                  Login
                </Link>
                <Link to="/booking" className="btn btn-primary" onClick={() => setIsOpen(false)}>
                  Book Now
                </Link>
              </>
            )}
          </div>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
