import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin } from 'lucide-react';

const Stats = () => {
  const stats = [
    { icon: <Calendar size={40} className="text-emerald-500" />, count: '1000+', label: 'Events Managed' },
    { icon: <Users size={40} className="text-emerald-500" />, count: '50,000+', label: 'Happy Guests' },
    { icon: <MapPin size={40} className="text-emerald-500" />, count: '3 Locations', label: 'Serving Across Chennai' }
  ];

  return (
    <section className="relative z-20 -mt-20 px-6 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-10">
        {stats.map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: i * 0.1 }} 
            viewport={{ once: true }} 
            className="flex items-center gap-6 text-left w-full md:w-auto"
          >
            <div className="p-4 bg-emerald-50 rounded-2xl">{stat.icon}</div>
            <div>
              <h3 className="text-3xl font-extrabold text-slate-900">{stat.count}</h3>
              <p className="text-slate-500 font-medium">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
