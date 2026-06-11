import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Video, X, Maximize2 } from 'lucide-react';
import promoVideo from '../assets/video1.mp4';
import promoVideo2 from '../assets/video2.mp4';
import promoVideo3 from '../assets/video3.mp4';

// Rich Photo Gallery Database
const PHOTO_GALLERY = [
  { id: 1, category: 'Food', title: 'Traditional Royal Thali Plating', img: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=800' },
  { id: 2, category: 'Events', title: 'Luxurious Wedding Banquet setup', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800' },
  { id: 3, category: 'Live Cooking', title: 'Gourmet Saffron Halwa counter', img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800' },
  { id: 4, category: 'Food', title: 'Interactive Dessert nitrogen station', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800' },
  { id: 5, category: 'Events', title: 'Corporate VIP Buffet layout', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800' },
  { id: 6, category: 'Live Cooking', title: 'Hot Appam & Dosa Live counter', img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800' }
];

const Gallery = () => {
  const [activeMode, setActiveMode] = useState('Photos'); // 'Photos' or 'Videos'
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxImg, setLightboxImg] = useState(null);

  const filteredPhotos = activeFilter === 'All' 
  ? PHOTO_GALLERY 
  : PHOTO_GALLERY.filter(item => item.category === activeFilter);

  return (
  <section id="gallery" className="py-32 bg-zinc-950 px-6 relative overflow-hidden">
  {/* Background glow skew */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-r from-green-500/5 to-green-500/5 pointer-events-none skew-y-12"></div>
  
  <div className="max-w-7xl mx-auto relative z-10">
  
  {/* Header */}
  <div className="text-center mb-16">
  <motion.span 
  initial={{ opacity: 0, y: 10 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  viewport={{ once: true }}
  className="inline-block py-2 px-8 rounded-full bg-green-100 text-green-700 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 border border-green-300"
  >
  Visual Excellence
  </motion.span>
  <motion.h2 
  initial={{ opacity: 0, y: 10 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  transition={{ delay: 0.1 }} 
  viewport={{ once: true }}
  className="text-4xl md:text-6xl font-black text-white tracking-tighter"
  >
  Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-600 italic">Highlights</span>
  </motion.h2>
  <motion.p 
  initial={{ opacity: 0, y: 10 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  transition={{ delay: 0.2 }} 
  viewport={{ once: true }}
  className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto mt-4"
  >
  Experience our five-star event services, pristine food presentation, and live culinary counters.
  </motion.p>
  </div>

  {/* Media Type Toggles (Photos / Videos) */}
  <div className="flex justify-center gap-4 mb-12">
  <button
  onClick={() => setActiveMode('Photos')}
  className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 border focus:outline-none ${
  activeMode === 'Photos' 
  ? 'bg-gradient-to-br from-[#0DCD6A] to-[#39E18B] text-black border-transparent shadow-lg hover:scale-102' 
  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
  }`}
  >
  <Camera size={14} /> Culinary Photos
  </button>
  <button
  onClick={() => setActiveMode('Videos')}
  className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 border focus:outline-none ${
  activeMode === 'Videos' 
  ? 'bg-gradient-to-br from-[#0DCD6A] to-[#39E18B] text-black border-transparent shadow-lg hover:scale-102' 
  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
  }`}
  >
  <Video size={14} /> Cinematic Highlight Videos
  </button>
  </div>

  {/* Photo Categories filter (Visible only in Photos mode) */}
  {activeMode === 'Photos' && (
  <div className="flex justify-center gap-3 flex-wrap mb-10">
  {['All', 'Food', 'Events', 'Live Cooking'].map((filter) => (
  <button
  key={filter}
  onClick={() => setActiveFilter(filter)}
  className={`px-5 py-2 text-[10px] font-black uppercase tracking-widest rounded-full transition-all duration-300 border focus:outline-none ${
  activeFilter === filter 
  ? 'border-[#0DCD6A] text-[#0DCD6A] bg-green-100' 
  : 'border-zinc-800 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300'
  }`}
  >
  {filter}
  </button>
  ))}
  </div>
  )}

  {/* Main media display panel */}
  <AnimatePresence mode="wait">
  {activeMode === 'Photos' ? (
  /* Masonry Photo Grid */
  <motion.div 
  key="photos"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
  >
  {filteredPhotos.map((item) => (
  <div 
  key={item.id}
  onClick={() => setLightboxImg(item.img)}
  className="group relative rounded-[2.5rem] overflow-hidden border border-zinc-800 bg-zinc-900 cursor-pointer shadow-lg hover:border-green-500 transition-all duration-500 flex flex-col h-[380px]"
  >
    <div className="w-full h-[280px] overflow-hidden relative">
      <img 
      src={item.img} 
      alt={item.title} 
      className="w-full h-full object-cover"
      loading="lazy"
      />
      {/* Category Pill */}
      <div className="absolute top-4 left-4 bg-zinc-950 px-3.5 py-1.5 rounded-full text-[9px] font-black text-green-500 tracking-wider uppercase border border-white/5 shadow-md">
      {item.category}
      </div>
    </div>
    
    {/* Info footer with solid background - no overlays on top of the image */}
    <div className="p-6 flex-1 flex flex-col justify-center bg-zinc-900 border-t border-zinc-800">
      <span className="text-[#0DCD6A] text-[10px] font-black uppercase tracking-widest mb-1">{item.category}</span>
      <h4 className="text-white text-base font-bold tracking-tight">{item.title}</h4>
    </div>
  </div>
  ))}
  </motion.div>
  ) : (
  /* Cinematic Video highlights */
  <motion.div 
  key="videos"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="grid grid-cols-1 lg:grid-cols-3 gap-8"
  >
  {[
  { video: promoVideo, label: 'Wedding Gala', title: 'Grand Wedding Service', desc: 'Experience the luxury of our full-service wedding catering, where every detail is perfected.' },
  { video: promoVideo2, label: 'Corporate Event', title: 'Premium Buffet Solutions', desc: 'Professional catering designed for high-end corporate gatherings and exclusive seminars.' },
  { video: promoVideo3, label: 'Festive Celebration', title: 'Authentic Grand Feast', desc: 'Traditional delicacies prepared specially for monumental family celebrations and festivals.' }
  ].map((card, i) => (
  <div 
  key={i}
  className="group bg-zinc-900 rounded-[2.5rem] p-5 border border-zinc-800 transition-all duration-500 flex flex-col hover:border-green-500 hover:shadow-2xl ring-1 ring-zinc-200"
  >
  <div className="relative w-full h-[240px] xl:h-[280px] rounded-[2rem] overflow-hidden bg-zinc-800 mb-6">
  <video 
  src={card.video} 
  autoPlay 
  muted 
  loop 
  playsInline 
  className="w-full h-full object-cover"
  ></video>
  <div className="absolute top-4 left-4 bg-zinc-950/80 px-4 py-1.5 rounded-full text-[9px] font-black text-green-500 tracking-widest uppercase border border-white/5 shadow-md">
  {card.label}
  </div>
  </div>
  <div className="px-2 pb-2 flex-1 flex flex-col justify-between">
  <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-[#0DCD6A] transition-colors duration-300">{card.title}</h3>
  <p className="text-zinc-500 text-sm font-medium leading-relaxed italic">"{card.desc}"</p>
  </div>
  </div>
  ))}
  </motion.div>
  )}
  </AnimatePresence>

 {/* Instagram CTA */}
 <div className="mt-20 text-center">
 <a href="https://www.instagram.com/babucatering/" target="_blank" rel="noopener noreferrer">
 <button className="inline-flex items-center gap-3 bg-zinc-900 border border-zinc-800 px-10 py-4.5 rounded-full font-black text-xs uppercase tracking-widest text-white hover:border-[#0DCD6A] hover:text-[#0DCD6A] transition-all duration-300 shadow-2xl">
 <Camera size={16} /> Follow Our Journey on Instagram
 </button>
 </a>
 </div>

 </div>

 {/* Interactive Fullscreen Photo Lightbox Overlay */}
 <AnimatePresence>
 {lightboxImg && (
 <motion.div 
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 "
 onClick={() => setLightboxImg(null)}
 >
 <button 
 onClick={() => setLightboxImg(null)} 
 className="absolute top-6 right-6 text-zinc-400 hover:text-white p-3 rounded-full bg-white/5 border border-white/10 transition-colors"
 title="Close lightbox"
 >
 <X size={24} />
 </button>
 <motion.img 
 initial={{ scale: 0.95, opacity: 0 }}
 animate={{ scale: 1, opacity: 1 }}
 exit={{ scale: 0.95, opacity: 0 }}
 transition={{ type: 'spring', damping: 25, stiffness: 200 }}
 src={lightboxImg} 
 alt="Lightbox Zoomed View" 
 className="max-w-full max-h-[85vh] rounded-3xl object-contain border border-white/10 shadow-2xl"
 onClick={(e) => e.stopPropagation()}
 />
 </motion.div>
 )}
 </AnimatePresence>

 </section>
 );
};

export default Gallery;


