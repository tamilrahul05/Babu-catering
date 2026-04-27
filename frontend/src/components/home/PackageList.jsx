import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const PackageList = () => {
  const categories = ['Veg', 'Non-Veg'];

  const getItems = (category) => [
    { 
      name: `Basic ${category} Plate`, 
      price: category === 'Veg' ? 150 : 250, 
      desc: 'Traditional South Indian meals with 12+ authentic items.',
      image: category === 'Veg' ? 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=400' : 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=400'
    },
    { 
      name: `Standard ${category} Plate`, 
      price: category === 'Veg' ? 220 : 350, 
      desc: 'Premium meals including appetizers and two types of sweets.',
      image: category === 'Veg' ? 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400' : 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=400'
    },
    { 
      name: `Premium ${category} Plate`, 
      price: category === 'Veg' ? 300 : 500, 
      desc: 'Luxury feast with 24+ items, live counters, and exotic desserts.',
      image: category === 'Veg' ? 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' : 'https://images.unsplash.com/photo-1543353071-087092ec393a?w=400'
    }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm block mb-4">Our Selection</span>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Curated <span className="text-emerald-600">Packages</span></h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">Select a pre-designed plate or head to the menu to build your own.</p>
      </div>

      <div className="space-y-24">
        {categories.map((category) => (
          <div key={category}>
            <div className="flex items-center gap-4 mb-10 border-b-2 border-emerald-500/10 pb-6">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-lg">
                <ChevronRight size={24} />
              </div>
              <h3 className="text-3xl font-black text-slate-900">{category === 'Veg' ? 'Vegetarian' : 'Non-Vegetarian'} Plates</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {getItems(category).map((item, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ x: 10, backgroundColor: '#f8fafc' }}
                  className="flex flex-col md:flex-row items-center justify-between p-6 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-100 group transition-all"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left flex-1">
                    <div className="w-full md:w-32 h-48 md:h-32 rounded-2xl overflow-hidden shadow-lg border-2 border-white flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-2">{item.name}</h4>
                      <p className="text-slate-500 max-w-lg">{item.desc}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-between md:justify-end gap-6 w-full md:w-auto mt-8 md:mt-0 pt-8 md:pt-0 border-t md:border-t-0 border-slate-50">
                    <div className="text-center md:text-right">
                      <span className="text-4xl font-black text-emerald-600 tracking-tight">₹{item.price}</span>
                      <span className="text-sm text-slate-400 font-bold block mt-1 uppercase tracking-wider">Per Plate</span>
                    </div>
                    <Link to="/booking" state={{ selectedPlan: item }} className="w-full sm:w-auto flex justify-center">
                      <Button variant="secondary" className="w-full sm:w-auto whitespace-nowrap">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <Link to="/menu">
          <Button variant="ghost">
            View Custom Menu Options <ChevronRight size={20} />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default PackageList;
