import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const CategoryCards = ({ categoriesConfig }) => {
  return (
    <motion.div 
      key="selection" 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex flex-col items-center justify-center min-h-[90vh] px-6 py-20"
    >
      <div className="text-center mb-16 max-w-2xl">
        <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm block mb-4">Personalized Dining</span>
        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight text-slate-900">Choose Your <span className="text-emerald-600">Style</span></h1>
        <p className="text-slate-500 text-lg md:text-xl font-medium">Select a category below to start building your custom catering plate.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 max-w-7xl">
        {categoriesConfig.map((cat, idx) => (
          <Link to={`/menu/${cat.id}`} key={cat.id} className="w-full sm:w-[380px]">
            <motion.div 
              whileHover={{ y: -20 }}
              className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl group transition-all ring-1 ring-slate-100"
            >
              {/* Image */}
              <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              
              {/* Clean Bottom Label with Glassmorphism */}
              <div className="absolute inset-x-6 bottom-6 p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] text-white transition-all duration-500 group-hover:bg-emerald-600 group-hover:border-emerald-500">
                <h2 className="text-3xl font-black mb-2">{cat.title}</h2>
                <div className="flex items-center gap-2 font-bold group-hover:translate-x-2 transition-transform">
                  View Menu <ChevronRight size={18} className="text-emerald-400 group-hover:text-white" />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default CategoryCards;
