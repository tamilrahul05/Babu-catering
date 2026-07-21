import React, { useState } from 'react';
import { Share2, Globe, Send, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import logo from '@/assets/logo.png';

const EVENTS_TICKER = [
  'Wedding',
  'Reception',
  'Engagement',
  'Anniversary',
  'Seemantham',
  'Birthday',
  'House Warming',
  'Corporate Events',
  'Retirement Party'
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-white text-[#06200D] pt-0 pb-8 relative overflow-hidden border-t border-zinc-200">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#2ECC71] to-transparent z-30"></div>

      {/* Full-Width Moving Events Ticker */}
      <div className="w-full bg-white py-4 relative overflow-hidden flex select-none border-y border-zinc-200 z-20">
        <div className="flex gap-16 items-center animate-marquee whitespace-nowrap text-[#2ECC71] font-outfit text-xs md:text-sm font-black uppercase tracking-[0.3em]">
          {[...EVENTS_TICKER, ...EVENTS_TICKER, ...EVENTS_TICKER, ...EVENTS_TICKER].map((event, idx) => (
            <div key={idx} className="flex items-center gap-16">
              <span>{event}</span>
              <span className="text-amber-500 text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 relative z-10">
        {/* Main Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Col 1: Company Logo & Pitch */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="BABU Catering" className="rounded-full object-contain w-14 h-14 md:w-16 md:h-16 border border-zinc-200 shadow-sm bg-white p-0.5" />
              <div className="flex flex-col">
                <span className="font-playfair font-black text-lg tracking-wide text-[#2ECC71] leading-none">BABU <span className="text-[#06200D] italic">Catering</span></span>
                <span className="font-outfit text-[8px] uppercase tracking-[0.2em] text-zinc-700 font-bold mt-1">Luxury Events</span>
              </div>
            </Link>

            <p className="text-zinc-700 text-sm leading-relaxed mb-6 font-medium pr-4">
              Making wedding banquets and prestigious corporate events memorable since 2010. High-class, five-star catering services tailored for your grand celebrations.
            </p>

            {/* Social channels */}
            <div className="flex gap-3">
              {[
                { icon: <FaWhatsapp size={18} />, link: 'https://wa.me/919944769090' },
                { icon: <Share2 size={18} />, link: 'https://www.instagram.com/babucatering/' },
                { icon: <Globe size={18} />, link: 'https://www.instagram.com/babucatering/' }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-700 hover:text-[#219C45] hover:bg-[#F3FCF6] hover:border-[#2ECC71]/30 transition-all duration-300 bg-white border border-zinc-200 shadow-sm"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services / Catering */}
          <div className="lg:col-span-2">
            <h3 className="text-[#06200D] text-base font-bold uppercase tracking-wider mb-6 font-playfair border-b border-zinc-200 pb-2">Services</h3>
            <ul className="space-y-3.5">
              {[
                { name: 'Wedding Catering', link: '/#events' },
                { name: 'Corporate Buffet', link: '/#events' },
                { name: 'Birthday Parties', link: '/#events' },
                { name: 'Engagement Feasts', link: '/#events' },
                { name: 'Live Stations', link: '/menu' }
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.link} className="text-zinc-700 hover:text-[#219C45] transition-colors text-sm font-medium">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-[#06200D] text-base font-bold uppercase tracking-wider mb-6 font-playfair border-b border-zinc-200 pb-2">Quick Links</h3>
            <ul className="space-y-3.5">
              {[
                { name: 'Home Portal', link: '/' },
                { name: 'Signature Menu', link: '/menu' },
                { name: 'Pre-Booking Desk', link: '/booking' },
                { name: 'Contact HQ', link: '/#contact' }
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.link} className="text-zinc-700 hover:text-[#219C45] transition-colors text-sm font-medium">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter Subscription */}
          <div className="lg:col-span-4 flex flex-col">
            <h3 className="text-[#06200D] text-base font-bold uppercase tracking-wider mb-6 font-playfair border-b border-zinc-200 pb-2">Newsletter</h3>

            <p className="text-zinc-700 text-sm leading-relaxed mb-5 font-medium">
              Subscribe to receive updates on premium seasonal menus, discounts, and exclusive catering consultations.
            </p>

            <form onSubmit={handleSubscribe} className="relative w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email address..."
                className="w-full bg-[#F9FAFB] border border-zinc-200 rounded-xl py-3.5 pl-4 pr-12 text-[#06200D] text-xs focus:outline-none focus:border-[#2ECC71] transition-all font-outfit"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-[#219C45] p-2 rounded-lg transition-colors focus:outline-none"
                title="Subscribe"
              >
                {subscribed ? <Check size={16} className="text-[#2ECC71]" /> : <Send size={16} />}
              </button>
            </form>

            {subscribed && (
              <span className="text-[10px] font-black text-green-500 uppercase tracking-widest mt-3.5 block animate-fade-in">
                Thank you for subscribing!
              </span>
            )}
          </div>
        </div>

        {/* Contact Info Footer Grid */}
        <div className="border-t border-zinc-200 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-zinc-700 text-xs font-medium">
            &copy; {new Date().getFullYear()} BABU Catering Luxury Events. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-zinc-700 text-xs font-semibold uppercase tracking-widest">
            <a href="/#contact" className="hover:text-[#219C45] transition-colors">Privacy Policy</a>
            <a href="/#contact" className="hover:text-[#219C45] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
