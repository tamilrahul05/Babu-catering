import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ_ITEMS = [
 {
 q: 'What is the minimum guest count required for catering?',
 a: 'We cater to gatherings of all sizes! The minimum order quantity is 50 plates for small family celebrations/private dining, and 100 plates for premium wedding banquets or corporate events.'
 },
 {
 q: 'Can we completely customize the menu?',
 a: 'Absolutely! Our menu packages are fully customizable. You can use our interactive Online Menu Builder to pick specific items across Vegetarian, Non-Vegetarian, Sweets, and Live Food Stations to create your bespoke menu.'
 },
 {
 q: 'Do you cater to events outside the city?',
 a: 'Yes, we provide outstation catering services across Tamil Nadu and neighbouring regions for premium wedding celebrations and VIP functions. Reach out to our event coordinator to arrange logistical detail planning.'
 },
 {
 q: 'Are live food counters included in your standard packages?',
 a: 'Live counters (such as our hot Appam/Dosa stations or nitrogen dessert bars) can be seamlessly bundled into our Gold, Premium, or Luxury packages as an add-on during booking confirmation.'
 },
 {
 q: 'How far in advance should we reserve our booking?',
 a: 'To guarantee availability on high-demand wedding dates and festive seasons, we recommend securing your event booking at least 3 to 6 months in advance. A nominal 20% advance secures your calendar slot.'
 }
];

const FAQItem = ({ q, a, isOpen, onToggle }) => {
 return (
 <div className="border-b border-zinc-800/80 py-5 transition-all">
 <button
 onClick={onToggle}
 className="w-full flex items-center justify-between text-left focus:outline-none group py-2"
 >
 <span className="text-white text-base md:text-lg font-bold group-hover:text-[#0DCD6A] transition-colors duration-300 pr-4 flex items-center gap-3">
 <HelpCircle size={18} className="text-[#0DCD6A] shrink-0" />
 {q}
 </span>
 <ChevronDown 
 size={18} 
 className={`text-zinc-500 group-hover:text-[#0DCD6A] transition-transform duration-500 shrink-0 ${
 isOpen ? 'rotate-180 text-[#0DCD6A]' : ''
 }`} 
 />
 </button>
 
 <AnimatePresence initial={false}>
 {isOpen && (
 <motion.div
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: 'auto', opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 transition={{ duration: 0.3, ease: 'easeInOut' }}
 className="overflow-hidden"
 >
 <p className="text-zinc-400 text-sm md:text-base leading-relaxed pl-7 pt-4 pb-2">
 {a}
 </p>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 );
};

const HomeFAQ = () => {
 const [openIndex, setOpenIndex] = useState(0);

 return (
 <section className="py-32 bg-zinc-950 px-6 relative overflow-hidden">
 {/* Background Glow */}
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-green-500/5 rounded-full ] pointer-events-none"></div>

 <div className="max-w-4xl mx-auto relative z-10">
 
 {/* Header */}
 <div className="text-center mb-20">
 <motion.span 
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="inline-block py-2 px-8 rounded-full bg-green-500/10 text-green-500 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 border border-green-500/20"
 >
 Have Queries?
 </motion.span>
 <motion.h2 
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.1 }}
 viewport={{ once: true }}
 className="text-4xl md:text-6xl font-black text-white tracking-tighter"
 >
 General <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-600 italic">Questions</span>
 </motion.h2>
 </div>

 {/* Accordions */}
 <div className="bg-zinc-900/40 border border-zinc-800 rounded-[2.5rem] p-6 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
 {FAQ_ITEMS.map((item, idx) => (
 <FAQItem
 key={idx}
 q={item.q}
 a={item.a}
 isOpen={openIndex === idx}
 onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
 />
 ))}
 </div>

 </div>
 </section>
 );
};

export default HomeFAQ;


