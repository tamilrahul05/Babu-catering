import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, CalendarDays, ClipboardList, ChefHat, Sparkles, Heart } from 'lucide-react';

const steps = [
 { number: '01', title: 'Contact Us', desc: 'Reach out via our quick consultation form or call us live to lock in your initial query.', icon: <PhoneCall size={28} /> },
 { number: '02', title: 'Discuss Requirements', desc: 'Meet our luxury hospitality managers to discuss guest profiles, locations, and styling visions.', icon: <CalendarDays size={28} /> },
 { number: '03', title: 'Menu Planning', desc: 'Settle on a spectacular bespoke platter using our customized digital menu builders.', icon: <ClipboardList size={28} /> },
 { number: '04', title: 'Event Preparation', desc: 'Procure organic ingredients, set up cooking audits, and prepare logistics schedules.', icon: <ChefHat size={28} /> },
 { number: '05', title: 'Event Execution', desc: 'Complete high-end plating, live food station custom cooking, and luxury waiter service.', icon: <Sparkles size={28} /> },
 { number: '06', title: 'Customer Satisfaction', desc: 'Collect review feedback and ensure every single wedding guest departs with culinary memories.', icon: <Heart size={28} /> }
];

const Process = () => {
 return (
 <section className="py-32 bg-zinc-950 px-6 relative overflow-hidden">

 <div className="max-w-7xl mx-auto relative z-10">
 
 {/* Header */}
 <div className="text-center mb-24">
 <motion.span 
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="inline-block py-2 px-8 rounded-full bg-green-100 text-green-700 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 border border-green-300"
 >
 How It Works
 </motion.span>
 <motion.h2 
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.1 }}
 viewport={{ once: true }}
 className="text-4xl md:text-6xl font-black text-white tracking-tighter"
 >
 Our Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-600 italic">Timeline</span>
 </motion.h2>
 <motion.p
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2 }}
 viewport={{ once: true }}
 className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto mt-4"
 >
 Experience a pristine five-star coordination journey from your first inquiry call to the final dessert plate.
 </motion.p>
 </div>

 {/* Timeline Grid (6 Steps) */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative">
 
 {steps.map((step, i) => (
 <motion.div 
 key={i}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ delay: i * 0.08, duration: 0.6 }}
 viewport={{ once: true }}
 whileHover={{ y: -6 }}
 className="relative z-10 flex flex-col items-start bg-zinc-900 p-8 md:p-10 rounded-[2.5rem] border border-zinc-800 transition-all duration-500 group hover:border-[#0DCD6A] hover:shadow-[0_20px_40px_rgba(0,177,79,0.15)] ring-1 ring-zinc-200"
 >
 {/* Timeline step indicator */}
 <div className="absolute top-6 right-8 text-6xl font-black text-zinc-300 group-hover:text-green-300 transition-colors duration-500 z-0 select-none">
 {step.number}
 </div>
 
 {/* Icon panel */}
 <div className="relative z-10 w-16 h-16 mb-8 rounded-2xl flex items-center justify-center bg-zinc-100 border border-zinc-200 text-green-500 transition-all duration-500 group-hover:bg-green-100 group-hover:border-green-300 group-hover:scale-105 shrink-0 shadow-lg">
 {step.icon}
 </div>
 
 {/* Details */}
 <h3 className="relative z-10 text-2xl font-bold text-white mb-4 transition-colors group-hover:text-[#0DCD6A] tracking-tight">
 {step.title}
 </h3>
 <p className="relative z-10 text-zinc-500 text-sm leading-relaxed font-medium">
 {step.desc}
 </p>
 </motion.div>
 ))}
 
 </div>

 </div>
 </section>
 );
};

export default Process;


