import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Edit2, Share2, Download } from 'lucide-react';
import valaiIlaiBg from '../../assets/valai_ilai.png';

const LeafShowcase = ({ showLeafPreview, setShowLeafPreview, categoryId, selectedItems, handleBooking }) => {
  return (
    <AnimatePresence>
      {showLeafPreview && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 sm:p-6 bg-zinc-950/95 backdrop-blur-sm overflow-hidden h-screen max-h-[100vh]"
        >
          {/* Close Button - Top Right Screen */}
          <button 
            onClick={() => setShowLeafPreview(false)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/5 hover:bg-white/10 text-zinc-400 rounded-full flex items-center justify-center transition-colors z-50 border border-white/10"
          >
            <span className="text-3xl leading-none">&times;</span>
          </button>
          
          <motion.div 
            initial={{ scale: 0.9, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 40, opacity: 0 }}
            className="w-full h-full max-w-7xl relative flex flex-col items-center justify-between py-4"
          >
            {/* Elegant Floating Title */}
            <div className="text-center mb-2 md:mb-4 relative z-20 flex-shrink-0">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tight">
                Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 italic">{categoryId}</span> Feast
              </h2>
              <p className="text-zinc-400 text-sm md:text-lg font-medium tracking-wide">
                A traditional Valai Elai preview of your curated selection.
              </p>
            </div>
            
            {/* The Banana Leaf Serving Area */}
            <div className="relative w-full max-w-[1200px] flex-1 min-h-0 flex items-center justify-center overflow-hidden my-4 md:my-6 rounded-[2.5rem] md:rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.9)] border border-white/5 bg-zinc-900/50">
              
              {/* Ultra-Realistic Banana Leaf Background */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={valaiIlaiBg} 
                  alt="Valai Ilai Setup" 
                  className="w-full h-full object-cover scale-105 md:scale-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
              </div>
              
              {/* Food Items Container */}
              <div className="relative z-10 w-full h-full overflow-y-auto md:overflow-hidden py-10 px-6 md:px-12 scrollbar-hide">
                <div className="flex flex-wrap justify-center items-center content-center gap-4 md:gap-10 min-h-full">
                  {selectedItems.map((item, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                      <motion.div 
                        key={item.id} 
                        initial={{ opacity: 0, scale: 0, y: isEven ? -20 : 20 }}
                        animate={{ opacity: 1, scale: 1, y: isEven ? -8 : 8 }}
                        transition={{ delay: 0.1 + (idx * 0.05), type: "spring", stiffness: 260, damping: 20 }}
                        className="flex flex-col items-center gap-2 md:gap-3 group"
                      >
                        {/* Organic Food Scoop */}
                        <div 
                          className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 overflow-hidden shadow-[4px_8px_15px_rgba(0,20,0,0.6)] transition-all duration-300 relative border border-white/10 group-hover:scale-110 group-hover:shadow-amber-500/10"
                          style={{
                            borderRadius: isEven ? '60% 40% 30% 70% / 60% 30% 70% 40%' : '40% 60% 70% 30% / 50% 60% 30% 60%'
                          }}
                        >
                          <img src={item.img} alt={item.name} className="w-full h-full object-cover relative z-0 transform scale-[1.2]" />
                          <div className="absolute inset-0 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] pointer-events-none rounded-full"></div>
                        </div>
                        
                        {/* Item Label */}
                        <span className="text-white text-[9px] md:text-xs font-bold tracking-wider text-center px-2.5 py-1 bg-black/60 rounded-full backdrop-blur-md max-w-[80px] md:max-w-[120px] truncate shadow-lg border border-white/5">
                          {item.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="mt-4 md:mt-8 bg-zinc-900/90 backdrop-blur-2xl border border-white/10 rounded-3xl md:rounded-full px-5 py-4 md:px-8 md:py-4 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-2xl relative z-20 w-full max-w-5xl flex-shrink-0 mb-4">
              
              <div className="flex items-center justify-between w-full sm:w-auto sm:gap-8 sm:border-r sm:border-zinc-800 sm:pr-8">
                <div>
                  <span className="text-[9px] md:text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] block">Curated Plate Value</span>
                  <div className="text-xl md:text-3xl font-black text-amber-500 tracking-tighter">
                    ₹{selectedItems.length * 50} <span className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase ml-1">/ plate</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 sm:hidden">
                  <button className="p-2.5 bg-zinc-800 text-amber-500 rounded-xl border border-zinc-700" aria-label="Share">
                    <Share2 size={18} />
                  </button>
                  <button className="p-2.5 bg-zinc-800 text-amber-500 rounded-xl border border-zinc-700" aria-label="Download">
                    <Download size={18} />
                  </button>
                </div>
              </div>

              {/* Utility Actions (Desktop Only or merged on mobile) */}
              <div className="hidden sm:flex items-center gap-3">
                <button 
                  onClick={() => setShowLeafPreview(false)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full text-sm font-bold transition-all border border-zinc-700"
                >
                  <Edit2 size={14} className="text-amber-500" /> Adjust Items
                </button>
                <button className="flex items-center justify-center w-11 h-11 bg-zinc-800 hover:bg-zinc-700 text-amber-500 rounded-full transition-all border border-zinc-700">
                  <Share2 size={18} />
                </button>
                <button className="flex items-center justify-center w-11 h-11 bg-zinc-800 hover:bg-zinc-700 text-amber-500 rounded-full transition-all border border-zinc-700">
                  <Download size={18} />
                </button>
              </div>

              {/* Main CTA */}
              <button 
                onClick={handleBooking}
                className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black px-8 md:px-10 py-4 md:py-4 rounded-2xl md:rounded-full font-black text-base md:text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-amber-500/20 active:scale-95"
              >
                Book Your Feast <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeafShowcase;
