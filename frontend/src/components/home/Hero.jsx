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
      <div className="absolute inset-0 z-0 bg-black pointer-events-none">
        <video 
          src={heroVideo} 
          autoPlay muted loop playsInline 
          className="w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
            className="-mt-16 sm:-mt-24"
        >
          <span className="inline-block py-1.5 px-6 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30 text-xs font-bold tracking-[0.3em] uppercase mb-8 ">
            Exclusive Culinary Excellence
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 italic font-medium">Perfect</span> Moments
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-12 font-light tracking-wide leading-relaxed">
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
