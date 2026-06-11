import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Clock, Soup, Utensils, Users, Sparkles } from 'lucide-react';

const WhyChooseUs = () => {
 const features = [
 { icon: <Soup size={32} />, title: 'Premium Ingredients', desc: 'We source only organic, fresh, and hand-selected ingredients to ensure a rich sensory dining experience.' },
 { icon: <ShieldCheck size={32} />, title: 'Fresh & Hygienic Cooking', desc: 'Prepare all food in ultra-sanitized modern kitchens adhering to strict five-star hygiene audits.' },
 { icon: <Users size={32} />, title: 'Professional Service Team', desc: 'Our hospitality staff are highly trained in premium banquet service etiquette and traditional attire.' },
 { icon: <Utensils size={32} />, title: 'Customized Menus', desc: 'From classic traditional leaf service to progressive fusion dishes, custom menus tailored to your needs.' },
 { icon: <Sparkles size={32} />, title: 'Affordable Luxury Packages', desc: 'Premium, five-star hotel quality catering packaged at competitive price ranges starting ₹400 per plate.' },
 { icon: <Clock size={32} />, title: 'On-Time Event Execution', desc: 'Punctual logistics and layout setups ensuring hot, fresh delicacies are served precisely on schedule.' }
 ];

 return (
 <section className="py-32 bg-zinc-950 px-6 relative overflow-hidden">

 <div className="max-w-7xl mx-auto relative z-10">
 
 {/* Header */}
 <div className="text-center mb-20">
 <motion.span 
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="inline-block py-2 px-8 rounded-full bg-green-100 text-green-700 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 border border-green-300"
 >
 The Babu Advantage
 </motion.span>
 <motion.h2 
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.1 }}
 viewport={{ once: true }}
 className="text-4xl md:text-6xl font-black text-white tracking-tighter"
 >
 Why We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-600 italic">Preferred</span>
 </motion.h2>
 </div>
 
 {/* Cards Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {features.map((item, i) => (
 <motion.div 
 key={i}
 initial={{ opacity: 0, y: 35 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ delay: i * 0.08, duration: 0.6 }}
 viewport={{ once: true }}
 whileHover={{ y: -8, scale: 1.02 }}
 className="p-10 rounded-[2.5rem] bg-zinc-900 border border-zinc-800 transition-all duration-500 group relative overflow-hidden hover:border-[#0DCD6A] hover:shadow-[0_20px_40px_rgba(0,177,79,0.15)] ring-1 ring-zinc-200"
 >
 <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-[3rem] group-hover: transition-opacity duration-500 pointer-events-none"></div>
 
 <div className="w-16 h-16 bg-zinc-100 border border-zinc-200 rounded-2xl flex items-center justify-center text-green-500 mb-8 transition-all duration-500 group-hover:bg-green-100 group-hover:border-green-300 group-hover:scale-105 shrink-0 shadow-lg">
 {item.icon}
 </div>
 <h3 className="text-2xl font-bold text-white mb-4 transition-colors group-hover:text-[#0DCD6A] tracking-tight">{item.title}</h3>
 <p className="text-zinc-500 text-sm font-medium leading-relaxed">{item.desc}</p>
 </motion.div>
 ))}
 </div>

 </div>
 </section>
 );
};

export default WhyChooseUs;
