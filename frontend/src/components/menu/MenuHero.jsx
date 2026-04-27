import React from 'react';
import { motion } from 'framer-motion';

const MenuHero = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-slate-900 flex items-center justify-center overflow-hidden">
      {/* Background Image/Pattern */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555244162-833832eb1c18?w=1600')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
            Culinary Excellence
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Menu</span> Collection
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            From traditional South Indian feasts to modern delicacies, explore our handcrafted menu designed to elevate your celebrations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuHero;
