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
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-32 pb-24">
      
      {/* Video Background Panel */}
      <div className="absolute inset-0 z-0 bg-black pointer-events-none overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.video 
            key={activeTheme}
            src={themes[activeTheme].video} 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          ></motion.video>
        </AnimatePresence>
      </div>

      {/* Hero Content (Two-Column Layout) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Typography and Theme Switcher */}
        <div className="lg:col-span-7 flex flex-col text-left items-start">
          
          {/* Badge */}
          <div className="h-10 overflow-hidden mb-6">
            <AnimatePresence mode="wait">
              <motion.span 
                key={activeTheme}
                initial={{ opacity: 0, y: 15 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -15 }}
                className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-white/10 text-green-400 border border-white/20 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase shadow-lg backdrop-blur-md"
              >
                <Sparkles size={12} className="animate-pulse text-green-400" />
                {themes[activeTheme].badge}
              </motion.span>
            </AnimatePresence>
          </div>
          
          {/* Main Headline */}
          <div className="min-h-[160px] sm:min-h-[200px] md:min-h-[220px] flex items-center mb-6">
            <AnimatePresence mode="wait">
              <motion.h1 
                key={activeTheme}
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-6xl md:text-7xl font-playfair font-black text-[#FFFFFF] leading-[1.08] drop-shadow-2xl"
              >
                Creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39E18B] via-[#0DCD6A] to-[#09B35C] italic font-medium pr-1">Extraordinary</span> {themes[activeTheme].title.split(' ').slice(1).join(' ')}
              </motion.h1>
            </AnimatePresence>
          </div>
          
          {/* Subheadline */}
          <div className="min-h-[70px] mb-10">
            <AnimatePresence mode="wait">
              <motion.p 
                key={activeTheme}
                initial={{ opacity: 0, y: 15 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm sm:text-base md:text-lg text-[#E2E8F0] max-w-xl font-outfit font-light tracking-wide leading-relaxed"
              >
                {themes[activeTheme].description}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Dynamic Theme Selectors (Glassmorphic Tabs) */}
          <div className="flex flex-wrap gap-2.5 mb-10 bg-white/5 p-2 rounded-[20px] border border-white/10 backdrop-blur-md">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => handleThemeChange(theme.id)}
                className={`px-5 py-3 rounded-xl font-bold uppercase tracking-wider text-[10px] transition-all duration-300 ${
                  activeTheme === theme.id
                    ? 'bg-[#0DCD6A] text-[#676767] shadow-[0_8px_20px_rgba(0,177,79,0.3)] scale-105'
                    : 'text-[#FFFFFF] hover:bg-white/10 hover:text-[#0DCD6A]'
                }`}
              >
                {theme.label}
              </button>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/booking" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto btn-luxury-cta flex items-center justify-center gap-2 px-10 py-4.5 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-lg">
                Book Catering <ChevronRight size={16} className="relative z-10" />
              </button>
            </Link>
            <Link to="/menu" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 border border-white/15 text-[#FFFFFF] hover:bg-white/15 px-10 py-4.5 rounded-xl font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-md">
                Explore Menus
              </button>
            </Link>
          </div>

        </div>

        {/* Right Column: Culinary Quote Planner Card */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-zinc-900/60 border border-[rgba(0,177,79,0.25)] rounded-[2.5rem] p-8 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl w-full max-w-[440px] relative overflow-hidden text-left"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0DCD6A]/10 to-transparent rounded-bl-[3rem]"></div>
            
            <h3 className="text-white text-2xl font-black font-playfair border-b border-zinc-800 pb-4 tracking-wide flex items-center gap-2 mb-6">
              <span className="text-[#0DCD6A]">Culinary</span> Quote Planner
            </h3>
            
            <div className="space-y-6">
              {/* Plan Tier Selector */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-2">Catering Plan Tier</label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.keys(platePrices).map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setPlateCategory(tier)}
                      className={`py-2.5 text-center rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all border ${
                        plateCategory === tier
                          ? 'bg-[#0DCD6A]/10 border-[#0DCD6A] text-[#0DCD6A] shadow-sm'
                          : 'bg-zinc-950/40 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Guest Slider */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Total Guests</label>
                  <span className="text-white font-black text-xs bg-zinc-950/80 px-2.5 py-0.5 rounded border border-zinc-800 font-outfit">{guests} people</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="25"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-zinc-950 rounded-lg appearance-none cursor-pointer accent-[#0DCD6A]"
                />
              </div>

              {/* Estimate Display */}
              <div className="pt-5 border-t border-zinc-800 flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">Estimated Cost</span>
                  <span className="text-2xl text-white font-black font-outfit">₹{calculatedPrice.toLocaleString()}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-zinc-400 block font-medium">₹{platePrices[plateCategory]}/plate</span>
                  <span className="text-[9px] text-[#0DCD6A] uppercase tracking-widest block font-bold mt-0.5">Locks current rate</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleBookEstimate}
                className="w-full btn-luxury-cta flex items-center justify-center gap-2 py-4.5 rounded-xl font-black text-xs uppercase tracking-widest text-[#676767] hover:scale-[1.02] transition-all cursor-pointer"
              >
                Book This Package
              </button>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Down-Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 cursor-pointer pointer-events-none select-none">
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500 mb-2 font-outfit">Scroll To Discover</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-green-500"
        >
          <ArrowDown size={18} />
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
