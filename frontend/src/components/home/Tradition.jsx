import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import featuredMeal from '../../assets/images/featured_meal.jpg';

const Tradition = () => {
  return (
    <section className="py-32 bg-zinc-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent skew-x-12 transform translate-x-32 pointer-events-none"></div>
      <div className="absolute -bottom-64 -left-64 w-[500px] h-[500px] bg-amber-500/5 rounded-full -[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20 relative z-10">
        <div className="lg:w-1/2">
          <motion.span 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} 
            className="inline-block py-1.5 px-6 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 font-bold tracking-[0.3em] uppercase text-xs mb-8 "
          >
            The Heart of Chennai
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight"
          >
            A Legacy of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 italic">Authentic Taste</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-400 mb-12 font-light leading-relaxed tracking-wide"
          >
            Our traditional banana leaf service (Elai Sappadu) is the heart of every South Indian celebration. 
            We preserve the authentic flavors perfected over generations.
          </motion.p>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {['24+ Traditional Items', 'Authentic Valai Elai', 'Hygienic Preparation', 'VIP Serving Staff'].map((item, i) => (
              <motion.li 
                key={i} 
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="flex items-center gap-4 text-lg font-bold text-zinc-300 group cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/20 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                  <ChevronRight size={18} />
                </div>
                <span className="group-hover:text-amber-400 transition-colors duration-300">{item}</span>
              </motion.li>
            ))}
          </ul>
          
          <Link to="/booking">
            <button className="px-10 py-5 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-black text-lg rounded-sm  transition-all duration-300 border border-amber-300">
              Inquire for Traditional Meals
            </button>
          </Link>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }} 
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }} 
          transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative w-full"
        >
          <div className="absolute inset-0 bg-amber-500 rounded-sm transform translate-x-6 translate-y-6 opacity-10 mix-blend-screen"></div>
          <div className="relative rounded-sm p-2 bg-gradient-to-br from-zinc-800 to-zinc-900 ">
            <img 
              src={featuredMeal} 
              alt="Traditional South Indian Feast" 
              className="rounded-sm w-full h-[350px] md:h-[500px] lg:h-[600px] object-cover border border-zinc-700/50 " 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tradition;
