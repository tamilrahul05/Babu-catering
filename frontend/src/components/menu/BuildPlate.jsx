import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const BuildPlate = ({ categoryId, dishDatabase, selectedItems, toggleItem, setShowLeafPreview }) => {
  return (
    <div className="pt-24 pb-40 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <Link to="/menu" className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 font-bold mb-8 transition-colors">
          <ArrowLeft size={20} /> Change Category
        </Link>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">Select {categoryId} <span className="text-emerald-600">Dishes</span></h1>
        <p className="text-slate-500 text-xl font-medium">{selectedItems.length} delicacies currently in your selection</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {dishDatabase[categoryId]?.map((dish) => {
          const isSelected = selectedItems.find(i => i.id === dish.id);
          return (
            <motion.div 
              key={dish.id} 
              onClick={() => toggleItem(dish)}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.96 }}
              className={`relative rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-300 border-2 ${
                isSelected ? 'border-emerald-500 shadow-emerald-100 shadow-2xl bg-emerald-50' : 'border-slate-100 hover:border-slate-300 hover:shadow-xl bg-white'
              }`}
            >
              <div className="h-56 overflow-hidden relative">
                <img src={dish.img} alt={dish.name} className={`w-full h-full object-cover transition-transform duration-700 ${isSelected ? 'scale-110' : 'hover:scale-105'}`} />
                <AnimatePresence>
                  {isSelected && (
                    <motion.div 
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-emerald-600/40 backdrop-blur-[2px] flex items-center justify-center text-white"
                    >
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}>
                        <CheckCircle2 size={56} className="drop-shadow-2xl" />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="p-6 text-center">
                <h4 className="font-black text-slate-800 text-lg md:text-xl line-clamp-2 h-14 flex items-center justify-center">{dish.name}</h4>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modern Floating Action Bar */}
      <AnimatePresence>
        {selectedItems.length > 0 && (
          <motion.div 
            initial={{ y: 100, opacity: 0, x: '-50%' }} 
            animate={{ y: 0, opacity: 1, x: '-50%' }} 
            exit={{ y: 100, opacity: 0, x: '-50%' }}
            className="fixed bottom-6 md:bottom-10 left-1/2 w-[90%] md:w-auto max-w-2xl bg-slate-900/95 backdrop-blur-xl border border-white/10 px-6 py-4 md:px-8 md:py-5 rounded-[2rem] flex flex-row items-center justify-between gap-4 md:gap-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 ring-1 ring-white/20"
          >
            <div className="text-white font-bold flex flex-col md:flex-row items-start md:items-center">
              <span className="text-emerald-400 text-2xl md:text-4xl font-black tracking-tighter leading-none">{selectedItems.length}</span> 
              <span className="text-xs md:text-base md:ml-2 text-slate-300 uppercase tracking-widest mt-1 md:mt-0">Items Picked</span>
            </div>
            <button 
              onClick={() => setShowLeafPreview(true)}
              className="bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3 md:px-10 md:py-4 rounded-xl md:rounded-full font-black text-sm md:text-lg transition-all shadow-lg shadow-emerald-500/40 active:scale-95 flex-shrink-0"
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
