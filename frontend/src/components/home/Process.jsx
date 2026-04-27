import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    { number: '01', title: 'Connect', desc: 'Reach out via our booking form or WhatsApp to discuss your event vision.' },
    { number: '02', title: 'Consult', desc: 'Our experts help you curate the perfect menu tailored to your guests.' },
    { number: '03', title: 'Curate', desc: 'Our master chefs prepare authentic delicacies with high-quality ingredients.' },
    { number: '04', title: 'Celebrate', desc: 'We handle everything from plating to serving while you enjoy your event.' }
  ];

  return (
    <section className="py-32 bg-slate-50 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm block mb-4">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our Seamless <span className="text-emerald-600">Process</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-0"></div>
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-white text-emerald-600 rounded-[2rem] flex items-center justify-center text-3xl font-black mb-8 shadow-xl shadow-slate-200 border-2 border-slate-50 ring-8 ring-slate-50">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
