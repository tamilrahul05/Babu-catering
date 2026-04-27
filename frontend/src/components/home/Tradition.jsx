import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import featuredMeal from '../../assets/images/featured_meal.jpg';

const Tradition = () => {
  return (
    <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600/10 skew-x-12 transform translate-x-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20 relative z-10">
        <div className="lg:w-1/2">
          <motion.span 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} 
            className="text-emerald-400 font-bold tracking-widest uppercase text-sm block mb-4"
          >
            The Heart of Chennai
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-6xl font-black mb-8 leading-tight"
          >
            A Legacy of <br />
            <span className="text-emerald-400">Authentic Taste</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 mb-10 font-light leading-relaxed"
          >
            Our traditional banana leaf service (Elai Sappadu) is the heart of every South Indian celebration. 
            We preserve the authentic flavors perfected over generations.
          </motion.p>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {['24+ Traditional Items', 'Authentic Valai Elai', 'Hygienic Preparation', 'VIP Serving Staff'].map((item, i) => (
              <motion.li 
                key={i} 
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 text-lg font-bold"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <ChevronRight size={16} />
                </div>
                {item}
              </motion.li>
            ))}
          </ul>
          
          <Link to="/booking">
            <Button variant="primary" className="shadow-emerald-500/20">
              Inquire for Traditional Meals
            </Button>
          </Link>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }} 
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }} 
          className="lg:w-1/2 relative"
        >
          <div className="absolute inset-0 bg-emerald-500 rounded-[3rem] transform translate-x-6 translate-y-6 opacity-20 blur-2xl"></div>
          <img 
            src={featuredMeal} 
            alt="Traditional South Indian Feast" 
            className="relative rounded-[3rem] shadow-2xl w-full h-[600px] object-cover border-4 border-white/5" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Tradition;
