import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import promoVideo from '../assets/video1.mp4';
import promoVideo2 from '../assets/video2.mp4';
import promoVideo3 from '../assets/video3.mp4';

const GalleryCard = ({ video, label, title, desc, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      className="group bg-zinc-900 rounded-[2.5rem] p-5 border border-zinc-800 transition-all duration-500 flex flex-col hover:border-amber-500/30 hover:shadow-2xl"
    >
      <div className="relative w-full h-[300px] xl:h-[380px] rounded-[2rem] overflow-hidden bg-zinc-800 mb-8 shadow-inner">
        <video 
          src={video} 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        ></video>
        <div className="absolute top-6 left-6 bg-zinc-950/80 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-black text-amber-500 tracking-[0.3em] uppercase border border-white/5 shadow-xl">
          {label}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="px-4 pb-4 flex-1 flex flex-col">
        <h3 className="text-2xl font-black text-white mb-3 transition-colors tracking-tight">{title}</h3>
        <p className="text-zinc-500 font-medium leading-relaxed italic text-sm md:text-base">"{desc}"</p>
      </div>
    </motion.div>
  );
};

const Gallery = () => {
  return (
    <section className="py-40 bg-zinc-950 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-r from-amber-500/5 to-yellow-500/5 blur-[150px] pointer-events-none skew-y-12"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-28">
          <motion.span 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="inline-block py-2 px-8 rounded-full bg-amber-500/10 text-amber-500 font-bold tracking-[0.4em] uppercase text-xs mb-8 border border-amber-500/20"
          >
            Visual Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }} 
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter"
          >
            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 italic font-medium">Highlights</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }} 
            viewport={{ once: true }}
            className="text-xl text-zinc-500 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Step into the world of Babu Catering through our collection of premium events and culinary showcases.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          <GalleryCard 
            video={promoVideo}
            label="Wedding Gala"
            title="Grand Wedding Service"
            desc="Experience the luxury of our full-service wedding catering, where every detail is perfected."
            delay={0}
          />
          <GalleryCard 
            video={promoVideo2}
            label="Corporate Event"
            title="Premium Buffet Solutions"
            desc="Professional catering designed for high-end corporate gatherings and exclusive seminars."
            delay={0.1}
          />
          <GalleryCard 
            video={promoVideo3}
            label="Festive Celebration"
            title="Authentic Grand Feast"
            desc="Traditional delicacies prepared specially for monumental family celebrations and festivals."
            delay={0.2}
          />
        </div>

        <div className="mt-28 text-center">
          <a href="https://www.instagram.com/babucatering/" target="_blank" rel="noopener noreferrer">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 bg-zinc-900 text-white border border-zinc-800 px-12 py-5 rounded-full font-black text-xl transition-all duration-300 hover:border-amber-500/50 hover:text-amber-500 shadow-2xl"
            >
              <Camera size={24} /> Follow Our Journey on Instagram
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
