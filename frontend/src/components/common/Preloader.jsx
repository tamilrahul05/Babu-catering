import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const steps = [0, 1, 2, 3, 4];

  // Container to coordinate staggered loading bars
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Step bar variants: animate up then down in a continuous wave loop
  const stepVariants = {
    initial: { y: 10 },
    animate: {
      y: [-15, 15, -15],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="fixed inset-0 bg-[#0A0A0A] z-[9999] flex flex-col items-center justify-center select-none">
      
      {/* 5 Loading steps */}
      <motion.div 
        variants={containerVariants}
        animate="animate"
        className="flex items-center gap-3 md:gap-4 mb-8 h-24"
      >
        {steps.map((step) => (
          <motion.div
            key={step}
            variants={stepVariants}
            className="w-3.5 h-10 md:w-4 md:h-12 bg-gradient-to-b from-[#0DCD6A] to-[#39E18B] rounded-full shadow-[0_0_20px_rgba(13,205,106,0.35)]"
          />
        ))}
      </motion.div>

      {/* Brand Label */}
      <h1 className="font-playfair font-black text-2xl md:text-3xl tracking-[0.2em] text-[#FFFFFF] mb-2 uppercase text-center">
        BABU <span className="text-[#0DCD6A] italic">Catering</span>
      </h1>
      
      {/* Elegant subtext */}
      <p className="font-outfit text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 animate-pulse text-center">
        Crafting Culinary Royalty
      </p>
    </div>
  );
};

export default Preloader;
