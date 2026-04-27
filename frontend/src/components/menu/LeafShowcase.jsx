import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const LeafShowcase = ({ showLeafPreview, setShowLeafPreview, categoryId, selectedItems, handleBooking }) => {
  return (
    <AnimatePresence>
      {showLeafPreview && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10 bg-slate-900/90 backdrop-blur-md"
        >
          <motion.div 
            initial={{ scale: 0.9, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 40, opacity: 0 }}
            className="bg-white w-full max-w-6xl max-h-[90vh] rounded-[3rem] shadow-2xl overflow-y-auto relative flex flex-col"
          >
            {/* Close Button */}
            <button 
              onClick={() => setShowLeafPreview(false)}
              className="absolute top-8 right-8 w-12 h-12 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full flex items-center justify-center transition-colors z-20"
            >
              <span className="text-3xl leading-none">&times;</span>
            </button>
            
            <div className="p-10 md:p-16 text-center border-b border-slate-50">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-2">Your <span className="text-emerald-600">{categoryId}</span> Feast</h2>
              <p className="text-slate-500 text-xl font-medium">A traditional Valai Elai preview of your curated selection.</p>
            </div>
            
            <div className="p-6 md:p-20 flex-1 flex items-center justify-center bg-slate-50 overflow-hidden relative">
              {/* Realistic Banana Leaf rendering */}
              <div 
                className="relative w-full max-w-5xl min-h-[550px] md:min-h-[700px] rounded-[100px_600px_100px_600px] shadow-[0_40px_100px_rgba(0,0,0,0.4)] overflow-hidden p-10 md:p-24 flex items-center justify-center"
                style={{
                  backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/4/4f/Banana_leaf_texture.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay for depth */}
                <div className="absolute inset-0 bg-black/10 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]"></div>
                
                {/* Leaf Vein Effect */}
                <div className="absolute top-1/2 -left-20 w-[140%] h-2 bg-gradient-to-b from-white/30 to-black/30 -rotate-3 blur-[2px] z-0"></div>
                
                <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 w-full place-items-center">
                  {selectedItems.map((item, idx) => (
                    <motion.div 
                      key={item.id} 
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.15, type: "spring", stiffness: 200, damping: 15 }}
                      className="flex flex-col items-center gap-4 group"
                    >
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/30 bg-slate-900 shadow-[15px_20px_35px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(0,0,0,0.6)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-white text-sm md:text-base font-black text-center px-4 py-2 bg-black/40 backdrop-blur-md rounded-full shadow-2xl border border-white/10">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 bg-white border-t border-slate-50 flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="text-center sm:text-left">
                <span className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] block mb-2">Estimated Plate Value</span>
                <div className="text-4xl md:text-5xl font-black text-emerald-600 tracking-tighter">
                  ₹{selectedItems.length * 50} <span className="text-xl text-slate-400 font-bold uppercase ml-2">/ plate</span>
                </div>
              </div>
              <button 
                onClick={handleBooking}
                className="w-full sm:w-auto bg-slate-900 hover:bg-emerald-600 text-white px-12 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-2xl hover:-translate-y-2"
              >
                Continue to Booking <ChevronRight size={24} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeafShowcase;
