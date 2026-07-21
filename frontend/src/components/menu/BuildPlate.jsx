import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Coffee, ChefHat, Utensils, Flame, Sparkles, Soup, Pizza, Cake, CupSoda, IceCream, ArrowLeft } from 'lucide-react';

const getSubcategoryIcon = (sub) => {
  switch (sub) {
    case 'Early Morning Bed Coffee':
      return <Coffee size={18} />;
    case 'Muhurtham Breakfast':
      return <ChefHat size={18} />;
    case 'South Indian Tiffin With Accompaniments':
      return <Utensils size={18} />;
    case 'Indian Breads With Accompaniments':
      return <Flame size={18} />;
    case 'Main Course With Rice & Accompaniments':
      return <Sparkles size={18} />;
    case 'Starters':
      return <Flame size={18} />;
    case 'Soup Stall':
      return <Soup size={18} />;
    case 'Chaat Stall':
      return <Pizza size={18} />;
    case 'Evening Snacks Stall':
      return <Cake size={18} />;
    case 'Fresh Juice Stall':
      return <CupSoda size={18} />;
    case 'Mocktail Stall':
      return <CupSoda size={18} />;
    case 'Stimulating Drinks':
      return <CupSoda size={18} />;
    case 'Fruit Stall':
      return <Utensils size={18} />;
    case 'Desserts':
      return <Cake size={18} />;
    case 'Ice Creams':
      return <IceCream size={18} />;
    default:
      return <Utensils size={18} />;
  }
};

const DishCard = ({ dish, index, isSelected, toggleItem }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={() => toggleItem(dish)} 
      whileTap={{ scale: 0.96 }} 
      className={`relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500 border group ${
        isSelected 
          ? 'border-[#0DCD6A] shadow-[0_20px_50px_rgba(0,177,79,0.15)] ring-2 ring-[#0DCD6A] bg-[#FAF8F5]' 
          : 'border-[#E4E7EB] hover:border-zinc-400 bg-[#FAF8F5] hover:shadow-md'
      }`}
    >
      <div className="h-56 overflow-hidden relative bg-[#FAF8F5]">
        {!isLoaded && (
          <div className="absolute inset-0 bg-[#FAF8F5] animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-green-500/20 border-t-green-500 rounded-full animate-spin"></div>
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
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        
        {isSelected && (
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            className="absolute top-4 right-4 bg-[#0DCD6A] text-[#111111] p-2 rounded-full shadow-xl z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </motion.div>
        )}
      </div>
      
      <div className="p-5 md:p-6 text-center bg-[#FAF8F5] border-t border-[#E4E7EB]">
        <h4 className="font-playfair font-bold text-[#111111] text-base md:text-lg mb-1 line-clamp-2 px-2">{dish.name}</h4>
        <p className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-colors ${
          isSelected ? 'text-[#0DCD6A]' : 'text-zinc-400'
        }`}>
          {isSelected ? 'Selected' : 'Tap to Add'}
        </p>
      </div>
    </motion.div>
  );
};

const BuildPlate = ({ categoryId, dishDatabase, selectedItems, toggleItem, setShowLeafPreview }) => {
  const dishes = dishDatabase[categoryId] || [];

  const subcategories = React.useMemo(() => {
    return Array.from(new Set(dishes.map(d => d.subcategory))).filter(Boolean);
  }, [dishes]);

  const [activeSubcategory, setActiveSubcategory] = React.useState('');

  const currentSubcategory = subcategories.includes(activeSubcategory) 
    ? activeSubcategory 
    : (subcategories[0] || '');

  const filteredDishes = React.useMemo(() => {
    return dishes.filter(d => d.subcategory === currentSubcategory);
  }, [dishes, currentSubcategory]);

  return (
    <div className="pt-32 pb-40 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="mb-16">
        <Link to="/menu" className="inline-flex items-center gap-2 text-zinc-400 font-bold mb-8 hover:text-green-500 transition-colors">
          <ArrowLeft size={20} /> Back to Categories
        </Link>
        <h1 className="text-4xl md:text-6xl font-black text-[#111111] mb-4 tracking-tight font-playfair">
          Pick Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-600 italic">{categoryId === 'Veg' ? 'Vegetarian' : categoryId === 'Non-Veg' ? 'Non Vegetarian' : categoryId}</span> Dishes
        </h1>
        <p className="text-zinc-500 text-lg md:text-xl font-medium tracking-wide">
          Select the finest delicacies for your custom catering plate.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <div className="w-full lg:w-80 shrink-0 bg-[#FAF8F5] border border-[#E4E7EB] rounded-[2rem] p-5 lg:p-6 shadow-sm">
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-4 px-2">Menu Sections</span>
          
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 scrollbar-hide">
            {subcategories.map((sub) => {
              const isActive = currentSubcategory === sub;
              const itemCount = dishes.filter(d => d.subcategory === sub).length;
              return (
                <button
                  key={sub}
                  onClick={() => setActiveSubcategory(sub)}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl text-left transition-all duration-300 whitespace-nowrap lg:whitespace-normal shrink-0 lg:shrink w-auto lg:w-full border ${
                    isActive 
                      ? 'bg-[#FADBB4]/60 text-amber-950 font-bold border-[#F5B05D]/20 shadow-sm' 
                      : 'bg-transparent text-[#111111] hover:text-[#0DCD6A] hover:bg-[#F3EFE9] border-transparent'
                  }`}
                >
                  <span className={isActive ? 'text-amber-800' : 'text-zinc-400'}>
                    {getSubcategoryIcon(sub)}
                  </span>
                  <span className="font-outfit text-sm font-semibold tracking-wide flex-1">
                    {sub}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-amber-950/10 text-amber-950' : 'bg-zinc-200/50 text-zinc-400'
                  }`}>
                    {itemCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex-1 w-full">
          {filteredDishes.length === 0 ? (
            <div className="text-center py-20 bg-[#FAF8F5] rounded-[2rem] border border-[#E4E7EB]">
              <span className="text-zinc-400 font-medium">No dishes found in this category.</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredDishes.map((dish, index) => (
                <DishCard 
                  key={dish.id}
                  dish={dish} 
                  index={index}
                  isSelected={selectedItems.find(i => i.id === dish.id)}
                  toggleItem={toggleItem}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {selectedItems.length > 0 && (
          <motion.div 
            initial={{ y: 100, opacity: 0, x: '-50%' }} 
            animate={{ y: 0, opacity: 1, x: '-50%' }} 
            exit={{ y: 100, opacity: 0, x: '-50%' }} 
            className="fixed bottom-8 left-1/2 w-[95%] md:w-auto min-w-[320px] max-w-2xl bg-zinc-900/95 border px-6 py-5 rounded-[2.5rem] flex items-center justify-between gap-10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-50 ring-1 ring-green-500/30"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500 text-black rounded-full flex items-center justify-center font-black text-xl shadow-lg shadow-green-500/20">
                {selectedItems.length}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-sm uppercase tracking-widest">Delicacies</span>
                <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-tight italic">Ready to serve</span>
              </div>
            </div>
            <button 
              onClick={() => setShowLeafPreview(true)} 
              className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-black px-10 py-4 rounded-full font-black text-base md:text-lg transition-all shadow-xl shadow-green-500/20 active:scale-95"
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
