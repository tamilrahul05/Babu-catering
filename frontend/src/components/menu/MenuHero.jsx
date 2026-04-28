import React from 'react';
import { motion } from 'framer-motion';

const MenuHero = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-zinc-950 flex items-center justify-center overflow-hidden">
      {/* Background Image/Pattern */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay bg-cover bg-center grayscale"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555244162-833832eb1c18?w=1600')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/90 to-zinc-950"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1.5 px-6 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold tracking-[0.3em] uppercase mb-8 ">
            Culinary Excellence
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 italic">Menu</span> Collection
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            From traditional South Indian feasts to modern delicacies, explore our handcrafted menu designed to elevate your celebrations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuHero;
