import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import heroVideo from '../../assets/video2.mp4';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        <video 
          src={heroVideo} 
          autoPlay muted loop playsInline 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        ></video>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-sm font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
            Mastering The Art of Catering
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-6 leading-tight">
            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Perfect</span> Moments
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 font-light">
            Bringing high-class culinary excellence and authentic traditional tastes to your most cherished celebrations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/booking">
              <Button variant="primary">
                Book Your Event <ChevronRight size={20} />
              </Button>
            </Link>
            <Link to="/menu">
              <Button variant="outline">
                Explore Menu
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
