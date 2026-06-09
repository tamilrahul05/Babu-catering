import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const events = [
 { 
 name: 'Betrothal', 
 image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80', 
 span: 'lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2 col-span-1 row-span-1', 
 description: 'Celebrate the beginning of your forever with a feast to remember.' 
 },
 { 
 name: 'Wedding', 
 image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80', 
 span: 'lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1 col-span-1 row-span-1', 
 description: 'Grand traditional feasts perfectly tailored for your special day.' 
 },
 { 
 name: 'Reception', 
 image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80', 
 span: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1', 
 description: 'Elegant dining and premium service for a memorable evening.' 
 },
 { 
 name: 'Baby Shower', 
 image: 'https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?auto=format&fit=crop&w=800&q=80', 
 span: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1', 
 description: 'Welcoming new life with authentic, heartwarming tastes.' 
 },
 { 
 name: 'Birthday', 
 image: 'https://images.unsplash.com/photo-1533222481259-ce20eda1e20b?auto=format&fit=crop&w=1200&q=80', 
 span: 'lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1 col-span-1 row-span-1', 
 description: 'Joyful and delicious catering for another beautiful year of life.' 
 },
 { 
 name: 'Puberty', 
 image: 'https://images.unsplash.com/photo-1596450514735-111a2fe02935?auto=format&fit=crop&w=800&q=80', 
 span: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1', 
 description: 'Traditional and respectful feasts for important family milestones.' 
 },
 { 
 name: 'House Warming', 
 image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80', 
 span: 'lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1 col-span-1 row-span-1', 
 description: 'Bless your new home with the aroma of delicious, authentic food.' 
 },
 { 
 name: 'Corporate Events', 
 image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80', 
 span: 'lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1 col-span-1 row-span-1', 
 description: 'Professional, high-quality catering for your business gatherings.' 
 }
];

const Events = () => {
 return (
 <section className="pt-12 pb-24 md:pt-16 md:pb-40 bg-zinc-950 relative overflow-hidden">
 <div className="max-w-7xl mx-auto px-6 relative z-10">
 <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
 <div className="max-w-3xl">
 <motion.div 
 initial={{ opacity: 0, x: -20 }} 
 whileInView={{ opacity: 1, x: 0 }} 
 viewport={{ once: true }}
 className="flex items-center gap-4 mb-6"
 >
 <span className="w-12 h-[1px] bg-green-500"></span>
 <span className="text-green-500 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">
 Welcome You All
 </span>
 </motion.div>
 <motion.h2 
 initial={{ opacity: 0, y: 20 }} 
 whileInView={{ opacity: 1, y: 0 }} 
 transition={{ delay: 0.1 }} 
 viewport={{ once: true }}
 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1]"
 >
 Events We <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-600 italic font-medium pr-4">Cater</span>
 </motion.h2>
 </div>
 <motion.div 
 initial={{ opacity: 0, y: 20 }} 
 whileInView={{ opacity: 1, y: 0 }} 
 transition={{ delay: 0.2 }} 
 viewport={{ once: true }}
 className="md:max-w-sm"
 >
 <p className="text-lg text-zinc-400 font-medium leading-relaxed">
 <span className="text-green-500/90 font-semibold block mb-1">Quality is Our Speciality.</span>
 We bring our legacy of authentic taste to make every occasion unforgettable.
 </p>
 </motion.div>
 </div>

 {/* Bento Grid */}
 <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[300px] md:auto-rows-[280px] gap-4 md:gap-6">
 {events.map((event, idx) => (
 <motion.div
 key={event.name}
 initial={{ opacity: 0, scale: 0.95 }}
 whileInView={{ opacity: 1, scale: 1 }}
 transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
 viewport={{ once: true }}
 className={`group relative rounded-3xl overflow-hidden cursor-pointer ${event.span}`}
 >
 {/* Background Image with smooth zoom on hover */}
 <div className="absolute inset-0 bg-zinc-900">
 <img 
 src={event.image} 
 alt={event.name} 
 loading="lazy"
 className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
 />
 </div>

 {/* Content */}
 <div className="absolute inset-0 p-8 flex flex-col justify-end">
 <div className="flex justify-between items-end gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
 <div>
 <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight group-hover:text-green-400 transition-colors duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
 {event.name}
 </h3>
 <p className="text-white text-sm font-bold leading-relaxed transition-opacity duration-500 delay-100 max-w-[90%] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
 {event.description}
 </p>
 </div>
 
 {/* Arrow Icon */}
 <div className="w-12 h-12 rounded-full bg-green-500 text-black flex items-center justify-center group-hover: transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shrink-0">
 <ArrowUpRight size={24} strokeWidth={2.5} />
 </div>
 </div>
 </div>
 
 {/* Gold Border on Hover */}
 <div className="absolute inset-0 border border-transparent rounded-3xl group-hover:border-green-500 transition-colors duration-500"></div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
};

export default Events;


