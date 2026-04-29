import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <section className="py-32 relative overflow-hidden bg-zinc-950">
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-amber-500 rounded-full -[150px] opacity-10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="inline-block py-1.5 px-6 rounded-full bg-amber-500/10 text-amber-500 font-bold tracking-[0.3em] uppercase text-xs mb-6 border border-amber-500/20"
          >
            Our Selection
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }} 
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 italic font-medium">Packages</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }} 
            className="text-lg text-zinc-400 max-w-2xl mx-auto font-medium"
          >
            Select a pre-designed culinary journey or head to our full menu to build your own perfect plate.
          </motion.p>
        </div>

        <div className="space-y-32">
          {categories.map((category) => (
            <div key={category} className="relative">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-zinc-800">
                <div className="w-14 h-14 bg-gradient-to-br from-zinc-800 to-zinc-900 text-amber-500 rounded-sm flex items-center justify-center border border-zinc-700/50">
                  <ChevronRight size={28} />
                </div>
                <h3 className="text-3xl font-black text-white tracking-tight">{category === 'Veg' ? 'Vegetarian' : 'Non-Vegetarian'} Plates</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
                {getItems(category).map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ delay: idx * 0.1 }} 
                    className={`relative flex flex-col p-8 bg-zinc-900 rounded-sm border transition-all duration-300 group ${
                      item.popular ? 'border-amber-500/50 ring-1 ring-amber-500/20 z-10' : 'border-zinc-800 z-0'
                    }`}
                  >
                    {item.popular && (
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-600 text-black px-6 py-2 rounded-full text-xs sm:text-sm font-black tracking-widest flex items-center gap-2 z-30 border border-amber-300">
                        <Star size={16} className="fill-black" /> MOST POPULAR
                      </div>
                    )}
                    <div className="w-full h-56 rounded-sm overflow-hidden mb-8 border-4 border-zinc-800 relative transition-colors bg-zinc-800">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://images.unsplash.com/photo-1555244162-833832eb1c18?w=500&q=80';
                        }}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                    </div>
                    <div className="flex-1 text-center flex flex-col items-center">
                      <h4 className="text-2xl font-extrabold text-white mb-3 transition-colors">{item.name}</h4>
                      <p className="text-zinc-400 mb-8 font-medium leading-relaxed">{item.desc}</p>
                      <div className="mt-auto w-full pt-8 border-t border-zinc-800">
                        <div className="mb-6">
                          <span className="text-5xl font-black text-white tracking-tight">₹{item.price}</span>
                          <span className="text-sm text-zinc-500 font-bold block mt-2 uppercase tracking-widest">Per Plate</span>
                        </div>
                        <Link to="/booking" state={{ selectedPlan: item }} className="block w-full">
                          <button className={`w-full py-4 rounded-sm font-black text-lg transition-all duration-300 ${
                            item.popular ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-white'
                          }`}>
                            Select Package
                          </button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link to="/menu">
            <button className="inline-flex items-center gap-3 bg-zinc-900 text-white border border-zinc-800 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
              View Custom Menu Options <ChevronRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PackageList;
