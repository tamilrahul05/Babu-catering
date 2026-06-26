import React from 'react';
import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';

const GalleryTeaser = () => {
  const previewImages = [
    { id: 1, title: 'Desserts', img: 'https://images.unsplash.com/photo-1579954115545-a95591f28bec?w=800' },
    { id: 2, title: 'Traditional Thali', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800' },
    { id: 3, title: 'Banana Leaf Feast', img: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=800' }
  ];

  return (
    <section className="py-24 bg-zinc-950 px-6 relative overflow-hidden border-t border-zinc-900">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0DCD6A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* Section Header */}
        <span className="inline-block py-2 px-8 rounded-full bg-green-100 text-green-700 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 border border-green-300">
          Visual Feast
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 font-playfair">
          Our Culinary <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-600 italic">Gallery</span>
        </h2>
        <p className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto mb-16">
          A visual journey through our luxurious event setups, five-star catering plating, and traditional banana leaf delicacies.
        </p>

        {/* Teaser 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {previewImages.map((item) => (
            <div 
              key={item.id}
              className="group relative rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl h-[320px] transition-all duration-500 hover:border-[#0DCD6A]/40"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                <span className="font-playfair text-lg text-white font-bold tracking-wide">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <Link to="/gallery">
          <button className="btn-luxury-cta group inline-flex items-center gap-3 px-10 py-4.5 rounded-full font-black text-xs uppercase tracking-widest text-black shadow-2xl">
            <Camera size={16} /> Explore Full Gallery
          </button>
        </Link>

      </div>
    </section>
  );
};

export default GalleryTeaser;
