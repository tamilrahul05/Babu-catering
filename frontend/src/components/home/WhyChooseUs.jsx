import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, ShieldCheck, Clock, Soup, Utensils } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    { icon: <Award size={32} />, title: 'Expert Chefs', desc: 'Masters of traditional South Indian cuisine with decades of culinary wisdom.' },
    { icon: <ShieldCheck size={32} />, title: 'Hygiene First', desc: 'Strict adherence to global safety standards in every step of food preparation.' },
    { icon: <Soup size={32} />, title: 'Premium Quality', desc: 'We use only the finest hand-pounded spices and fresh local ingredients.' },
    { icon: <Utensils size={32} />, title: 'Valai Elai Service', desc: 'Traditional banana leaf service that brings the soul of tradition to your table.' },
    { icon: <Heart size={32} />, title: 'Tailored Menus', desc: 'Completely customizable catering solutions designed to match your event theme.' },
    { icon: <Clock size={32} />, title: 'Timely Delivery', desc: 'Punctual service that ensures your guests enjoy hot, fresh food on time.' }
  ];

  return (
    <section className="py-32 bg-zinc-950 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500 rounded-full -[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block py-2 px-6 rounded-full bg-amber-500/10 text-amber-500 font-bold tracking-[0.2em] uppercase text-xs mb-6  border border-amber-500/20"
          >
            The Babu Advantage
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-6"
          >
            Why We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">Preferred</span>
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            className="p-10 rounded-sm bg-zinc-900/80 border border-zinc-800  transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/5 to-transparent rounded-bl-[3rem] opacity-0 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="w-16 h-16 bg-zinc-800 border border-zinc-700/50 rounded-sm flex items-center justify-center text-amber-500 mb-8  transition-all duration-500 transform relative z-10">
                {React.cloneElement(item.icon, { className: 'inherit' })}
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-4 transition-colors relative z-10">{item.title}</h3>
              <p className="text-zinc-400 font-medium leading-relaxed relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
