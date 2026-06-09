import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Utensils, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const MENU_DATA = {
 Breakfast: [
 { name: 'Kanchipuram Idli', desc: 'Spiced traditional steamed rice cakes seasoned with pepper, cumin, and ginger, served with fresh coconut chutney.', img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600', popular: true },
 { name: 'Ghee Podi Roast', desc: 'Crisp golden crepe smeared with premium aromatic ghee and hand-pounded spiced lentil powder (podi).', img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600', popular: false },
 { name: 'Mini Tiffin Platter', desc: 'An grand assortment of mini idli, crispy vada, small ghee roast, and traditional hot rava kesari.', img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600', popular: true }
 ],
 Lunch: [
 { name: 'Royal Veg Thali', desc: 'A majestic feast featuring 24+ traditional delicacies served on authentic banana leaves with premium Basmati rice.', img: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=600', popular: true },
 { name: 'Seeraga Samba Mutton Biryani', desc: 'A rich culinary masterpiece prepared with short-grain aromatic rice, tender local mutton, and secret spices.', img: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=600', popular: true },
 { name: 'Malabar Fish Curry Feast', desc: 'Authentic King Fish cooked in tangy spiced coconut gravy, paired with steaming hot red rice.', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600', popular: false }
 ],
 Dinner: [
 { name: 'Methi Chaman Parotta', desc: 'Flaky layered hand-stretched parottas stuffed with fresh fenugreek greens and spiced paneer filling.', img: 'https://images.unsplash.com/photo-1604908177453-7462950a6a3b?w=600', popular: false },
 { name: 'Paneer Butter Masala Gala', desc: 'Soft cottage cheese cubes simmered in a velvet tomato, cream, and organic cashew nut gravy.', img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc0?w=600', popular: true },
 { name: 'Chettinad Pepper Chicken', desc: 'Tender chicken dry-tossed in a robust black pepper and freshly roasted spice mix from Chettinad.', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600', popular: true }
 ],
 Snacks: [
 { name: 'Gold-Glazed Gobi 65', desc: 'Crispy marinated cauliflower florets deep-fried with curry leaves and premium South Indian spices.', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600', popular: false },
 { name: 'Premium Cashew Samosa', desc: 'Golden crust parcels stuffed with seasoned potatoes, green peas, and whole roasted split cashews.', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600', popular: true }
 ],
 Sweets: [
 { name: 'Rich Badam Halwa', desc: 'Luxurious melt-in-the-mouth sweet prepared from pure ground almonds, organic saffron strands, and rich ghee.', img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600', popular: true },
 { name: 'Saffron Malai Rajbhog', desc: 'Spongy chhena dumplings soaked in rich saffron-flavored sweet milk, garnished with pistachios.', img: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=600', popular: true },
 { name: 'Traditional Adai Pradhaman', desc: 'Exquisite slow-cooked lentil and rice jaggery payasam rich in coconut milk and fried cardamom bits.', img: 'https://images.unsplash.com/photo-1605197136364-44bfa28dd534?w=600', popular: false }
 ],
 'Live Counters': [
 { name: 'Interactive Dosa Gallery', desc: 'Live chefs crafting hot paper-thin crispy dosas with 10+ options of gourmet fillings and chutneys.', img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600', popular: true },
 { name: 'Liquid Nitrogen Ice Cream', desc: 'Spectacular instant-frozen fresh cream dessert bar customized live in front of event guests.', img: 'https://images.unsplash.com/photo-1501443762994-82bd5dabb892?w=600', popular: true }
 ]
};

const SignatureMenu = () => {
 const [activeTab, setActiveTab] = useState('Breakfast');

 return (
 <section className="py-32 bg-zinc-950 px-6 relative overflow-hidden">
 {/* Background Ornaments */}
 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full ] pointer-events-none"></div>
 <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/5 rounded-full ] pointer-events-none"></div>

 <div className="max-w-7xl mx-auto relative z-10">
 
 {/* Header */}
 <div className="text-center mb-20">
 <motion.span 
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="inline-block py-2 px-8 rounded-full bg-green-500/10 text-green-500 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 border border-green-500/20"
 >
 Culinary Arts
 </motion.span>
 <motion.h2 
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.1 }}
 viewport={{ once: true }}
 className="text-4xl md:text-6xl font-black text-white tracking-tighter"
 >
 Signature <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-600 italic">Delicacies</span>
 </motion.h2>
 <motion.p
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2 }}
 viewport={{ once: true }}
 className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto mt-4"
 >
 Explore our curated culinary collection, slow-cooked to perfection by our master chefs for your prestigious events.
 </motion.p>
 </div>

 {/* Tab Filters */}
 <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 max-w-4xl mx-auto">
 {Object.keys(MENU_DATA).map((tab) => (
 <button
 key={tab}
 onClick={() => setActiveTab(tab)}
 className={`px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 border focus:outline-none ${
 activeTab === tab 
 ? 'bg-gradient-to-br from-[#0DCD6A] to-[#39E18B] text-[#676767] border-transparent shadow-[0_10px_20px_rgba(0,177,79,0.25)] hover:scale-[1.02]' 
 : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
 }`}
 >
 {tab}
 </button>
 ))}
 </div>

 {/* Menu Grid */}
 <AnimatePresence mode="wait">
 <motion.div
 key={activeTab}
 initial={{ opacity: 0, y: 15 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: 15 }}
 transition={{ duration: 0.4 }}
 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
 >
 {MENU_DATA[activeTab].map((dish, index) => (
 <div
 key={dish.name}
 className="group relative bg-zinc-900 rounded-[2.5rem] p-5 border border-zinc-800 transition-all duration-500 flex flex-col hover:border-green-500/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
 >
 {/* Image panel */}
 <div className="relative w-full h-[220px] rounded-[2rem] overflow-hidden bg-zinc-800 mb-6">
 <img 
 src={dish.img} 
 alt={dish.name} 
 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
 loading="lazy"
 />
 {dish.popular && (
 <div className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-green-600 text-black font-black text-[9px] uppercase tracking-widest px-3 py-1 rounded-full shadow-lg flex items-center gap-1 border border-green-300">
 <Star size={10} className="fill-black" /> Popular Choice
 </div>
 )}
 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover: transition-opacity"></div>
 </div>

 {/* Details */}
 <div className="flex-1 flex flex-col px-2">
 <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#0DCD6A] transition-colors duration-300">
 {dish.name}
 </h4>
 <p className="text-zinc-500 text-sm leading-relaxed mb-6 font-medium">
 {dish.desc}
 </p>
 
 {/* Bottom Plate pick */}
 <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
 <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
 Premium Platter Choice
 </span>
 <Link 
 to={`/menu/${activeTab}`}
 className="text-[#0DCD6A] hover:text-white font-extrabold text-xs uppercase tracking-widest flex items-center gap-1 group/link transition-colors"
 >
 Pick Item <Utensils size={12} className="group-hover/link:translate-x-1 transition-transform" />
 </Link>
 </div>
 </div>
 </div>
 ))}
 </motion.div>
 </AnimatePresence>

 {/* Footer Link */}
 <div className="text-center mt-16">
 <Link to="/menu">
 <button className="px-10 py-4 border border-zinc-800 text-zinc-400 font-bold text-sm uppercase tracking-widest rounded-full hover:border-[#0DCD6A] hover:text-[#0DCD6A] transition-all duration-300 hover:scale-102">
 Customize Your Own Menu Plate
 </button>
 </Link>
 </div>

 </div>
 </section>
 );
};

export default SignatureMenu;


