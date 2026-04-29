import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const CatCard = ({ cat, idx }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <Link to={`/menu/${cat.id}`} className="w-full sm:w-[320px] md:w-[350px]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden group transition-all ring-1 ring-white/10 hover:ring-amber-500/30 shadow-2xl bg-zinc-900"
      >
        {!isLoaded && (
          <div className="absolute inset-0 bg-zinc-800 animate-pulse flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
          </div>
        )}
        <img 
          src={cat.img} 
          alt={cat.title} 
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          } group-hover:scale-110`} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
        
        <div className="absolute inset-x-6 bottom-6 p-8 bg-zinc-950/40 backdrop-blur-xl border border-white/10 rounded-[2rem] text-white transition-all duration-500 group-hover:bg-zinc-950/60 group-hover:border-amber-500/30">
          <h2 className="text-2xl md:text-3xl font-black mb-3 tracking-tighter leading-none">{cat.title}</h2>
          <div className="flex items-center gap-2 font-black text-[10px] uppercase tracking-[0.2em] text-amber-500">
            Explore Menu <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const CategoryCards = ({ categoriesConfig }) => {
  return (
    <motion.div 
      key="selection" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="flex flex-col items-center justify-center h-[calc(100vh-80px)] px-6 bg-zinc-950 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-500/5 blur-[120px] pointer-events-none"></div>
      
      <div className="text-center mb-10 max-w-4xl relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-amber-500 font-bold tracking-[0.5em] uppercase text-[10px] block mb-4"
        >
          Signature Dining
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black mb-4 text-white tracking-tighter"
        >
          Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 italic">Style</span>
        </motion.h1>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-7xl relative z-10 w-full">
        {categoriesConfig.map((cat, idx) => (
          <CatCard key={cat.id} cat={cat} idx={idx} />
        ))}
      </div>
    </motion.div>
  );
};

export default CategoryCards;
