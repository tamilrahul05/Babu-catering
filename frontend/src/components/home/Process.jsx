import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ClipboardList, ChefHat, GlassWater } from 'lucide-react';

const Process = () => {
  const steps = [
    { number: '01', title: 'Connect', desc: 'Reach out via our booking form or WhatsApp to discuss your event vision.', icon: <MessageSquare size={32} /> },
    { number: '02', title: 'Consult', desc: 'Our experts help you curate the perfect menu tailored to your guests.', icon: <ClipboardList size={32} /> },
    { number: '03', title: 'Curate', desc: 'Our master chefs prepare authentic delicacies with high-quality ingredients.', icon: <ChefHat size={32} /> },
    { number: '04', title: 'Celebrate', desc: 'We handle everything from plating to serving while you enjoy your event.', icon: <GlassWater size={32} /> }
  ];

  return (
    <section className="py-32 bg-zinc-950 px-6 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500 rounded-full -[150px] opacity-10"></div>
        <div className="absolute top-40 -right-40 w-96 h-96 bg-yellow-500 rounded-full -[150px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block py-1.5 px-6 rounded-full bg-amber-500/10 text-amber-500 font-bold tracking-[0.3em] uppercase text-xs mb-6 border border-amber-500/20"
          >
            How It Works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Our Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 italic">Process</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto font-light"
          >
            Experience a stress-free journey from your first inquiry to the final bite.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[5.5rem] left-[10%] w-[80%] h-[1px] bg-gradient-to-r from-amber-500/10 via-amber-500/50 to-amber-500/10 -z-0"></div>
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            className="relative z-10 flex flex-col items-center text-center group bg-zinc-900 p-8 rounded-sm  border border-zinc-800 transition-all duration-300"
            >
              <div className="absolute -top-4 -right-4 text-7xl font-black text-zinc-800/50 transition-colors duration-300 z-0">
                {step.number}
              </div>
              
              <div className="relative z-10 w-24 h-24 mb-8 rounded-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 text-amber-500 border border-zinc-700/50 transition-all duration-500 transform ">
                {step.icon}
              </div>
              
              <h3 className="relative z-10 text-2xl font-extrabold text-white mb-4 transition-colors">
                {step.title}
              </h3>
              <p className="relative z-10 text-zinc-400 leading-relaxed font-medium">
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
