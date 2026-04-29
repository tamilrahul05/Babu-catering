import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const BuildPlate = ({ categoryId, dishDatabase, selectedItems, toggleItem, setShowLeafPreview }) => {
  return (
    <div className="pt-24 pb-40 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="mb-16">
        <Link to="/menu" className="inline-flex items-center gap-2 text-zinc-400 font-bold mb-8 transition-colors">
          <ArrowLeft size={20} /> Change Category
        </Link>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
          Select {categoryId} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 italic">Dishes</span>
        </h1>
        <p className="text-zinc-400 text-xl font-medium">{selectedItems.length} delicacies currently in your selection</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {dishDatabase[categoryId]?.map((dish) => {
          const isSelected = selectedItems.find(i => i.id === dish.id);
          return (
            <motion.div 
              key={dish.id} 
              onClick={() => toggleItem(dish)} 
              whileTap={{ scale: 0.96 }} 
              className={`relative rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-300 border ${
                isSelected ? 'border-amber-500 shadow-[0_20px_50px_rgba(212,175,55,0.2)] bg-amber-500/10' : 'border-zinc-800 bg-zinc-900'
              }`}
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={dish.img} 
                  alt={dish.name} 
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'https://images.unsplash.com/photo-1555244162-833832eb1c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60';
                  }}
                  className={`w-full h-full object-cover transition-transform duration-700 ${isSelected ? 'scale-110' : 'hover:scale-105'}`} 
                />
                <AnimatePresence>
                  {isSelected && (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      exit={{ opacity: 0 }} 
                      className="absolute inset-0 bg-black/60 flex items-center justify-center text-amber-500"
                    >
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <CheckCircle2 size={56} className="drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="p-6 text-center">
                <h4 className="font-black text-white text-lg md:text-xl line-clamp-2 h-14 flex items-center justify-center">{dish.name}</h4>
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedItems.length > 0 && (
          <motion.div 
            initial={{ y: 100, opacity: 0, x: '-50%' }} 
            animate={{ y: 0, opacity: 1, x: '-50%' }} 
            exit={{ y: 100, opacity: 0, x: '-50%' }} 
            className="fixed bottom-6 md:bottom-10 left-1/2 w-[90%] md:w-auto max-w-2xl bg-zinc-900/95 border border-white/10 px-6 py-4 md:px-8 md:py-5 rounded-[2rem] flex flex-row items-center justify-between gap-4 md:gap-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-50 ring-1 ring-amber-500/20"
          >
            <div className="text-white font-bold flex flex-col md:flex-row items-start md:items-center">
              <span className="text-amber-500 text-2xl md:text-4xl font-black tracking-tighter leading-none">{selectedItems.length}</span>
              <span className="text-xs md:text-base md:ml-2 text-zinc-400 uppercase tracking-widest mt-1 md:mt-0">Items Picked</span>
            </div>
            <button 
              onClick={() => setShowLeafPreview(true)} 
              className="bg-amber-500 text-black px-6 py-3 md:px-10 md:py-4 rounded-xl md:rounded-full font-black text-sm md:text-lg transition-all shadow-amber-500/20 active:scale-95 flex-shrink-0"
            >
              Plate It
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BuildPlate;
