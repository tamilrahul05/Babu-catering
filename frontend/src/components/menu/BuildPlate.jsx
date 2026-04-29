import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const DishCard = ({ dish, index, isSelected, toggleItem }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={() => toggleItem(dish)} 
      whileTap={{ scale: 0.96 }} 
      className={`relative rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-500 border group ${
        isSelected 
          ? 'border-amber-500 shadow-[0_20px_50px_rgba(212,175,55,0.2)] bg-amber-500/5' 
          : 'border-zinc-800 bg-zinc-900 hover:border-zinc-700'
      }`}
    >
      <div className="h-64 overflow-hidden relative bg-zinc-900">
        {!isLoaded && (
          <div className="absolute inset-0 bg-zinc-800 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
          </div>
        )}
        <img 
          src={dish.img} 
          alt={dish.name} 
          loading={index < 8 ? "eager" : "lazy"}
          onLoad={() => setIsLoaded(true)}
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60';
            setIsLoaded(true);
          }}
          className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          } ${isSelected ? 'scale-110' : 'group-hover:scale-110'}`} 
        />
        
        {isSelected && (
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            className="absolute top-4 right-4 bg-amber-500 text-black p-2 rounded-full shadow-xl z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </motion.div>
        )}
      </div>
      
      <div className="p-5 md:p-6 text-center h-28 flex flex-col justify-center bg-zinc-900/50">
        <h4 className="font-black text-white text-base md:text-lg mb-1 line-clamp-2 px-2">{dish.name}</h4>
        <p className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-colors ${
          isSelected ? 'text-amber-500' : 'text-zinc-500'
        }`}>
          {isSelected ? 'Delicacy Selected' : 'Tap to Pick'}
        </p>
      </div>
    </motion.div>
  );
};

const BuildPlate = ({ categoryId, dishDatabase, selectedItems, toggleItem, setShowLeafPreview }) => {
  return (
    <div className="pt-24 pb-40 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="mb-16">
        <Link to="/menu" className="inline-flex items-center gap-2 text-zinc-400 font-bold mb-8 hover:text-amber-500 transition-colors">
          <ArrowLeft size={20} /> Back to Categories
        </Link>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
          Pick Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 italic">{categoryId}</span> Dishes
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl font-medium tracking-wide">
          Select the finest delicacies for your custom catering plate.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
        {dishDatabase[categoryId]?.map((dish, index) => (
          <DishCard 
            key={dish.id}
            dish={dish} 
            index={index}
            isSelected={selectedItems.find(i => i.id === dish.id)}
            toggleItem={toggleItem}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedItems.length > 0 && (
          <motion.div 
            initial={{ y: 100, opacity: 0, x: '-50%' }} 
            animate={{ y: 0, opacity: 1, x: '-50%' }} 
            exit={{ y: 100, opacity: 0, x: '-50%' }} 
            className="fixed bottom-8 left-1/2 w-[95%] md:w-auto min-w-[320px] max-w-2xl bg-zinc-900/95 backdrop-blur-xl border border-white/10 px-6 py-5 rounded-[2.5rem] flex items-center justify-between gap-10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-50 ring-1 ring-amber-500/30"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-500 text-black rounded-full flex items-center justify-center font-black text-xl shadow-lg shadow-amber-500/20">
                {selectedItems.length}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-sm uppercase tracking-widest">Delicacies</span>
                <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-tight italic">Ready to serve</span>
              </div>
            </div>
            <button 
              onClick={() => setShowLeafPreview(true)} 
              className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black px-10 py-4 rounded-full font-black text-base md:text-lg transition-all shadow-xl shadow-amber-500/20 active:scale-95"
            >
              Preview Plate
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BuildPlate;
