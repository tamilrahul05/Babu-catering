import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Share2, Globe } from 'lucide-react';
import './Footer.css';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="BABU Catering" className="footer-logo" />
            <p>Making weddings and events memorable since 2010. High-class catering services for your special moments.</p>
            <div className="social-links">
              <a href="https://www.instagram.com/babucatering/" target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /></a>
              <a href="https://www.instagram.com/babucatering/" target="_blank" rel="noopener noreferrer"><Share2 size={20} /></a>
              <a href="https://www.instagram.com/babucatering/" target="_blank" rel="noopener noreferrer"><Globe size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/menu">Our Menu</a></li>
              <li><a href="/booking">Pre-Booking</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li><Phone size={18} /> 9944769090</li>
              <li><Phone size={18} /> 9976379073</li>
              <li><Mail size={18} /> info@babucatering.com</li>
              <li><MapPin size={18} /> Kolathur, Tambaram, Valasarawakam</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BABU Catering. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
