import React from 'react';
import { motion } from 'framer-motion';
import { Gem, HeartHandshake, Wine, Baby, Cake, Flower2, Home, Briefcase } from 'lucide-react';

const events = [
  {
    name: 'Betrothal',
    icon: Gem,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
    description: 'A beautiful beginning to a lifetime together.'
  },
  {
    name: 'Wedding',
    icon: HeartHandshake,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    description: 'Where love comes together and celebrations begin.'
  },
  {
    name: 'Reception',
    icon: Wine,
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    description: 'Celebrate love with elegance, grace and great food.'
  },
  {
    name: 'Baby Shower',
    icon: Baby,
    image: 'https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?auto=format&fit=crop&w=800&q=80',
    description: 'Welcoming new beginnings with love and blessings.'
  },
  {
    name: 'Birthday',
    icon: Cake,
    image: 'https://images.unsplash.com/photo-1533222481259-ce20eda1e20b?auto=format&fit=crop&w=1200&q=80',
    description: 'Make every birthday a memorable celebration.'
  },
  {
    name: 'Puberty Function',
    icon: Flower2,
    image: 'https://images.unsplash.com/photo-1596450514735-111a2fe02935?auto=format&fit=crop&w=800&q=80',
    description: 'Honoring traditions and celebrating milestones.'
  },
  {
    name: 'House Warming',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    description: 'New home, new beginnings, beautiful memories.'
  },
  {
    name: 'Corporate Events',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    description: 'Professional catering for your important occasions.'
  }
];

const Events = () => {
  return (
    <section id="events" className="pt-20 pb-28 md:pt-28 md:pb-36 bg-[#FFFDF5] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="w-10 h-[1px] bg-[#06200D]"></span>
            <span className="text-[#06200D] font-bold tracking-[0.2em] uppercase text-xs">
              WE CATER • YOU CELEBRATE
            </span>
            <span className="w-10 h-[1px] bg-[#06200D]"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }} 
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#06200D] tracking-tighter mb-4"
          >
            Moments Made <span className="text-[#D4AF37] italic font-medium font-playfair pr-2">Special</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }} 
            viewport={{ once: true }}
            className="text-sm md:text-base text-zinc-600 font-medium tracking-wide"
          >
            Delicious Food. Impeccable Service. Unforgettable Memories.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {events.map((event, idx) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col rounded-[2rem] overflow-hidden bg-[#06200D] border border-[#D4AF37] shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(212,175,55,0.2)] transition-all duration-500 cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative h-[220px] sm:h-[200px] lg:h-[180px] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/0 transition-colors duration-500"></div>
                  <img 
                    src={event.image} 
                    alt={event.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>
                
                {/* Content Section */}
                <div className="relative flex flex-col items-center text-center px-6 pt-10 pb-8 flex-1">
                  
                  {/* Floating Icon */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#06200D] border-2 border-[#D4AF37] flex items-center justify-center z-20 shadow-lg">
                    <Icon className="text-[#D4AF37] w-5 h-5" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-playfair text-[#D4AF37] mb-3">
                    {event.name}
                  </h3>
                  
                  <p className="text-white/90 text-[13px] leading-relaxed font-outfit px-2">
                    {event.description}
                  </p>
                  
                  {/* Decorative Flourish */}
                  <div className="mt-6 w-12 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center w-full"
        >
          <div className="relative bg-[#06200D] border border-[#D4AF37] rounded-[3rem] px-8 py-5 md:px-16 md:py-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)] max-w-4xl text-center before:absolute before:top-1/2 before:-left-3 before:-translate-y-1/2 before:w-6 before:h-6 before:bg-[#FFFDF5] before:rounded-full before:border-r before:border-[#D4AF37] after:absolute after:top-1/2 after:-right-3 after:-translate-y-1/2 after:w-6 after:h-6 after:bg-[#FFFDF5] after:rounded-full after:border-l after:border-[#D4AF37]">
            <p className="font-playfair text-[#E8C766] text-lg md:text-xl lg:text-2xl font-bold italic tracking-wide">
              From intimate gatherings to grand celebrations, <br className="hidden md:block" /> 
              we serve happiness on every plate.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Events;
