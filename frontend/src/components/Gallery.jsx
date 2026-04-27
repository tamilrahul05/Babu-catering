import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Play, Maximize2 } from 'lucide-react';
import './Gallery.css';
import meal1 from '../assets/images/featured_meal.jpg';
import hero from '../assets/images/hero.png';
import promoVideo from '../assets/video1.mp4';
import promoVideo2 from '../assets/video2.mp4';

const Gallery = () => {
  return (
    <section className="gallery-section section-padding">
      <div className="container">
        <div className="video-highlight section-padding">
          <div className="section-header">
            <h2>Our <span className="highlight">Event Highlights</span></h2>
            <p>Watch our premium catering service in action across different venues.</p>
          </div>
          
          <div className="video-grid">
            <div className="video-card">
              <div className="video-wrapper">
                <video src={promoVideo} autoPlay muted loop playsInline className="main-promo-video"></video>
                <div className="video-tag">Wedding Gala</div>
              </div>
              <div className="video-details">
                <h3>Grand Wedding Service</h3>
                <p>Experience the luxury of our full-service wedding catering.</p>
              </div>
            </div>

            <div className="video-card">
              <div className="video-wrapper">
                <video src={promoVideo2} autoPlay muted loop playsInline className="main-promo-video"></video>
                <div className="video-tag">Corporate Event</div>
              </div>
              <div className="video-details">
                <h3>Premium Corporate Buffet</h3>
                <p>Professional catering solutions for corporate gatherings and seminars.</p>
              </div>
            </div>
          </div>

          <div className="insta-footer-cta">
            <a href="https://www.instagram.com/babucatering/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Camera size={20} /> View More Reels on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
