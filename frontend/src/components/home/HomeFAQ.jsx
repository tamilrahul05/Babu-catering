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
    <div className="border-b border-zinc-100 py-6 transition-all">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left focus:outline-none group py-2"
      >
        <span className="text-base md:text-[17px] font-bold text-zinc-700 transition-colors duration-300 pr-4 flex items-center gap-4 group-hover:text-[#2ECC71]">
          <HelpCircle size={20} className="text-[#2ECC71] shrink-0" />
          <span>{q}</span>
        </span>
        <ChevronDown 
          size={20} 
          className={`text-zinc-600 group-hover:text-[#2ECC71] transition-transform duration-500 shrink-0 ${
            isOpen ? 'rotate-180 text-[#2ECC71]' : ''
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
            <p className="pt-4 pb-2 pl-[36px] text-zinc-700 text-sm md:text-[15px] leading-relaxed font-medium">
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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F3FCF6] rounded-full blur-[80px] pointer-events-none opacity-80"></div>
      
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1.5 px-6 rounded-full bg-[#E8F8F0] text-[#0DCD6A] font-bold tracking-[0.25em] uppercase text-[10px] md:text-xs mb-4 border border-[#0DCD6A]/20"
          >
            HAVE QUERIES?
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tight font-playfair italic text-[#219C45]"
          >
            General Questions
          </motion.h2>
        </div>

        {/* FAQ Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-zinc-100"
        >
          <div className="flex flex-col">
            {FAQ_ITEMS.map((item, index) => (
              <FAQItem 
                key={index}
                q={item.q}
                a={item.a}
                isOpen={openIndex === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeFAQ;
