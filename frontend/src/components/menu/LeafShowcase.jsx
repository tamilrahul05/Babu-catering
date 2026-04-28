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
            <div className="relative w-full max-w-[1200px] flex-1 min-h-0 flex items-center justify-center overflow-hidden my-2 md:my-4 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-zinc-800">
              
              {/* Ultra-Realistic Banana Leaf Background from Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={valaiIlaiBg} 
                  alt="Valai Ilai Setup" 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* Food Items Container - Flowing horizontally across the leaf */}
              <div className="relative z-10 flex flex-wrap justify-center items-center content-center gap-6 md:gap-10 w-full max-w-5xl h-full mx-auto px-10 py-12">
                {selectedItems.map((item, idx) => {
                  // Stagger the items up and down to create a natural, organic arrangement
                  const isEven = idx % 2 === 0;
                  return (
                    <motion.div 
                      key={item.id} 
                      initial={{ opacity: 0, scale: 0, y: isEven ? -20 : 20 }}
                      animate={{ opacity: 1, scale: 1, y: isEven ? -10 : 10 }}
                      transition={{ delay: 0.3 + (idx * 0.1), type: "spring", stiffness: 200, damping: 20 }}
                      className="flex flex-col items-center gap-2 group"
                    >
                      {/* Organic Food Scoop / Dollop Style directly on leaf */}
                      <div 
                        className="w-20 h-20 md:w-28 md:h-28 overflow-hidden shadow-[8px_12px_20px_rgba(0,30,0,0.7)] transition-all duration-300 relative"
                        style={{
                          borderRadius: isEven ? '60% 40% 30% 70% / 60% 30% 70% 40%' : '40% 60% 70% 30% / 50% 60% 30% 60%'
                        }}
                      >
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover relative z-0 transform scale-[1.15]" />
                        <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.4)] pointer-events-none rounded-full"></div>
                      </div>
                      
                      {/* Premium Label - Subtle */}
                      <span className="text-white text-[10px] md:text-xs font-bold tracking-wide text-center px-3 py-1 bg-black/50 rounded-sm backdrop-blur-md max-w-[100px] md:max-w-[120px] truncate shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                        {item.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Floating Glassmorphic Action Bar at Bottom */}
            <div className="mt-auto bg-black/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between gap-4 md:gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative z-20 w-full max-w-5xl flex-shrink-0">
              
              <div className="text-left flex items-center gap-4 border-r border-zinc-800 pr-4 md:pr-6 hidden sm:block">
                <div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] block">Plate Value</span>
                  <div className="text-xl md:text-2xl font-black text-amber-500 tracking-tighter">
                    ₹{selectedItems.length * 50} <span className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase ml-1">/ plate</span>
                  </div>
                </div>
              </div>

              {/* Utility Actions */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setShowLeafPreview(false)}
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full text-sm font-bold transition-colors border border-zinc-800"
                >
                  <Edit2 size={14} className="text-amber-500" /> Edit Plating
                </button>
                <button className="flex items-center justify-center w-10 h-10 bg-zinc-900 hover:bg-zinc-800 text-amber-500 rounded-full transition-colors border border-zinc-800">
                  <Share2 size={16} />
                </button>
                <button className="flex items-center justify-center w-10 h-10 bg-zinc-900 hover:bg-zinc-800 text-amber-500 rounded-full transition-colors border border-zinc-800">
                  <Download size={16} />
                </button>
              </div>

              {/* Main CTA */}
              <button 
                onClick={handleBooking}
                className="bg-amber-500 text-black px-6 md:px-8 py-2 md:py-3 rounded-full font-black text-base md:text-lg flex items-center justify-center gap-2 md:gap-3 transition-all duration-300 shadow-[0_10px_20px_rgba(212,175,55,0.3)] whitespace-nowrap ml-auto"
              >
                Book Now <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeafShowcase;
