import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowDown, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';
import video3 from '../../assets/video3.mp4';

const themes = [
  {
    id: 0,
    label: 'Royal Weddings',
    badge: 'Royal Marriage & Reception Special',
    title: 'Grand Wedding Banquets',
    description: 'Make your special day a royal affair. We craft exquisite multi-course wedding menus with grand live counters and traditional service.',
    video: video1,
    eventType: 'Wedding',
    plateCategory: 'Gold',
    startingPrice: '₹650/plate',
  },
  {
    id: 1,
    label: 'Corporate Events',
    badge: 'Professional Event Catering',
    title: 'Elite Corporate Buffets',
    description: 'Impress clients and colleagues with premium buffet catering. Sophisticated menus, executive presentations, and seamless logistics.',
    video: video2,
    eventType: 'Corporate',
    plateCategory: 'Silver',
    startingPrice: '₹400/plate',
  },
  {
    id: 2,
    label: 'Traditional Feasts',
    badge: 'Authentic Heritage Experience',
    title: 'Legacy Traditional Feasts',
    description: 'Savor the rich heritage of traditional flavours. Authentic recipes served on banana leaves with pure ingredients and warm hospitality.',
    video: video3,
    eventType: 'Wedding', // default category mapping for traditional feast
    plateCategory: 'Premium',
    startingPrice: '₹900/plate',
  }
];

const platePrices = {
  Silver: 400,
  Gold: 650,
  Premium: 900,
  Luxury: 1200
};

const Hero = () => {
  const [activeTheme, setActiveTheme] = useState(0);
  const [guests, setGuests] = useState(150);
  const [plateCategory, setPlateCategory] = useState('Gold');

  // Sync plate category choice with active theme on initial switch
  const handleThemeChange = (index) => {
    setActiveTheme(index);
    setPlateCategory(themes[index].plateCategory);
  };

  const handleTierChange = (tier) => {
    setPlateCategory(tier);
    const matchingTheme = themes.find(t => t.plateCategory === tier);
    if (matchingTheme) {
      setActiveTheme(matchingTheme.id);
    }
  };

  const getThemeTextClass = (id) => {
    switch (id) {
      case 0: return 'text-green-500';
      case 1: return 'text-zinc-500';
      case 2: return 'text-green-500';
      default: return 'text-green-500';
    }
  };

  const getThemeGradientClass = (id) => {
    switch (id) {
      case 0: return 'from-green-500 via-green-400 to-zinc-400';
      case 1: return 'from-zinc-400 via-zinc-350 to-green-500';
      case 2: return 'from-green-500 via-green-600 to-zinc-500';
      default: return 'from-green-500 to-zinc-400';
    }
  };

  const getTierTextColor = (tier) => {
    switch(tier) {
      case 'Silver': return 'text-slate-300';
      case 'Gold': return 'text-amber-400';
      case 'Premium': return 'text-orange-400';
      case 'Luxury': return 'text-fuchsia-400';
      default: return 'text-[#0DCD6A]';
    }
  };

  const getTierAccentClass = (tier) => {
    switch(tier) {
      case 'Silver': return 'accent-slate-400';
      case 'Gold': return 'accent-amber-500';
      case 'Premium': return 'accent-orange-500';
      case 'Luxury': return 'accent-fuchsia-500';
      default: return 'accent-green-500';
    }
  };

  const getTierCTAStyles = (tier) => {
    switch(tier) {
      case 'Silver':
        return 'bg-gradient-to-r from-slate-400 to-slate-500 hover:from-slate-500 hover:to-slate-600 text-black shadow-[0_10px_30px_rgba(148,163,184,0.3)]';
      case 'Gold':
        return 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black shadow-[0_10px_30px_rgba(245,158,11,0.3)]';
      case 'Premium':
        return 'bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-black shadow-[0_10px_30px_rgba(249,115,22,0.3)]';
      case 'Luxury':
        return 'bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 hover:from-fuchsia-600 hover:to-fuchsia-700 text-white shadow-[0_10px_30px_rgba(217,70,239,0.3)]';
      default:
        return 'bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black shadow-[0_10px_30px_rgba(13,205,106,0.3)]';
    }
  };

  const getCardBorderAndShadow = (tier) => {
    switch(tier) {
      case 'Silver':
        return 'border-slate-400/20 shadow-[0_30px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(148,163,184,0.05)]';
      case 'Gold':
        return 'border-amber-500/20 shadow-[0_30px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(245,158,11,0.05)]';
      case 'Premium':
        return 'border-orange-500/20 shadow-[0_30px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(249,115,22,0.05)]';
      case 'Luxury':
        return 'border-fuchsia-500/20 shadow-[0_30px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(217,70,239,0.05)]';
      default:
        return 'border-green-500/25 shadow-[0_30px_60px_rgba(0,0,0,0.6)]';
    }
  };

  const getCardCornerGradient = (tier) => {
    switch(tier) {
      case 'Silver': return 'from-slate-400/10 to-transparent';
      case 'Gold': return 'from-amber-500/10 to-transparent';
      case 'Premium': return 'from-orange-500/10 to-transparent';
      case 'Luxury': return 'from-fuchsia-500/10 to-transparent';
      default: return 'from-green-500/10 to-transparent';
    }
  };

  const calculatedPrice = guests * platePrices[plateCategory];

  const handleBookEstimate = () => {
    const inquiryData = {
      guests: guests,
      plateCategory: plateCategory,
      eventType: themes[activeTheme].eventType,
      source: 'hero_estimator'
    };
    localStorage.setItem('hero_inquiry', JSON.stringify(inquiryData));
    
    // Dispatch a custom event to notify ContactForm.jsx if it is already mounted
    window.dispatchEvent(new Event('hero_inquiry_updated'));

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-48 pb-24">
      
      {/* Video Background Panel */}
      <div className="absolute inset-0 z-0 bg-zinc-950 pointer-events-none overflow-hidden">
        <video 
          key={activeTheme}
          src={themes[activeTheme].video} 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        ></video>
      </div>

      {/* Left Vertical Dot Navigation (Venus Catering style) */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
        {themes.map((theme) => {
          const isActive = activeTheme === theme.id;
          return (
            <button
              key={theme.id}
              onClick={() => handleThemeChange(theme.id)}
              className={`rounded-full transition-all duration-500 focus:outline-none cursor-pointer ${
                isActive 
                  ? 'w-3 h-8 bg-green-500 shadow-[0_0_12px_rgba(13,205,106,0.8)]'
                  : 'w-3 h-3 bg-pure-white/30 hover:bg-pure-white/60'
              }`}
              title={theme.label}
              aria-label={`Go to slide ${theme.label}`}
            />
          );
        })}
      </div>

      {/* Hero Content (Centered Layout) */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center">
        

        
        {/* Badge / Welcome Text */}
        <div className="h-10 overflow-hidden mb-4">
          <AnimatePresence mode="wait">
            <motion.span 
              key={activeTheme}
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -15 }}
              className={`inline-flex items-center gap-2 text-xs md:text-sm font-bold tracking-[0.3em] uppercase ${getThemeTextClass(activeTheme)}`}
            >
              <Sparkles size={12} className="animate-pulse" />
              {themes[activeTheme].badge}
            </motion.span>
          </AnimatePresence>
        </div>
        
        {/* Main Headline */}
        <div className="min-h-[140px] sm:min-h-[180px] md:min-h-[220px] flex items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.h1 
              key={activeTheme}
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-playfair font-black text-pure-white leading-[1.08] drop-shadow-2xl"
            >
              Creating <span className={`text-transparent bg-clip-text bg-gradient-to-r ${getThemeGradientClass(activeTheme)} italic font-medium pr-1`}>Extraordinary</span> {themes[activeTheme].title.split(' ').slice(1).join(' ')}
            </motion.h1>
          </AnimatePresence>
        </div>
        
        {/* Subheadline */}
        <div className="min-h-[60px] mb-12">
          <AnimatePresence mode="wait">
            <motion.p 
              key={activeTheme}
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm sm:text-base md:text-lg text-[#E2E8F0] max-w-2xl font-outfit font-light tracking-wide leading-relaxed"
            >
              {themes[activeTheme].description}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Action Buttons (Pill-shaped with circle arrows) */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-md mx-auto">
          <button 
            onClick={handleBookEstimate}
            className="group w-full sm:w-auto border border-pure-white/30 text-pure-white hover:bg-pure-white/10 pl-8 pr-2 py-2 rounded-full flex items-center justify-between sm:justify-start gap-4 transition-all duration-300 cursor-pointer shadow-lg backdrop-blur-sm"
          >
            <span className="font-bold text-xs uppercase tracking-[0.2em]">Book Catering</span>
            <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-green-500 text-black shadow-[0_0_12px_rgba(13,205,106,0.5)]">
              <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>

          <Link to="/menu" className="w-full sm:w-auto">
            <button 
              className="group w-full sm:w-auto border border-pure-white/20 text-pure-white hover:bg-pure-white/10 pl-8 pr-2 py-2 rounded-full flex items-center justify-between sm:justify-start gap-4 transition-all duration-300 cursor-pointer shadow-lg backdrop-blur-sm"
            >
              <span className="font-bold text-xs uppercase tracking-[0.2em]">Explore Menus</span>
              <div className="w-10 h-10 rounded-full bg-pure-white/10 text-pure-white group-hover:bg-pure-white/20 flex items-center justify-center transition-all duration-300">
                <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </Link>
        </div>

      </div>

      {/* Centered Scroll Down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 cursor-pointer pointer-events-none select-none">
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-pure-white/60 mb-2.5 font-outfit">Scroll To Discover</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-8 h-8 rounded-full border border-pure-white/20 flex items-center justify-center text-pure-white bg-pure-white/5 backdrop-blur-sm"
        >
          <ArrowDown size={14} />
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
