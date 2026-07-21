import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowDown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

import homeImage from '@/assets/home image.png';
import homeImage2 from '@/assets/home image 2.png';

const themes = [
  {
    id: 0,
    label: 'Royal Weddings',
    badge: 'High Class Caterers',
    title: 'Grand Wedding Banquets',
    description: 'Make your special day a royal affair. We craft exquisite multi-course wedding menus with grand live counters and traditional service.',
    image: homeImage,
    eventType: 'Wedding',
    plateCategory: 'Gold',
    startingPrice: '₹650/plate',
  },
  {
    id: 1,
    label: 'Traditional Feasts',
    badge: 'High Class Caterers',
    title: 'Legacy Traditional Feasts',
    description: 'Savor the rich heritage of traditional flavours. Authentic recipes served on banana leaves with pure ingredients and warm hospitality.',
    image: homeImage2,
    eventType: 'Wedding',
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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTheme((prev) => (prev + 1) % themes.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleThemeChange = (index) => {
    setActiveTheme(index);
  };

  const getThemeTextClass = () => 'text-green-500';

  const handleBookEstimate = () => {
    const inquiryData = {
      guests: 150,
      plateCategory: themes[activeTheme].plateCategory,
      eventType: themes[activeTheme].eventType,
      source: 'hero_estimator'
    };
    localStorage.setItem('hero_inquiry', JSON.stringify(inquiryData));
    window.dispatchEvent(new Event('hero_inquiry_updated'));

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-48 pb-24">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0 bg-black pointer-events-none overflow-hidden">
        {themes.map((theme, index) => (
          <img
            key={theme.id}
            src={theme.image}
            alt={theme.title}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
              activeTheme === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60"></div>
      </div>

      {/* Left Vertical Navigation */}
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
                  : 'w-3 h-3 bg-white/30 hover:bg-white/60'
              }`}
              title={theme.label}
              aria-label={`Go to slide ${theme.label}`}
            />
          );
        })}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center">
        <div className="h-10 overflow-hidden mb-4">
          <AnimatePresence mode="wait">
            <motion.span 
              key={activeTheme}
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -15 }}
              className={`inline-flex items-center gap-2 text-xs md:text-sm font-bold tracking-[0.3em] uppercase ${getThemeTextClass()}`}
            >
              <Sparkles size={12} className="animate-pulse" />
              {themes[activeTheme].badge}
            </motion.span>
          </AnimatePresence>
        </div>
        
        <div className="mb-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-playfair font-black text-white leading-[1.08] drop-shadow-2xl">
            Kolathur Babu <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600 italic font-medium pr-1">Catering</span>
          </h1>
        </div>
        
        <div className="mb-10 max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.p 
              key={activeTheme}
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-[#E2E8F0] font-outfit font-light tracking-wide leading-relaxed"
            >
              {themes[activeTheme].description}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-md mx-auto">
          <button 
            onClick={handleBookEstimate}
            className="group w-full sm:w-auto border border-white/30 text-white hover:bg-white/10 pl-8 pr-2 py-2 rounded-full flex items-center justify-between sm:justify-start gap-4 transition-all duration-300 cursor-pointer shadow-lg backdrop-blur-sm"
          >
            <span className="font-bold text-xs uppercase tracking-[0.2em]">Book Catering</span>
            <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-green-500 text-black shadow-[0_0_12px_rgba(13,205,106,0.5)]">
              <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>

          <Link to="/menu" className="w-full sm:w-auto">
            <button 
              className="group w-full sm:w-auto border border-white/20 text-white hover:bg-white/10 pl-8 pr-2 py-2 rounded-full flex items-center justify-between sm:justify-start gap-4 transition-all duration-300 cursor-pointer shadow-lg backdrop-blur-sm"
            >
              <span className="font-bold text-xs uppercase tracking-[0.2em]">Explore Menus</span>
              <div className="w-10 h-10 rounded-full bg-white/10 text-white group-hover:bg-white/20 flex items-center justify-center transition-all duration-300">
                <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 cursor-pointer pointer-events-none select-none">
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/60 mb-2.5 font-outfit">Scroll To Discover</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/5 backdrop-blur-sm"
        >
          <ArrowDown size={14} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
