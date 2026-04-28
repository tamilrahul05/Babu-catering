import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Share2, Globe } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-zinc-950 to-black text-white pt-12 pb-5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-8 relative z-10">
          <div className="lg:col-span-5">
            <img src={logo} alt="BABU Catering" className="rounded-full object-cover mb-4 drop-shadow-[0_4px_15px_rgba(212,175,55,0.3)] w-16 h-16" />
            <p className="text-zinc-400 max-w-md mb-6 font-light leading-relaxed text-sm">Making weddings and events memorable since 2010. High-class catering services for your special moments.</p>
            <div className="flex gap-4">
              {[MessageCircle, Share2, Globe].map((Icon, i) => (
                <a key={i} href="https://www.instagram.com/babucatering/" target="_blank" rel="noopener noreferrer" 
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white text-xl mb-6 font-extrabold tracking-wide font-playfair">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', link: '/' },
                { name: 'Our Menu', link: '/menu' },
                { name: 'Pre-Booking', link: '/booking' },
                { name: 'About Us', link: '/about' }
              ].map((item, i) => (
                <li key={i} className="flex items-center text-zinc-400 font-normal">
                  <a href={item.link} className="transition-all duration-300">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-white text-xl mb-6 font-extrabold tracking-wide font-playfair">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3.5 text-zinc-400 font-normal"><Phone size={18} className="text-amber-500" /> 9944769090</li>
              <li className="flex items-center gap-3.5 text-zinc-400 font-normal"><Phone size={18} className="text-amber-500" /> 9976379073</li>
              <li className="flex items-center gap-3.5 text-zinc-400 font-normal"><Mail size={18} className="text-amber-500" /> info@babucatering.com</li>
              <li className="flex items-center gap-3.5 text-zinc-400 font-normal"><MapPin size={18} className="text-amber-500" /> Kolathur, Tambaram, Valasarawakam</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-5 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} BABU Catering. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
