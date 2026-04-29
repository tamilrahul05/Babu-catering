import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const PackageCard = ({ item, idx }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ delay: idx * 0.1, duration: 0.6 }} 
      viewport={{ once: true }}
      className={`relative flex flex-col p-8 bg-zinc-900 rounded-[3rem] border transition-all duration-500 group ${
        item.popular ? 'border-amber-500/40 ring-1 ring-amber-500/10 z-10' : 'border-zinc-800 z-0'
      } hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] hover:-translate-y-2`}
    >
      {item.popular && (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-600 text-black px-6 py-2.5 rounded-full text-xs sm:text-sm font-black tracking-widest flex items-center gap-2 z-30 border border-amber-300 shadow-2xl shadow-amber-500/20">
          <Star size={16} className="fill-black" /> MOST POPULAR
        </div>
      )}
      
      <div className="w-full h-64 md:h-72 rounded-[2.5rem] overflow-hidden mb-8 relative bg-zinc-800">
        {!isLoaded && (
          <div className="absolute inset-0 bg-zinc-800 animate-pulse flex items-center justify-center">
            <div className="w-10 h-10 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
          </div>
        )}
        <img 
          src={item.image} 
          alt={item.name} 
          loading={idx < 3 ? "eager" : "lazy"}
          onLoad={() => setIsLoaded(true)}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1555244162-833832eb1c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60';
            setIsLoaded(true);
          }}
          className={`w-full h-full object-cover transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          } group-hover:scale-110`} 
        />
      </div>

      <div className="flex-1 text-center flex flex-col items-center px-4">
        <h4 className="text-3xl font-black text-white mb-4 transition-colors tracking-tight leading-tight">{item.name}</h4>
        <p className="text-zinc-500 mb-10 font-medium leading-relaxed italic text-base">"{item.desc}"</p>
        
        <div className="mt-auto w-full pt-10 border-t border-white/5">
          <div className="mb-10">
            <span className="text-6xl font-black text-white tracking-tighter">₹{item.price}</span>
            <span className="text-[11px] text-zinc-500 font-bold block mt-3 uppercase tracking-[0.4em]">Per Premium Serving</span>
          </div>
          <Link to="/booking" state={{ selectedPlan: item }} className="block w-full">
            <button className={`w-full py-5 rounded-full font-black text-xl transition-all duration-300 shadow-2xl ${
              item.popular 
                ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-black shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02]' 
                : 'bg-zinc-800 text-white hover:bg-zinc-700 shadow-black/40'
            }`}>
              Select Package
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const PackageList = () => {
  const categories = ['Veg', 'Non-Veg'];
  const getItems = (category) => [
    { 
      name: `Basic ${category} Plate`, 
      price: category === 'Veg' ? 150 : 250, 
      desc: 'Traditional South Indian meals with 12+ authentic items.', 
      image: category === 'Veg' ? 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' : 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 
      popular: false 
    },
    { 
      name: `Standard ${category} Plate`, 
      price: category === 'Veg' ? 220 : 350, 
      desc: 'Premium meals including appetizers and two types of sweets.', 
      image: category === 'Veg' ? 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' : 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 
      popular: true 
    },
    { 
      name: `Premium ${category} Plate`, 
      price: category === 'Veg' ? 300 : 500, 
      desc: 'Luxury feast with 24+ items, live counters, and exotic desserts.', 
      image: category === 'Veg' ? 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' : 'https://images.unsplash.com/photo-1543353071-087092ec393a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', 
      popular: false 
    }
  ];

  return (
    <section className="py-40 relative overflow-hidden bg-zinc-950">
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-amber-500 rounded-full -[150px] opacity-10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="inline-block py-2.5 px-10 rounded-full bg-amber-500/10 text-amber-500 font-bold tracking-[0.5em] uppercase text-xs mb-10 border border-amber-500/20 shadow-2xl shadow-amber-500/5"
          >
            Curated Culinary Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }} 
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter"
          >
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 italic font-medium">Packages</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }} 
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-zinc-500 max-w-4xl mx-auto font-medium leading-relaxed"
          >
            Choose from our signature collections or head to the custom menu for a bespoke culinary experience tailored to your unique event.
          </motion.p>
        </div>

        <div className="space-y-48">
          {categories.map((category) => (
            <div key={category} className="relative">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-10 border-b border-white/5">
                <div className="flex items-center gap-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-zinc-800 to-zinc-900 text-amber-500 rounded-[2rem] flex items-center justify-center border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                    <ChevronRight size={40} />
                  </div>
                  <div>
                    <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-1">{category === 'Veg' ? 'Pure Vegetarian' : 'Non-Vegetarian'} Feasts</h3>
                    <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">Authentic catering since generations</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                {getItems(category).map((item, idx) => (
                  <PackageCard key={idx} item={item} idx={idx} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <Link to="/menu">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 bg-zinc-900 text-white border border-zinc-800 px-12 py-5 rounded-full font-black text-xl transition-all duration-300 shadow-2xl hover:border-amber-500/50 hover:text-amber-500"
            >
              Custom Menu Builder <ChevronRight size={24} />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PackageList;
