import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, ClipboardList, ChefHat, Sparkles, Heart } from 'lucide-react';

const steps = [
  { 
    number: '01', 
    desc: 'Reach out via our quick consultation form or call us live to lock in your initial query.', 
    icon: Phone 
  },
  { 
    number: '02', 
    desc: 'Meet our luxury hospitality managers to discuss guest profiles, locations, and styling visions.', 
    icon: Calendar 
  },
  { 
    number: '03', 
    desc: 'Settle on a spectacular bespoke platter using our customized digital menu builders.', 
    icon: ClipboardList 
  },
  { 
    number: '04', 
    desc: 'Procure organic ingredients, set up cooking audits, and prepare logistics schedules.', 
    icon: ChefHat 
  },
  { 
    number: '05', 
    desc: 'Complete high-end plating, live food station custom cooking, and luxury waiter service.', 
    icon: Sparkles 
  },
  { 
    number: '06', 
    desc: 'Collect review feedback and ensure every single wedding guest departs with culinary memories.', 
    icon: Heart 
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-white px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1.5 px-6 rounded-full bg-[#E8F8F0] text-[#0DCD6A] font-bold tracking-[0.25em] uppercase text-[10px] md:text-xs mb-4 border border-[#0DCD6A]/20"
          >
            HOW IT WORKS
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tight font-playfair italic text-[#219C45] mb-4"
          >
            Timeline
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-zinc-700 text-sm md:text-base max-w-xl mx-auto"
          >
            Experience a pristine five-star coordination journey from your first inquiry call to the final dessert plate.
          </motion.p>
        </div>

        {/* Timeline Grid (6 Steps) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-zinc-200 rounded-[1.5rem] p-8 md:p-10 flex flex-col justify-between min-h-[220px] transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#5A5C5E] flex items-center justify-center shadow-inner">
                    <Icon className="text-[#2ECC71] w-6 h-6" strokeWidth={2.5} />
                  </div>
                  <span className="text-4xl md:text-5xl font-black text-[#2D3748] tracking-tighter">
                    {step.number}
                  </span>
                </div>
                
                <p className="text-[16px] text-zinc-700 font-medium leading-relaxed mt-auto pr-4">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;
