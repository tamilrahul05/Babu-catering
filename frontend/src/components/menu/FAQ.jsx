import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    { q: 'What is included in the basic plate?', a: 'Our basic plate includes authentic Ponni rice, traditional Sambar, Rasam, one vegetable Poriyal, Appalam, Pickle, and Curd.' },
    { q: 'Do you provide on-site cooking?', a: 'Yes, for large events and weddings, we provide on-site cooking to ensure the freshest possible experience for your guests.' },
    { q: 'Can I customize the menu after booking?', a: 'Absolutely. You can modify your menu items up to 7 days before the event date by contacting our coordinators.' },
    { q: 'What is the minimum number of plates for an order?', a: 'The minimum order quantity varies by category: 50 plates for standard events and 100 plates for premium wedding packages.' }
  ];

  return (
    <section className="py-32 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm block mb-4">Common Inquiries</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Frequently Asked <span className="text-emerald-600">Questions</span></h2>
      </div>

      <div className="space-y-4">
        {questions.map((item, i) => (
          <div key={i} className="border border-slate-100 rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full p-8 flex items-center justify-between text-left"
            >
              <span className="text-xl font-bold text-slate-800">{item.q}</span>
              <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500">
                {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
              </div>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <div className="px-8 pb-8 text-slate-500 text-lg leading-relaxed border-t border-slate-50 pt-4">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
