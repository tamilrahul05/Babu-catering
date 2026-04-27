import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, ShieldCheck, Clock, Soup, Utensils } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    { icon: <Award size={32} />, title: 'Expert Chefs', desc: 'Masters of traditional South Indian cuisine with decades of culinary wisdom.' },
    { icon: <ShieldCheck size={32} />, title: 'Hygiene First', desc: 'Strict adherence to global safety standards in every step of food preparation.' },
    { icon: <Soup size={32} />, title: 'Premium Quality', desc: 'We use only the finest hand-pounded spices and fresh local ingredients.' },
    { icon: <Utensils size={32} />, title: 'Valai Elai Service', desc: 'Traditional banana leaf service that brings the soul of tradition to your table.' },
    { icon: <Heart size={32} />, title: 'Tailored Menus', desc: 'Completely customizable catering solutions designed to match your event theme.' },
    { icon: <Clock size={32} />, title: 'Timely Delivery', desc: 'Punctual service that ensures your guests enjoy hot, fresh food on time.' }
  ];

  return (
    <section className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm block mb-4">The Babu Advantage</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Why We Are <span className="text-emerald-600">Preferred</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-600 mb-8 shadow-sm group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-lg">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
