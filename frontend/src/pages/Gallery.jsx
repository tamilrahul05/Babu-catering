import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Unified Gallery Database of 12 premium photos
const PHOTO_GALLERY = [
  { id: 1, title: 'Traditional Royal Thali Plating', img: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=800' },
  { id: 2, title: 'Luxurious Wedding Banquet setup', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800' },
  { id: 3, title: 'Gourmet Saffron Halwa counter', img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800' },
  { id: 4, title: 'Interactive Dessert nitrogen station', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800' },
  { id: 5, title: 'Corporate VIP Buffet layout', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800' },
  { id: 6, title: 'Hot Appam & Dosa Live counter', img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800' },
  { id: 7, title: 'Traditional South Indian Feast on Banana Leaf', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800' },
  { id: 8, title: 'Crispy Ghee Dosa Served with Chutneys', img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800' },
  { id: 9, title: 'Live Medhu Vada & Tiffin Counter', img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800' },
  { id: 10, title: 'Traditional Elaneer Payasam Dessert', img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800' },
  { id: 11, title: 'Royal South Indian Tiffin Platings', img: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=800' },
  { id: 12, title: 'Delhi Dahi Vada & Chaat Platter', img: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=800' }
];

const GalleryPage = () => {
  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      
      {/* 1. Header Banner */}
      <div 
        className="relative h-[250px] md:h-[350px] bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1600&q=80')` }}
      >
        <div className="absolute inset-0 z-10" />
        <div className="relative z-20">
          <h1 className="font-playfair font-black text-4xl md:text-6xl text-[#FFFFFF] mb-3 tracking-wide drop-shadow-md">
            Gallery
          </h1>
          <p className="font-outfit text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-zinc-300">
            <Link to="/" className="hover:text-[#0DCD6A] transition-colors">Home</Link> <span className="text-[#0DCD6A]/60 mx-1">/</span> <span className="text-[#0DCD6A]">Gallery</span>
          </p>
        </div>
      </div>

      {/* 2. Photo Grid */}
      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PHOTO_GALLERY.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (item.id % 3) * 0.1 }}
              onClick={() => setLightboxImg(item.img)}
              className="group relative rounded-[2rem] overflow-hidden border border-[#E4E7EB] bg-[#FAF8F5] cursor-pointer shadow-md hover:border-[#0DCD6A] transition-all duration-500 flex flex-col h-[280px]"
            >
              <div className="w-full h-full overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. Lightbox Modal */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            <button 
              onClick={() => setLightboxImg(null)} 
              className="absolute top-6 right-6 text-zinc-400 hover:text-white p-3 rounded-full transition-colors"
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
              alt="Zoomed View" 
              className="max-w-full max-h-[85vh] rounded-3xl object-contain border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default GalleryPage;
