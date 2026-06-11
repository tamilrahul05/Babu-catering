import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const CatCard = ({ cat, idx }) => {
 const [isLoaded, setIsLoaded] = React.useState(false);

 return (
  <Link to={`/menu/${cat.id}`} className="w-full sm:w-[320px] md:w-[350px] group/link block">
  <div className="w-full h-[400px] rounded-[2.5rem] overflow-hidden border border-zinc-800 bg-zinc-900 shadow-lg flex flex-col">
  <div className="w-full h-[280px] overflow-hidden relative">
  {!isLoaded && (
  <div className="absolute inset-0 bg-zinc-800 animate-pulse flex items-center justify-center">
  <div className="w-12 h-12 border-4 border-green-500/20 border-t-green-500 rounded-full animate-spin"></div>
  </div>
  )}
  <img 
  src={cat.img} 
  alt={cat.title} 
  onLoad={() => setIsLoaded(true)}
  className="w-full h-full object-cover" 
  loading="lazy"
  />
  </div>
  
  {/* Solid Footer */}
  <div className="p-6 flex-1 flex flex-col justify-center bg-zinc-900 border-t border-zinc-800">
  <h3 className="text-zinc-100 text-xl font-black mb-2 tracking-tighter leading-none">{cat.title}</h3>
  <div className="flex items-center gap-2 font-black text-[10px] uppercase tracking-[0.2em] text-green-500">
  Explore Menu <ChevronRight size={16} />
  </div>
  </div>
  </div>
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
 className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] py-20 px-6 bg-zinc-950 relative overflow-hidden"
 >
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-500/5 ] pointer-events-none"></div>
 
 <div className="text-center mb-10 max-w-4xl relative z-10">
 <motion.span 
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 className="text-green-500 font-bold tracking-[0.5em] uppercase text-[10px] block mb-4"
 >
 Signature Dining
 </motion.span>
 <motion.h1 
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.1 }}
 className="text-4xl md:text-6xl font-black mb-4 text-white tracking-tighter"
 >
 Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-600 italic">Style</span>
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


