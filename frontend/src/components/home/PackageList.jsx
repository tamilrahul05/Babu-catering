import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Award, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const PACKAGES = [
 {
 name: 'Silver Package',
 price: 400,
 desc: 'Traditional high-quality feast featuring key authentic classics.',
 popular: false,
 recommended: false,
 badge: 'Traditional Classic',
 features: [
 'Standard Welcome Drink',
 'Authentic Banana Leaf Meals',
 '12+ Traditional Delicacies',
 'Standard Catering Crockery',
 'Punctual On-Time Setup'
 ]
 },
 {
 name: 'Gold Package',
 price: 650,
 desc: 'Bespoke culinary experience with diverse appetizers and sweet options.',
 popular: false,
 recommended: true,
 badge: 'Affordable Luxury',
 features: [
 'Welcome Drinks (2 Options)',
 '2 Appetizers / Snacks',
 '18+ Premium Delicacies',
 'Elegant Buffet Setup',
 '1 Premium Dessert Selection',
 'Traditional Leaf/Plate Dining'
 ]
 },
 {
 name: 'Premium Package',
 price: 900,
 desc: 'Full-service luxury banquet with dynamic live food stations.',
 popular: true,
 recommended: false,
 badge: 'Popular Choice',
 features: [
 'Artisanal Welcome Cocktails',
 '3 Live Counter Stations',
 '24+ Luxurious Platter Items',
 'Premium Dessert Bar',
 'Banquet Waiter Service Team',
 'Glassware & Linen Decor'
 ]
 },
 {
 name: 'Luxury Package',
 price: 1200,
 desc: 'Ultra-exclusive customized VIP dining designed for majestic weddings.',
 popular: false,
 recommended: false,
 badge: 'Signature VIP',
 features: [
 'Liquid Nitrogen Mocktails',
 '5 Gourmet Live Stations',
 'Unlimited Platters & Buffets',
 'Imported Chocolate Fountains',
 'VIP Butler Waiter Service',
 'Exquisite Fine-Dining Theme'
 ]
 }
];

const PackageList = () => {
 return (
 <section className="py-32 bg-zinc-950 px-6 relative overflow-hidden">

 <div className="max-w-7xl mx-auto relative z-10">
 
 {/* Header */}
 <div className="text-center mb-24">
 <motion.span 
 initial={{ opacity: 0, y: 10 }} 
 whileInView={{ opacity: 1, y: 0 }} 
 viewport={{ once: true }}
 className="inline-block py-2 px-8 rounded-full bg-green-100 text-green-700 font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs mb-6 border border-green-300"
 >
 Prestigious Plans
 </motion.span>
 <motion.h2 
 initial={{ opacity: 0, y: 10 }} 
 whileInView={{ opacity: 1, y: 0 }} 
 transition={{ delay: 0.1 }} 
 viewport={{ once: true }}
 className="text-4xl md:text-6xl font-black text-white tracking-tighter"
 >
 Exclusive Catering <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-600 italic">Packages</span>
 </motion.h2>
 <motion.p 
 initial={{ opacity: 0, y: 10 }} 
 whileInView={{ opacity: 1, y: 0 }} 
 transition={{ delay: 0.2 }} 
 viewport={{ once: true }}
 className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto mt-4"
 >
 Select from our curated menu tiers designed to match standard gatherings, grand wedding banquets, and prestigious corporate galas.
 </motion.p>
 </div>

 {/* Pricing Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
 {PACKAGES.map((pkg, idx) => {
 const isSpecial = pkg.recommended || pkg.popular;
 return (
 <motion.div
 key={pkg.name}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ delay: idx * 0.08, duration: 0.6 }}
 viewport={{ once: true }}
 whileHover={{ y: -8 }}
 className={`relative flex flex-col p-8 bg-zinc-900 rounded-[2.5rem] border transition-all duration-500 ${
 isSpecial 
 ? 'border-[#0DCD6A] shadow-[0_20px_40px_rgba(0,177,79,0.15)] ring-1 ring-[#0DCD6A] z-10' 
 : 'border-zinc-800 z-0 hover:border-zinc-700 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]'
 } h-full`}
 >
 {/* Special Tag */}
 {isSpecial && (
 <div className="absolute -top-4.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0DCD6A] to-[#39E18B] text-black px-5 py-1.5 rounded-full text-[9px] font-black tracking-widest flex items-center gap-1 z-30 border border-green-300 shadow-xl">
 <Star size={10} className="fill-black" /> {pkg.badge}
 </div>
 )}
 
 {/* Tier Name */}
 <div className="mb-6 border-b border-zinc-200 pb-6 text-center">
 <span className="text-zinc-500 font-bold uppercase tracking-wider text-[10px] block mb-2">{pkg.badge}</span>
 <h4 className="text-2xl font-black text-white tracking-tight">{pkg.name}</h4>
 <p className="text-zinc-500 text-xs mt-3 leading-relaxed min-h-[40px] px-2">"{pkg.desc}"</p>
 </div>

 {/* Price Display */}
 <div className="text-center mb-8">
 <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest block mb-2">Starting at</span>
 <span className="text-5xl font-black text-white tracking-tighter">₹{pkg.price}</span>
 <span className="text-[10px] text-zinc-500 font-extrabold uppercase tracking-widest block mt-2">/ Plate serving</span>
 </div>

 {/* Feature List */}
 <ul className="space-y-4 mb-8 flex-1">
 {pkg.features.map((feature, fIdx) => (
 <li key={fIdx} className="flex items-start gap-3">
 <div className="w-5 h-5 rounded-full bg-green-100 border border-green-300 flex items-center justify-center shrink-0 text-[#0DCD6A]">
 <Check size={12} strokeWidth={3} />
 </div>
 <span className="text-zinc-400 text-sm font-medium leading-tight">{feature}</span>
 </li>
 ))}
 </ul>

 {/* CTA trigger */}
 <div className="pt-6 border-t border-zinc-200 mt-auto">
 <Link 
 to="/booking" 
 state={{ 
 selectedPlan: {
 name: pkg.name,
 price: pkg.price,
 category: 'Special Event'
 } 
 }} 
 className="block w-full"
 >
 <button className={`w-full py-4.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-lg active:scale-[0.98] ${
 isSpecial 
 ? 'bg-gradient-to-r from-[#0DCD6A] to-[#39E18B] text-black hover:from-[#09B35C] hover:to-[#0DCD6A]' 
 : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white'
 }`}>
 Book Package Plan
 </button>
 </Link>
 </div>

 </motion.div>
 );
 })}
 </div>

 </div>
 </section>
 );
};

export default PackageList;


