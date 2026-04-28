import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin } from 'lucide-react';

const Stats = () => {
  const stats = [
    { icon: <Calendar size={40} className="text-amber-500" />, count: '1000+', label: 'Events Managed' },
    { icon: <Users size={40} className="text-amber-500" />, count: '50,000+', label: 'Happy Guests' },
    { icon: <MapPin size={40} className="text-amber-500" />, count: '3 Locations', label: 'Serving Across Chennai' }
  ];

  return (
    <section className="relative z-20 -mt-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-zinc-900 rounded-sm  p-8 md:p-12 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 via-amber-300 to-amber-600 opacity-80"></div>
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-amber-500 rounded-full -[100px] opacity-10 pointer-events-none"></div>

        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            className="flex items-center gap-6 text-left w-full md:w-auto group cursor-default relative z-10"
          >
            <div className="p-5 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 rounded-sm  transition-all duration-500">
              <div className="group-hover:text-black transition-colors duration-500 text-amber-500">
                {React.cloneElement(stat.icon, { className: 'inherit' })}
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-black text-white tracking-tight transition-all duration-300">
                {stat.count}
              </h3>
              <p className="text-zinc-400 font-bold uppercase tracking-wider text-sm mt-1">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
